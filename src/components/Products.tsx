import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Plus, ShoppingBag, X, MessageCircle, ChevronRight } from "lucide-react";

const WHATSAPP_NUMBER = "+254735008421";

import { productData, Product } from "../data/products";

const ProductCard: React.FC<{
  product: Product;
  onAddToCart: (p: Product) => void;
  onQuickView: (p: Product) => void;
  isLiked: boolean;
  onToggleLike: (id: number) => void;
}> = ({ product, onAddToCart, onQuickView, isLiked, onToggleLike }) => {
  return (
    <motion.div 
      layout
      className="flex-shrink-0 w-[170px] md:w-[200px] group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100/50"
    >
      <div className="relative h-[170px] md:h-[200px] overflow-hidden bg-gray-50">
        <img 
          src={product.image} 
          alt={product.name} 
          loading="lazy"
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer ${product.isComingSoon ? 'opacity-70 grayscale-[0.3]' : ''}`}
          onClick={() => !product.isComingSoon && onQuickView(product)}
        />
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.isComingSoon && (
            <span className="bg-brand-dark text-white text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shadow-sm">
              Coming Soon
            </span>
          )}
          {product.badge && (
            <span className="bg-brand-primary text-white text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shadow-sm">
              {product.badge}
            </span>
          )}
        </div>

        <button 
          onClick={(e) => { e.stopPropagation(); onToggleLike(product.id); }}
          className={`absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center transition-all ${isLiked ? 'bg-red-500 text-white shadow-sm' : 'bg-white/90 backdrop-blur-sm text-gray-300 hover:text-red-500'}`}
        >
          <Heart size={14} fill={isLiked ? "currentColor" : "none"} />
        </button>
      </div>
      
      <div className="p-3">
        <div className="mb-2">
          <h3 
            className={`font-bold text-sm text-gray-900 leading-tight line-clamp-1 ${product.isComingSoon ? 'opacity-50' : 'cursor-pointer hover:text-brand-primary'}`}
            onClick={() => !product.isComingSoon && onQuickView(product)}
          >
            {product.name}
          </h3>
          <p className="text-[11px] text-gray-500 mt-1 line-clamp-1">{product.description}</p>
          <p className="text-[9px] font-black text-brand-primary/40 uppercase tracking-tighter mt-1">{product.brand}</p>
        </div>
        
        <div className="flex items-center justify-between">
          <span className={`font-bold text-gray-900 text-sm ${product.isComingSoon ? 'opacity-50' : ''}`}>
            {product.variants ? `From Ksh ${Math.min(...product.variants.map(v => v.price))}` : `Ksh ${product.price}`}
          </span>
          <button 
            disabled={product.isComingSoon}
            onClick={() => product.variants 
              ? onAddToCart({ ...product, price: product.variants[0].price, size: product.variants[0].size }) 
              : onAddToCart(product)
            }
            className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all transform active:scale-90 ${product.isComingSoon ? 'bg-gray-100 text-gray-300' : 'bg-brand-secondary text-brand-primary hover:bg-brand-primary hover:text-white'}`}
          >
            <Plus size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const SectionHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="flex flex-col mb-4">
    <div className="flex items-center gap-2 mb-1">
      <div className="w-6 h-[2px] bg-brand-primary" />
      <span className="text-brand-primary font-black uppercase text-[9px] tracking-[0.2em]">{subtitle}</span>
    </div>
    <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 -tracking-tight">{title}</h2>
  </div>
);

const HorizontalCollection: React.FC<{
  title: string;
  subtitle: string;
  products: Product[];
  onAddToCart: (p: Product) => void;
  onQuickView: (p: Product) => void;
  likedIds: number[];
  onToggleLike: (id: number) => void;
}> = ({ title, subtitle, products, onAddToCart, onQuickView, likedIds, onToggleLike }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="mb-16 last:mb-0">
      <div className="flex justify-between items-end mb-6 px-6 max-w-7xl mx-auto">
        <SectionHeader title={title} subtitle={subtitle} />
        <div className="hidden md:flex gap-1.5">
           <button 
            onClick={() => scrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' })}
            className="w-8 h-8 rounded-lg border border-gray-100 flex items-center justify-center text-gray-300 hover:border-brand-primary hover:text-brand-primary transition-all"
           >
             <ChevronRight className="rotate-180" size={16} />
           </button>
           <button 
            onClick={() => scrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' })}
            className="w-8 h-8 rounded-lg border border-gray-100 flex items-center justify-center text-gray-300 hover:border-brand-primary hover:text-brand-primary transition-all"
           >
             <ChevronRight size={16} />
           </button>
        </div>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-6 pb-6 hide-scrollbar snap-x scroll-px-6"
      >
        {products.map((product) => (
          <div key={product.id} className="snap-start">
            <ProductCard 
              product={product} 
              onAddToCart={onAddToCart} 
              onQuickView={onQuickView}
              isLiked={likedIds.includes(product.id)}
              onToggleLike={onToggleLike}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

interface ProductsProps {
  onAddToCart: (p: any) => void;
  likedIds: number[];
  onToggleLike: (id: number) => void;
}

export default function Products({ onAddToCart, likedIds, onToggleLike }: ProductsProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [activeBrand, setActiveBrand] = useState<string>("All Brands");

  // Handle Esc key and Body Scroll Lock
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProduct(null);
    };

    if (selectedProduct) {
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [selectedProduct]);

  const brands = ["All Brands", ...new Set(Object.values(productData).flat().map(p => p.brand))];

  const filterProducts = (products: Product[]) => {
    if (activeBrand === "All Brands") return products;
    return products.filter(p => p.brand === activeBrand);
  };

  const handleQuickView = (product: Product) => {
    setSelectedProduct(product);
    if (product.variants && product.variants.length > 0) {
      setSelectedSize(product.variants[0].size);
    } else {
      setSelectedSize(null);
    }
  };

  const currentPrice = selectedProduct?.variants && selectedSize
    ? selectedProduct.variants.find(v => v.size === selectedSize)?.price || selectedProduct.price
    : selectedProduct?.price || 0;

  const handleWhatsAppOrder = (product: Product) => {
    const sizeStr = selectedSize ? ` (${selectedSize})` : '';
    const message = encodeURIComponent(`Hi Just It! I want to order ${product.name}${sizeStr} (Ksh ${currentPrice}).`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${message}`, '_blank');
  };

  const handleAddToCart = () => {
    if (!selectedProduct) return;
    onAddToCart({
      id: selectedProduct.id,
      name: selectedProduct.name,
      price: currentPrice,
      size: selectedSize || undefined
    });
    setSelectedProduct(null);
  };

  return (
    <section id="products" className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-brand-primary font-black uppercase text-xs tracking-[0.4em] mb-4 block">Our Shop</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-gray-900 mb-6 drop-shadow-sm">
            Refresh Your <span className="text-brand-primary italic">Vibe.</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg leading-relaxed">
            Partnering with premium brands to bring you the best African-inspired refreshments.
          </p>
        </motion.div>

        {/* Brand Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {brands.map(brand => (
            <button
              key={brand}
              onClick={() => setActiveBrand(brand)}
              className={`px-6 py-2 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all ${
                activeBrand === brand 
                  ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/20" 
                  : "bg-gray-50 text-gray-400 hover:bg-gray-100"
              }`}
            >
              {brand}
            </button>
          ))}
        </div>
      </div>

      {filterProducts(productData.jaba || []).length > 0 && (
        <HorizontalCollection 
          title="Jaba Collection" 
          subtitle="Bold African Refreshment"
          products={filterProducts(productData.jaba)} 
          onAddToCart={onAddToCart}
          onQuickView={handleQuickView}
          likedIds={likedIds}
          onToggleLike={onToggleLike}
        />
      )}

      {filterProducts(productData.moratina || []).length > 0 && (
        <HorizontalCollection 
          title="Moratina Collection" 
          subtitle="Tradition Reimagined"
          products={filterProducts(productData.moratina)} 
          onAddToCart={onAddToCart}
          onQuickView={handleQuickView}
          likedIds={likedIds}
          onToggleLike={onToggleLike}
        />
      )}

      {filterProducts(productData.natural || []).length > 0 && (
        <HorizontalCollection 
          title="Natural Juice" 
          subtitle="Pure Goodness"
          products={filterProducts(productData.natural)} 
          onAddToCart={onAddToCart}
          onQuickView={handleQuickView}
          likedIds={likedIds}
          onToggleLike={onToggleLike}
        />
      )}

      {/* Quick View Modal */}
      <AnimatePresence mode="wait">
        {selectedProduct && (
          <motion.div
            key="modal-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-gray-900/40 backdrop-blur-md"
            />
            
            <motion.div 
              layoutId={`product-${selectedProduct.id}`}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.y > 150) setSelectedProduct(null);
              }}
              className="relative bg-white w-full max-w-[700px] rounded-[32px] overflow-hidden shadow-2xl flex flex-col md:flex-row touch-none"
            >
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-6 right-6 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-gray-400 hover:text-brand-primary active:scale-90 z-20 transition-all shadow-lg border border-gray-100"
              >
                <X size={20} />
              </button>

              <div className="w-full md:w-1/2 h-[300px] md:h-auto bg-brand-secondary/30 relative flex items-center justify-center">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                  className="max-h-full max-w-full h-auto w-auto object-contain p-8 md:p-12 drop-shadow-2xl"
                />
              </div>
              
              <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                <div className="mb-6">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="px-2 py-0.5 bg-brand-secondary text-brand-primary text-[9px] font-black uppercase tracking-widest rounded-full">
                      {selectedProduct.category}
                    </span>
                    {selectedProduct.isComingSoon && (
                      <span className="px-2 py-0.5 bg-brand-dark text-white text-[9px] font-black uppercase tracking-widest rounded-full">
                        Coming Soon
                      </span>
                    )}
                    {selectedProduct.badge && (
                      <span className="px-2 py-0.5 bg-brand-primary text-white text-[9px] font-black uppercase tracking-widest rounded-full">
                        {selectedProduct.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-4xl font-bold text-gray-900 mb-2 leading-tight tracking-tight">
                    {selectedProduct.name}
                  </h3>
                  
                  {/* Size Selector */}
                  {selectedProduct.variants && (
                    <div className="mb-4">
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Select Size</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct.variants.map((v) => (
                          <button
                            key={v.size}
                            onClick={() => setSelectedSize(v.size)}
                            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                              selectedSize === v.size
                                ? "bg-brand-primary text-white border-brand-primary shadow-lg shadow-brand-primary/20"
                                : "bg-white text-gray-500 border-gray-100 hover:border-brand-primary hover:text-brand-primary"
                            }`}
                          >
                            {v.size}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {selectedProduct.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold text-brand-primary bg-brand-primary/5 px-2 py-0.5 rounded-md">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed font-normal">
                    {selectedProduct.fullDescription}
                  </p>
                </div>

                <div className="flex items-center gap-6 py-6 border-y border-gray-50 mb-8">
                  <div className="font-display font-black text-gray-900 text-4xl tracking-tighter">
                    Ksh {currentPrice}
                  </div>
                  <button 
                    onClick={() => onToggleLike(selectedProduct.id)}
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${likedIds.includes(selectedProduct.id) ? 'bg-red-500 text-white shadow-lg shadow-red-500/30' : 'bg-gray-50 text-gray-300 hover:text-red-500 border border-gray-100'}`}
                  >
                    <Heart size={20} fill={likedIds.includes(selectedProduct.id) ? "currentColor" : "none"} />
                  </button>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  <button 
                    onClick={handleAddToCart}
                    className="flex items-center justify-center gap-2 bg-brand-primary text-white py-3.5 rounded-xl font-bold hover:btn-gradient transition-all active:scale-95 text-sm"
                  >
                    <ShoppingBag size={18} />
                    Add to Basket
                  </button>
                  <button 
                    onClick={() => handleWhatsAppOrder(selectedProduct)}
                    className="flex items-center justify-center gap-2 bg-gray-900 text-white py-3.5 rounded-xl font-bold hover:bg-black transition-all active:scale-95 text-sm"
                  >
                    <MessageCircle size={18} />
                    Order on WhatsApp
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
