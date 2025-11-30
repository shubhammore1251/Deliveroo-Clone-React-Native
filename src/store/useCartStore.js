import { create } from "zustand";

const useCartStore = create((set, get) => ({
  cart: {},

  addToCart: (restaurantId, dishId, item, quantity = 1) => {
    const restaurantItems = get().cart[restaurantId] || [];

    const existingDishIndex = restaurantItems.findIndex(
      (dish) => dish.dishId === dishId,
    );

    if (existingDishIndex >= 0) {
      set((state) => ({
        cart: {
          ...state.cart,
          [restaurantId]: restaurantItems.map((dish, index) =>
            index === existingDishIndex
              ? { ...dish, quantity: dish.quantity + quantity }
              : dish,
          ),
        },
      }));
    } else {
      set((state) => ({
        cart: {
          ...state.cart,
          [restaurantId]: [...restaurantItems, { item, dishId, quantity }],
        },
      }));
    }
  },

  removeFromCart: (restaurantId, dishId) => {
    set((state) => {
      const restaurantItems = state.cart[restaurantId] || [];
      const dishIndex = restaurantItems.findIndex(
        (dish) => dish.dishId === dishId,
      );

      if (dishIndex === -1) return state;

      const updatedItems = restaurantItems
        .map((item, index) =>
          index === dishIndex ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0);

      const updatedCart = { ...state.cart };

      if (updatedItems.length > 0) {
        updatedCart[restaurantId] = updatedItems;
      } else {
        delete updatedCart[restaurantId];
      }

      return { cart: updatedCart };
    });
  },

  getTotalQuantity: (restaurantId) => {
    const restaurantItems = get().cart[restaurantId];
    return (
      restaurantItems?.reduce((total, dish) => total + dish.quantity, 0) || 0
    );
  },

  getCartTotal: (restaurantId) => {
    const restaurantItems = get().cart[restaurantId];
    return (
      restaurantItems?.reduce(
        (total, dish) => total + dish.item.price * dish.quantity,
        0,
      ) || 0
    );
  },

  emptyRestaurantCart: (restaurantId) => {
    set((state) => ({
      cart: {
        ...state.cart,
        [restaurantId]: [],
      },
    }));
  },
}));

export default useCartStore;
