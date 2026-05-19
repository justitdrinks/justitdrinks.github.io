import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const GALLERY_IMAGES = [
  { id: 1, url: "https://images.unsplash.com/photo-1547514701-42782101795e?q=80&w=800", alt: "Fresh Botanical Energy", caption: "Natural Energy" },
  { id: 2, url: "https://images.unsplash.com/photo-1523363342553-61fc072a2455?q=80&w=800", alt: "Citrus Refreshment", caption: "Zesty Life" },
  { id: 3, url: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?q=80&w=800", alt: "Berry Infusion", caption: "Wild Berries" },
  { id: 4, url: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=800", alt: "Ginger Kick", caption: "Spicy Vibes" },
  { id: 5, url: "https://images.unsplash.com/photo-1550506389-d10667ea894a?q=80&w=800", alt: "Pineapple Punch", caption: "Tropical Escape" },
  { id: 6, url: "https://images.unsplash.com/photo-1588107908922-8179269e8841?q=80&w=800", alt: "Minty Fresh", caption: "Cooling Mind" },
  { id: 7, url: "https://images.unsplash.com/photo-1556761175-5973cf0f32e7?q=80&w=800", alt: "Hibiscus Bloom", caption: "Floral Heart" },
  { id: 8, url: "https://images.unsplash.com/photo-1523362628242-4dc5820061fa?q=80&w=800", alt: "Baobab Bliss", caption: "Superfood" },
  { id: 9, url: "https://images.unsplash.com/photo-1589733902251-6f6368d18440?q=80&w=800", alt: "Passion Fruit", caption: "Coastal Soul" },
  { id: 10, url: "https://images.unsplash.com/photo-1591073113125-e46713c829ed?q=80&w=800", alt: "Mango Nectar", caption: "Velvet Sun" },
  { id: 11, url: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800", alt: "Brand Lifestyle", caption: "Modern Living" },
  { id: 12, url: "https://images.unsplash.com/photo-1544026760-49896ce1231f?q=80&w=800", alt: "Traditional Crafts", caption: "Heritage" },
  { id: 13, url: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?q=80&w=800", alt: "Spice Route", caption: "Aromatic" },
  { id: 14, url: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?q=80&w=800", alt: "Revitalize", caption: "Focus" },
  { id: 15, url: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800", alt: "Intense Flavor", caption: "Extra Bold" },
  { id: 16, url: "https://images.unsplash.com/photo-1444927714506-8492d94b4e3d?q=80&w=800", alt: "Sunset Moments", caption: "Golden Hour" },
  { id: 17, url: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=800", alt: "Productivity", caption: "No Crash" },
  { id: 18, url: "https://images.unsplash.com/photo-1589733901241-5e5d070b427b?q=80&w=800", alt: "Hydration", caption: "Pure Life" },
  { id: 19, url: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?q=80&w=800", alt: "Garden Fresh", caption: "Grown Here" },
  { id: 20, url: "https://images.unsplash.com/photo-1596701062351-8c0c1692267b?q=80&w=800", alt: "Tropical Bloom", caption: "Real Goodness" }
];

const Gallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section className="py-24 bg-brand-secondary/30 overflow-hidden" id="gallery">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <span className="text-brand-primary text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">
            Lifestyle
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tighter">
            The World of Just It.
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-lg leading-relaxed">
            From the coastal farms to the modern city streets. Experience the refreshment that defines a lifestyle.
          </p>
        </motion.div>
      </div>

      {/* Optimized Horizontal Swipe Container */}
      <div 
        ref={containerRef}
        className="flex gap-4 overflow-x-auto pb-12 px-6 no-scrollbar snap-x snap-mandatory cursor-grab active:cursor-grabbing"
      >
        {GALLERY_IMAGES.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "0px -50px" }}
            transition={{ delay: index * 0.05 }}
            className="flex-shrink-0 w-[280px] md:w-[350px] aspect-[3/4] rounded-[2rem] overflow-hidden relative group snap-start shadow-xl shadow-brand-primary/5"
          >
            {/* Background Placeholder for performance (prevents layout shift) */}
            <div className="absolute inset-0 bg-gray-100" />
            
            <img 
              src={image.url} 
              alt={image.alt}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
            />
            
            {/* Gradient Overlay for Text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <span className="text-brand-accent text-[8px] font-black uppercase tracking-widest mb-1">
                Story 0{index + 1}
              </span>
              <h3 className="text-white font-display text-xl font-bold leading-tight">
                {image.caption}
              </h3>
            </div>
          </motion.div>
        ))}
        
        {/* Invisible spacer for padding at the end */}
        <div className="flex-shrink-0 w-6" />
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-8 flex justify-center md:justify-end">
        <div className="hidden md:flex items-center gap-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">
          <span>Swipe to Explore</span>
          <div className="w-12 h-[1px] bg-gray-200" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
