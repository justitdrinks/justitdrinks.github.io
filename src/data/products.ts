export interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;
  description: string;
  fullDescription: string;
  price: number;
  image: string;
  tags: string[];
}

export const productData: { [key: string]: Product[] } = {
  jaba: [
    {
      id: 1,
      name: "Classic Jaba",
      brand: "Just It",
      category: "Jaba Collection",
      description: "Authentic, energizing experience that keeps you sharp for hours.",
      fullDescription: "The pure essence of khat. Crafted with premium leaves for an authentic, energizing experience that keeps you sharp for hours. A traditional favorite reinvented for the modern palate.",
      price: 250,
      image: "https://images.unsplash.com/photo-1547514701-42782101795e?q=80&w=600",
      tags: ["Classic", "Energy"]
    },
    {
      id: 2,
      name: "Lemon Zing Jaba",
      brand: "Just It",
      category: "Jaba Collection",
      description: "Infused with Mediterranean lemon zest for a refreshing kick.",
      fullDescription: "Our signature jaba juice infused with Mediterranean lemon zest. The perfect balance of bitter and sour for a refreshing kick that awakens the senses.",
      price: 280,
      image: "https://images.unsplash.com/photo-1523363342553-61fc072a2455?q=80&w=600",
      tags: ["Refreshing", "Zesty"]
    },
    {
      id: 3,
      name: "Berry Kush Jaba",
      brand: "Just It",
      category: "Jaba Collection",
      description: "A wild blend of forest berries with natural energy.",
      fullDescription: "A wild blend of forest berries mixed with the natural energy of jaba. Sweet, tart, and incredibly invigorating for any time of day.",
      price: 300,
      image: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?q=80&w=600",
      tags: ["Sweet", "Fruity"]
    },
    {
      id: 4,
      name: "Ginger Blast Jaba",
      brand: "Just It",
      category: "Jaba Collection",
      description: "Ultimate health-meets-energy tonic with double strength ginger.",
      fullDescription: "The ultimate health-meets-energy tonic. Double-strength ginger juice extracts combined with our premium jaba base for a spicy, healthy lift.",
      price: 280,
      image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=600",
      tags: ["Immunity", "Spicy"]
    },
    {
      id: 5,
      name: "Pineapple Punch Jaba",
      brand: "Just It",
      category: "Jaba Collection",
      description: "Tropical pineapple infusion for a sweet, energetic vibe.",
      fullDescription: "Tropical pineapple juices blended with our premium jaba. A sweet, sunny escape that keeps your energy levels at their peak.",
      price: 270,
      image: "https://images.unsplash.com/photo-1550506389-d10667ea894a?q=80&w=600",
      tags: ["Tropical", "Sweet"]
    },
    {
      id: 6,
      name: "Minty Fresh Jaba",
      brand: "Just It",
      category: "Jaba Collection",
      description: "Cooling peppermint levels for a crisp, wake-up call.",
      fullDescription: "Double-distilled peppermint mixed with our refined jaba base. Cooling, crisp, and perfect for long working hours or late study sessions.",
      price: 260,
      image: "https://images.unsplash.com/photo-1588107908922-8179269e8841?q=80&w=600",
      tags: ["Cooling", "Fresh"]
    },
    {
      id: 12,
      name: "Watermelon Rush Jaba",
      brand: "Just It",
      category: "Jaba Collection",
      description: "Succulent watermelon sweetness paired with natural focus.",
      fullDescription: "Real watermelon juice concentrated and paired with our signature jaba. Light, hydrating, and perfectly energizing.",
      price: 290,
      image: "https://images.unsplash.com/photo-1589733901241-5e5d070b427b?q=80&w=600",
      tags: ["Hydrating", "Sweet"]
    },
    {
      id: 13,
      name: "Spice Route Jaba",
      brand: "Just It",
      category: "Jaba Collection",
      description: "A blend of cloves and cinnamon for a warm, grounded energy.",
      fullDescription: "Inspired by the Swahili coast, this blend features cloves, cinnamon, and a hint of cardamom mixed with jaba for a deeply aromatic experience.",
      price: 320,
      image: "https://images.unsplash.com/photo-1587595509536-53d368d18d40?q=80&w=600",
      tags: ["Aromatic", "Warm"]
    }
  ],
  moratina: [
    {
      id: 7,
      name: "Classic Moratina",
      brand: "Just It",
      category: "Moratina Collection",
      description: "Refined non-alcoholic version of the tradition.",
      fullDescription: "A refined, non-alcoholic version of the traditional Kenyan classic. Deep, rich, and sophisticated with notes of roasted honey and heritage.",
      price: 450,
      image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=600",
      tags: ["Heritage", "Premium"]
    },
    {
      id: 10,
      name: "Honey Gold Moratina",
      brand: "Just It",
      category: "Moratina Collection",
      description: "Liquid gold sweetness with a heritage base.",
      fullDescription: "Premium Moratina base infused with sustainably sourced honey. A smoother, sweeter take on the classic experience.",
      price: 500,
      image: "https://images.unsplash.com/photo-1514361892635-6b07eba1aa53?q=80&w=600",
      tags: ["Sweet", "Smooth"]
    },
    {
      id: 14,
      name: "Amber Reserve Moratina",
      brand: "Just It",
      category: "Moratina Collection",
      description: "Small-batch reserve for the ultimate connoisseur.",
      fullDescription: "A double-filtered reserve batch featuring the deepest woody notes of the sausage tree fruit. For those who appreciate the true craftsmanship of tradition.",
      price: 650,
      image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=600",
      tags: ["Special", "Reserve"]
    },
    {
      id: 15,
      name: "Vanilla Oak Moratina",
      brand: "Just It",
      category: "Moratina Collection",
      description: "Subtle vanilla notes aged with natural oak extracts.",
      fullDescription: "A modern twist where traditional moratina meets natural vanilla extracts. Creamy, familiar yet excitingly different.",
      price: 550,
      image: "https://images.unsplash.com/photo-1544026760-49896ce1231f?q=80&w=600",
      tags: ["Modern", "Creamy"]
    },
    {
      id: 16,
      name: "Cinnamon Sky Moratina",
      brand: "Just It",
      category: "Moratina Collection",
      description: "Warm cinnamon spice blended perfectly with tradition.",
      fullDescription: "Infused with Ceylon cinnamon, this blend offers a warm, spicy finish that perfectly complements the earthy notes of the traditional moratina.",
      price: 520,
      image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?q=80&w=600",
      tags: ["Spicy", "Warm"]
    },
    {
      id: 17,
      name: "Ginger Root Moratina",
      brand: "Just It",
      category: "Moratina Collection",
      description: "Sharp ginger bite for a revitalizing traditional serve.",
      fullDescription: "Freshly pressed ginger root mixed with our heritage base. A sharp, invigorating experience that clears the mind.",
      price: 480,
      image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?q=80&w=600",
      tags: ["Sharp", "Revitalizing"]
    },
    {
      id: 18,
      name: "Royal Black Moratina",
      brand: "Just It",
      category: "Moratina Collection",
      description: "Deepest roast, boldest flavor for a regal experience.",
      fullDescription: "Featuring scorched honey and extra long-steeped ingredients, this is our most intense flavor profile yet. Bold and unforgettable.",
      price: 700,
      image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=600",
      tags: ["Bold", "Intense"]
    },
    {
      id: 19,
      name: "Sunset Orange Moratina",
      brand: "Just It",
      category: "Moratina Collection",
      description: "Bright citrus notes bring a sunny glow to tradition.",
      fullDescription: "Dried orange peel and fresh nectar mixed with Moratina. Bright, acidic, and wonderfully balanced for an evening toast.",
      price: 530,
      image: "https://images.unsplash.com/photo-1444927714506-8492d94b4e3d?q=80&w=600",
      tags: ["Citrus", "Balanced"]
    }
  ],
  natural: [
    {
      id: 8,
      name: "Hibiscus High",
      brand: "Freshly",
      category: "Natural Juice",
      description: "Cold-brewed hibiscus with a hint of lime and mint.",
      fullDescription: "Cold-brewed hibiscus with a hint of lime and mint. A floral explosion that stays with you, packed with antioxidants and natural freshness.",
      price: 200,
      image: "https://images.unsplash.com/photo-1556761175-5973cf0f32e7?q=80&w=600",
      tags: ["Floral", "Antioxidant"]
    },
    {
      id: 9,
      name: "Baobab Bliss",
      brand: "Wild",
      category: "Natural Juice",
      description: "Superfood in a bottle. Tangy baobab and honey.",
      fullDescription: "Superfood in a bottle. Tangy baobab fruit blended with wild honey and vanilla for a creamy, nutritious delight that fuels your body.",
      price: 350,
      image: "https://images.unsplash.com/photo-1523362628242-4dc5820061fa?q=80&w=600",
      tags: ["Superfood", "Creamy"]
    },
    {
      id: 11,
      name: "Passion Punch",
      brand: "Coastal",
      category: "Natural Juice",
      description: "Intense passion fruit with a tropical twist.",
      fullDescription: "A vibrant blend of coastal passion fruits. Sharp, sweet, and perfectly chilled for Kenya's sunny afternoons.",
      price: 180,
      image: "https://images.unsplash.com/photo-1589733902251-6f6368d18440?q=80&w=600",
      tags: ["Tropical", "Vibrant"]
    },
    {
      id: 20,
      name: "Mango Moon",
      brand: "Coastal",
      category: "Natural Juice",
      description: "Rich coastal mango nectar, smooth and velvety.",
      fullDescription: "Pure nectar from the finest Ngowe mangos. Thick, velvety, and naturally sweet without any added sugars.",
      price: 220,
      image: "https://images.unsplash.com/photo-1591073113125-e46713c829ed?q=80&w=600",
      tags: ["Smooth", "Sweet"]
    },
    {
      id: 21,
      name: "Green Goddess",
      brand: "Garden",
      category: "Natural Juice",
      description: "Detox blend of kale, apple, and cucumber.",
      fullDescription: "A refreshing detox blend. Cold-pressed kale, Granny Smith apples, and cucumber with a dash of lemon for your daily health reboot.",
      price: 400,
      image: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?q=80&w=600",
      tags: ["Health", "Green"]
    },
    {
      id: 22,
      name: "Ruby Beet",
      brand: "Garden",
      category: "Natural Juice",
      description: "Earthy beetroot with sweet carrot and ginger.",
      fullDescription: "Beautifully earthy and sweet. Beetroot and carrot juice with a ginger finish to boost your stamina and energy naturally.",
      price: 380,
      image: "https://images.unsplash.com/photo-1615485290382-441e4d0c9cb5?q=80&w=600",
      tags: ["Earthly", "Energy"]
    },
    {
      id: 23,
      name: "Tamarind Tease",
      brand: "Coastal",
      category: "Natural Juice",
      description: "Tangy tamarind pods slow-boiled with spices.",
      fullDescription: "A classic coastal cooler. Tangy tamarind infused with a hint of roasted cumin and honey for a truly unique refreshment.",
      price: 250,
      image: "https://images.unsplash.com/photo-1588107908922-8179269e8841?q=80&w=600",
      tags: ["Tangy", "Unique"]
    },
    {
      id: 24,
      name: "Guava Glow",
      brand: "Freshly",
      category: "Natural Juice",
      description: "Pink guava nectar with a fragrant tropical aroma.",
      fullDescription: "Fragrant and smooth pink guava nectar. Packed with Vitamin C and a flavor that transports you straight to the islands.",
      price: 280,
      image: "https://images.unsplash.com/photo-1596701062351-8c0c1692267b?q=80&w=600",
      tags: ["Aromatic", "Vitamins"]
    }
  ]
};

export const allProducts = Object.values(productData).flat();
