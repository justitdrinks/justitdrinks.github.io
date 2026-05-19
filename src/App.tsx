import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Gallery from "./components/Gallery";
import Features from "./components/Features";
import Community from "./components/Community";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { allProducts } from "./data/products";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { ArrowUp, ShoppingBag, X, MessageCircle, ExternalLink, Heart, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  size?: string;
}

const WHATSAPP_NUMBER = "254735008421";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [showScrollTop, setShowScrollTop] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [likedIds, setLikedIds] = useState<number[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    
    try {
      const savedWishlist = localStorage.getItem('wishlist');
      if (savedWishlist) {
        const parsed = JSON.parse(savedWishlist);
        if (Array.isArray(parsed)) {
          setLikedIds(parsed);
        }
      }
    } catch (e) {
      console.error("Failed to parse wishlist", e);
      localStorage.removeItem('wishlist');
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const addToCart = (product: { id: number; name: string; price: number; size?: string }) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id && item.size === product.size);
      if (existing) {
        return prev.map(item => item.id === product.id && item.size === product.size ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: number, size?: string) => {
    setCart(prev => prev.filter(item => !(item.id === id && item.size === size)));
  };

  const toggleLike = (id: number) => {
    setLikedIds(prev => {
      const next = prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id];
      localStorage.setItem('wishlist', JSON.stringify(next));
      return next;
    });
  };

  const cartTotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const handleCheckout = () => {
    const message = `🍹 *NEW ORDER — JUST IT*%0A%0A` + 
      `Customer: Guest User%0A` +
      `━━━━━━━━━━━━━━━%0A%0A` + 
      cart.map(item => `🧃 *${item.name}*${item.size ? ` (${item.size})` : ''}%0AQty: ${item.quantity}%0APrice: Ksh ${item.price * item.quantity}`).join('%0A%0A') + 
      `%0A%0A━━━━━━━━━━━━━━━%0A%0A` +
      `*TOTAL: Ksh ${cartTotal}*%0A%0A` +
      `Delivery/Pickup:%0APending confirmation%0A%0A` +
      `Thank you for ordering from JUST IT 🌿`;
    
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen font-sans text-gray-900 selection:bg-brand-primary selection:text-white bg-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-primary z-[70] origin-left"
        style={{ scaleX }}
      />

      <Navbar 
        cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} 
        onOpenCart={() => setIsCartOpen(true)} 
        onOpenWishlist={() => setIsWishlistOpen(true)}
        wishlistCount={likedIds.length} 
      />
      
      <main>
        <Hero />
        <About />
        <Products 
          onAddToCart={addToCart} 
          likedIds={likedIds} 
          onToggleLike={toggleLike}
        />
        <Features />
        <Gallery />
        <Community />
        <Testimonials />
        <Contact />
      </main>

      <Footer />

      {/* Cart Drawer */}
      <AnimatePresence mode="wait">
        {isCartOpen && (
          <motion.div
            key="cart-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80]"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col"
            >
              <div className="p-8 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                <div>
                  <h2 className="text-2xl font-display font-bold text-gray-900 tracking-tight">Your Bag</h2>
                  <p className="text-[10px] uppercase font-black tracking-widest text-brand-primary mt-1">Ready for refreshment</p>
                </div>
                <button onClick={() => setIsCartOpen(false)} className="p-3 bg-white hover:bg-gray-100 rounded-2xl transition-all border border-gray-200">
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-8 space-y-6">
                {cart.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                    <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center text-gray-200">
                      <ShoppingBag size={40} />
                    </div>
                    <p className="text-gray-400 font-medium italic">Your bag is feeling empty...</p>
                    <button onClick={() => setIsCartOpen(false)} className="bg-brand-primary text-white px-8 py-3 rounded-xl font-bold text-sm btn-gradient">Discover Drinks</button>
                  </div>
                ) : (
                  cart.map(item => (
                    <div key={`${item.id}-${item.size || 'default'}`} className="flex gap-4 group">
                      <div className="w-20 h-20 bg-gray-100 rounded-2xl overflow-hidden shrink-0 text-brand-primary flex items-center justify-center font-bold">JI</div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-bold text-gray-900 group-hover:text-brand-primary transition-colors">{item.name}</h4>
                            {item.size && <p className="text-[10px] font-bold text-brand-primary bg-brand-primary/10 px-2 py-0.5 rounded inline-block mt-1">{item.size}</p>}
                          </div>
                          <button onClick={() => removeFromCart(item.id, item.size)} className="text-gray-300 hover:text-red-500 transition-colors">
                            <X size={16} />
                          </button>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Quantity: {item.quantity}</p>
                        <p className="text-sm font-black text-gray-900 mt-2">Ksh {item.price * item.quantity}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-8 bg-gray-50/50 border-t border-gray-100 space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 font-medium">Subtotal</span>
                    <span className="text-2xl font-black text-gray-900">Ksh {cartTotal}</span>
                  </div>
                  <button
                    onClick={handleCheckout}
                    className="w-full bg-brand-primary text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-brand-primary/30 transition-all btn-gradient"
                  >
                    <MessageCircle size={20} />
                    Checkout via WhatsApp
                  </button>
                  <p className="text-center text-[10px] uppercase font-black tracking-widest text-gray-400">Secure Order Verification</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Wishlist Drawer */}
      <AnimatePresence mode="wait">
        {isWishlistOpen && (
          <motion.div
            key="wishlist-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80]"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsWishlistOpen(false)}
              className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col"
            >
              <div className="p-8 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                <div>
                  <h2 className="text-2xl font-display font-bold text-gray-900 tracking-tight">Your Wishlist</h2>
                  <p className="text-[10px] uppercase font-black tracking-widest text-brand-primary mt-1">Saved for later</p>
                </div>
                <button onClick={() => setIsWishlistOpen(false)} className="p-3 bg-white hover:bg-gray-100 rounded-2xl transition-all border border-gray-200">
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-8 space-y-6">
                {likedIds.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                    <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center text-gray-200">
                      <Heart size={40} />
                    </div>
                    <p className="text-gray-400 font-medium italic">Empty wishlist...</p>
                    <button onClick={() => setIsWishlistOpen(false)} className="bg-brand-primary text-white px-8 py-3 rounded-xl font-bold text-sm btn-gradient">Favorite some Drinks</button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {allProducts.filter(p => likedIds.includes(p.id)).map(product => (
                      <div key={product.id} className="flex gap-4 group">
                        <div className="w-20 h-20 bg-gray-100 rounded-2xl overflow-hidden shrink-0">
                           <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <h4 className="font-bold text-gray-900">{product.name}</h4>
                            <button onClick={() => toggleLike(product.id)} className="text-red-500">
                              <Heart size={16} fill="currentColor" />
                            </button>
                          </div>
                          <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest">{product.brand}</p>
                          <p className="text-sm font-black text-gray-900 mt-2">Ksh {product.price}</p>
                          {!product.isComingSoon ? (
                            <button 
                              onClick={() => { 
                                const productToAdd = product.variants 
                                  ? { id: product.id, name: product.name, price: product.variants[0].price, size: product.variants[0].size }
                                  : { id: product.id, name: product.name, price: product.price };
                                addToCart(productToAdd); 
                                setIsWishlistOpen(false); 
                                setIsCartOpen(true); 
                              }}
                              className="text-brand-primary text-[10px] font-black uppercase tracking-widest mt-2 hover:underline"
                            >
                              Add to Bag
                            </button>
                          ) : (
                            <span className="text-gray-300 text-[10px] font-black uppercase tracking-widest mt-2 block">
                              Coming Soon
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll to Top */}
      <motion.button
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: showScrollTop ? 1 : 0, scale: showScrollTop ? 1 : 0.5 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gray-900 text-white rounded-full flex items-center justify-center shadow-2xl z-[70] hover:bg-brand-primary transition-all active:scale-90"
      >
        <ArrowUp size={24} />
      </motion.button>
    </div>
  );
}
