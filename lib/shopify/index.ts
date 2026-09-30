// lib/shopify/index.ts
import { getProductsQuery, getProductQuery, createCartMutation, addToCartMutation, getCartQuery,
   updateCartQuantityMutation, removeFromCartMutation } from './queries';
import { ShopifyProduct, ShopifyCart,  } from './types';


const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const token = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;
const version = process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION;
const endpoint = `https://${domain}/api/${version}/graphql.json`;

type ShopifyFetchParams = {
  query: string;
  variables?: object;
  tags?: string[];
  cache?: RequestCache;
};

export async function shopifyFetch<T>({
  query,
  variables = {},
  tags = [],
  cache = 'force-cache',
}: ShopifyFetchParams): Promise<{ status: number; body: T }> {
  try {
    const result = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': token || '',
      },
      body: JSON.stringify({ query, variables }),
      cache,
      ...(tags.length > 0 && { next: { tags } }),
    });

    if (!result.ok) {
      const text = await result.text();
      throw new Error(`Shopify HTTP ${result.status}: ${text}`);
    }

    const body = await result.json();

    if (body.errors) {
      throw new Error(body.errors[0].message || JSON.stringify(body.errors));
    }

    return {
      status: result.status,
      body,
    };
  } catch (error) {
    console.error('Falha na URL:', endpoint);
    console.error('Motivo do erro:', error instanceof Error ? error.message : error);
    throw error;
  }
}

export async function getProducts(): Promise<ShopifyProduct[]> {
  const res = await shopifyFetch<{ data: { products: { edges: { node: ShopifyProduct }[] } } }>({
    query: getProductsQuery,
    tags: ['products'],
  });

  return res.body.data.products.edges.map((edge) => edge.node);
}

export async function getProduct(handle: string): Promise<ShopifyProduct | undefined> {
  const res = await shopifyFetch<{ data: { product: ShopifyProduct } }>({
    query: getProductQuery,
    variables: { handle },
    tags: ['products'],
  });

  return res.body.data.product;
}

//Carrinho
export async function createCart(): Promise<{ id: string; checkoutUrl: string }> {
  const res = await shopifyFetch<{ data: { cartCreate: { cart: { id: string; checkoutUrl: string } } } }>({
    query: createCartMutation,
    cache: 'no-store', // Carrinhos não podem usar cache
  });

  return res.body.data.cartCreate.cart;
}

export async function addToCart(cartId: string, variantId: string) {
  const res = await shopifyFetch<{
    data: {
      cartLinesAdd: {
        cart: {
          id: string;
          checkoutUrl: string;
        };
      };
    };
  }>({
    query: addToCartMutation,
    variables: {
      cartId,
      lines: [{ merchandiseId: variantId, quantity: 1 }],
    },
    cache: 'no-store',
  });

  return res.body.data.cartLinesAdd.cart;
}

// lib/shopify/index.ts (Adicione no final)

export async function getCart(cartId: string): Promise<ShopifyCart> {
  const res = await shopifyFetch<{ data: { cart: ShopifyCart } }>({
    query: getCartQuery,
    variables: { cartId },
    cache: 'no-store',
  });

  return res.body.data.cart;
}


export async function updateCartQuantity(cartId: string, lineId: string, quantity: number) {
  await shopifyFetch({
    query: updateCartQuantityMutation,
    variables: { cartId, lines: [{ id: lineId, quantity }] },
    cache: 'no-store',
  });
}

export async function removeFromCart(cartId: string, lineId: string) {
  await shopifyFetch({
    query: removeFromCartMutation,
    variables: { cartId, lineIds: [lineId] },
    cache: 'no-store',
  });
}