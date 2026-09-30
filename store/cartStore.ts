// store/cartStore.ts
import { create } from 'zustand';

interface CartState {
  cartId: string | null;
  checkoutUrl: string | null;
  isOpen: boolean;
  setCartCredentials: (id: string, url: string) => void;
  openCart: () => void;
  closeCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  cartId: null,
  checkoutUrl: null,
  isOpen: false,
  setCartCredentials: (id, url) => set({ cartId: id, checkoutUrl: url }),
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
}));