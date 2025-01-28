import { create } from "zustand";

const useStore = create((set, get) => ({
  cartItemsById: {},
  updateCartItems: (item) => {
    const { cartItemsById } = get();

    if (cartItemsById[item.id]) {
      delete cartItemsById[item.id];
    } else {
      cartItemsById[item.id] = { item, count: 1 };
    }
    set({});
  },

  cartItemsLikes: new Set(),
  updateItemsLike: (id) => {
    const { cartItemsLikes } = get();

    if (cartItemsLikes.has(id)) cartItemsLikes.delete(id);
    else cartItemsLikes.add(id);

    set({});
  },

  count: 0,
  increment: (state) => ({ ...state, increment: state.increment + 1 }),
  decrement: (state) => ({ ...state, increment: state.increment - 1 }),

  lang: "ru",
  setLang: (newLang) => set({ lang: newLang }),
}));

export default useStore;
