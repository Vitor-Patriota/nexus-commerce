

export type ShopifyImage = {
  url: string;
  altText: string | null;
};



export type ShopifyProduct = {
  id: string;
  title: string;
  handle: string;
  description: string;
  images: {
    edges: { node: ShopifyImage }[];
  };
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  
  variants?: {
    edges: {
      node: {
        id: string;
        title: string;
        availableForSale: boolean;
        price: {
          amount: string;
          currencyCode: string;
        };
      };
    }[];
  };
};



export type ShopifyCart = {
  id: string;
  checkoutUrl: string;
  cost: {
    subtotalAmount: {
      amount: string;
      currencyCode: string;
    };
  };
  lines: {
    edges: {
      node: {
        id: string;
        quantity: number;
        merchandise: {
          id: string;
          title: string;
          product: { title: string };
          image: { url: string; altText: string | null } | null;
          price: { amount: string; currencyCode: string };
        };
      };
    }[];
  };
};