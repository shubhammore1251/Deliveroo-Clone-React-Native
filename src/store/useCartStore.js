import { create } from "zustand";

// Create the cart store using Zustand
const useCartStore = create((set, get) => ({
  cart: {},
  addToCart: (restaurantId, dishId, item, quantity = 1) => {
    // Find if the restaurant already exists in the cart
    let restaurantItems = get().cart[restaurantId] || [];

    // Find if the dish already exists in the restaurant's cart to avoid duplicates
    const existingDishIndex = restaurantItems.findIndex(
      (dish) => dish.dishId === dishId
    );

    if (existingDishIndex >= 0) {
      // If the dish exists, increase its quantity
      set((state) => ({
        cart: {
          ...state.cart,
          [restaurantId]: restaurantItems.map((dish, index) =>
            index === existingDishIndex
              ? { ...dish, quantity: dish.quantity + quantity }
              : dish
          ),
        },
      }));
    } else {
      // If the dish does not exist, add it to the restaurant's cart with the specified quantity
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
        (dish) => dish.dishId === dishId
      );

      if (dishIndex === -1) return state; // Dish not found

      const updatedItems = restaurantItems
        .map((item, index) =>
          index === dishIndex ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0); // Remove item if quantity becomes 0

      const updatedCart = { ...state.cart };

      if (updatedItems.length > 0) {
        // If there are still items for the restaurant, update the cart
        updatedCart[restaurantId] = updatedItems;
      } else {
        // If no items are left, remove the restaurant from the cart
        delete updatedCart[restaurantId];
      }

      return {
        cart: updatedCart,
      };
    });
  },
  getTotalQuantity: (restaurantId) => {
    // Calculate the total quantity for a given restaurant
    const restaurantItems = get().cart[restaurantId];
    return (
      restaurantItems?.reduce((total, dish) => total + dish.quantity, 0) || 0
    );
  },
}));

export default useCartStore;
