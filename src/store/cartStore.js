import { create } from 'zustand';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notifyAdded = () => toast.success('Added to cart!', { autoClose: 3000 });
const notifyExisted = () => toast.error('Item already in cart!', { autoClose: 3000 });

const useCartStore = create((set) => ({
  cart: [],
  addToCart: (product, quantity) => set((state) => {
    const exists = state.cart.find(item => item.id === product.id);
    if (exists) {
      notifyExisted()
      return {
        cart: state.cart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      };
    }
    notifyAdded()
    return { cart: [...state.cart, { ...product, quantity: quantity }] };
  }),
  clearCart: () => set(() => ({ cart: [] })),
  increaseQuantity: (productId) => set((state) => ({
    cart: state.cart.map(item =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    )
  })),
  decreaseQuantity: (productId) => set((state) => ({
    cart: state.cart.reduce((acc, item) => {
      if (item.id === productId) {
        if (item.quantity > 1) {
          acc.push({ ...item, quantity: item.quantity - 1 });
        }
      } else {
        acc.push(item);
      }
      return acc;
    }, []),
  })),
}));

export default useCartStore;
