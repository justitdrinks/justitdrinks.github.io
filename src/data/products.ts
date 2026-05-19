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
  isComingSoon?: boolean;
  badge?: string;
  variants?: {
    size: string;
    price: number;
  }[];
}

export const productData: { [key: string]: Product[] } = {
  jaba: [
    {
      id: 8,
      name: "Handas Mixed Flavor Pack",
      brand: "Handas",
      category: "Jaba Collection",
      description: "A refreshing combo experience featuring multiple Handas signature flavors.",
      fullDescription: "Can't decide? The mixed pack is your ultimate gateway to the Handas universe. Featuring a curated selection of our best-selling botanical blends, variety is the spice of life.",
      price: 4500,
      image: "/images/product/jaba/mixed-pack.png",
      tags: ["Variety", "Combo", "Sharing"],
      badge: "Combo Pack"
    },
    {
      id: 1,
      name: "Strong Passion Tamarind",
      brand: "Handas",
      category: "Jaba Collection",
      description: "Bold tropical refreshment with a tangy tamarind twist and smooth passion flavor.",
      fullDescription: "Experience the ultimate African fusion. Strong Passion Tamarind combines the sharp, earthy notes of traditional tamarind with the vibrant sweetness of Kenyan passion fruit. A bold, functional refreshment built for the social and the sharp.",
      price: 1000,
      image: "/images/product/jaba/strong-passion-tamarind.png",
      tags: ["Bold", "Tropical", "Tangy"],
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Sparkling Gingerale",
      brand: "Handas",
      category: "Jaba Collection",
      description: "Crisp sparkling ginger flavor crafted for smooth refreshing energy.",
      fullDescription: "A modern take on a classic sharp bite. Our Sparkling Gingerale is double-infused with fresh ginger root and premium botanicals, giving you a clean, bubbly lift without the sugar crash of synthetic energy drinks.",
      price: 1000,
      image: "/images/product/jaba/sparkling-gingerale.png",
      tags: ["Crisp", "Energizing", "Spicy"]
    },
    {
      id: 3,
      name: "Sparkling Sex on the Beach",
      brand: "Handas",
      category: "Jaba Collection",
      description: "Fruity sparkling tropical blend inspired by vibrant beach vibes.",
      fullDescription: "Sunset in a bottle. This non-alcoholic sparkling blend captures the essence of coastal vibes with layers of peach, cranberry, and orange, all powered by our signature natural stimulants.",
      price: 1000,
      image: "/images/product/jaba/sparkling-sob.png",
      tags: ["Fruity", "Vibrant", "Coastal"],
      badge: "Popular"
    },
    {
      id: 4,
      name: "Handas Extra Strong",
      brand: "Handas",
      category: "Jaba Collection",
      description: "A powerful bold refreshment experience for strong flavor lovers.",
      fullDescription: "Our flagship concentrate. Handas Extra Strong is for the dedicated, the creators, and the night-shifters. It delivers a deep, uncompromised botanical experience that keeps your focus sharp and your mood elevated.",
      price: 1000,
      image: "/images/product/jaba/extra-strong.png",
      tags: ["Powerful", "Bold", "Focus"],
      variants: [
        { size: "1litre", price: 1200 },
        { size: "500ml", price: 600 },
        { size: "250ml", price: 300 }
      ]
    },
    {
      id: 5,
      name: "Handas Distilled Strawberry",
      brand: "Handas",
      category: "Jaba Collection",
      description: "Smooth strawberry refreshment with naturally vibrant fruity sweetness.",
      fullDescription: "Pure fruity indulgence. We've distilled the essence of sun-ripened strawberries into a smooth, refreshing base. Perfectly balanced for a sweet, energetic pick-me-up any time of day.",
      price: 1000,
      image: "/images/product/jaba/distilled-strawberry.png",
      tags: ["Smooth", "Sweet", "Fruity"],
      variants: [
        { size: "1 litre", price: 1200 },
        { size: "500ml", price: 600 },
        { size: "250ml", price: 300 }
      ]
    },
    {
      id: 6,
      name: "Handas Distilled Pineapple",
      brand: "Handas",
      category: "Jaba Collection",
      description: "Bright tropical pineapple flavor bursting with island-inspired freshness.",
      fullDescription: "Tropical sunshine, distilled. A bright, golden refreshment that brings the island fresh feel to the city streets. Crisp, sweet, and incredibly refreshing.",
      price: 1000,
      image: "/images/product/jaba/distilled-pineapple.png",
      tags: ["Bright", "Tropical", "Fresh"],
      variants: [
        { size: "1 litre", price: 1200 },
        { size: "500ml", price: 600 },
        { size: "250ml", price: 300 }
      ]
    },
    {
      id: 7,
      name: "Handas Distilled Apple",
      brand: "Handas",
      category: "Jaba Collection",
      description: "Crisp apple-inspired refreshment with a clean smooth finish.",
      fullDescription: "Simplicity refined. Our distilled apple juice provides a clean, familiar, and crisp refreshment that serves as the perfect daily companion for natural focus.",
      price: 1000,
      image: "/images/product/jaba/distilled-apple.png",
      tags: ["Crisp", "Clean", "Classic"],
      variants: [
        { size: "1 litre", price: 1200 },
        { size: "500ml", price: 600 },
        { size: "250ml", price: 300 }
      ]
    },
    {
      id: 25,
      name: "Mini Bottle",
      brand: "Handas",
      category: "Jaba Collection",
      description: "Compact refreshment for the go.",
      fullDescription: "The perfect shot of energy. Compact, powerful, and ready for any challenge the day throws at you.",
      price: 300,
      image: "/images/product/jaba/mini-bottle.png",
      tags: ["Compact", "Travel", "Natural"],
      badge: "Quick Shot"
    },
    {
      id: 26,
      name: "Handas Premium",
      brand: "Handas",
      category: "Jaba Collection",
      description: "The ultimate elevated jaba experience.",
      fullDescription: "Refined, distilled, and perfected. Handas Premium is our top-tier botanical blend, offering a smooth finish and a long-lasting, clean lift for those who demand the best.",
      price: 1000,
      image: "/images/product/jaba/premium.png",
      tags: ["Premium", "Refined", "Smooth"],
      badge: "Top Tier"
    },
    {
      id: 27,
      name: "Doormans Original",
      brand: "The Doormans",
      category: "Jaba Collection",
      description: "A solid traditional foundation with a modern lift.",
      fullDescription: "The Doormans Original is built on reliability. A consistent, high-quality botanical refreshment designed for daily focus and energy.",
      price: 500,
      image: "/images/product/jaba/doormans-original.png",
      tags: ["Reliable", "Classic", "Strong"]
    },
    {
      id: 28,
      name: "Doormans Night Shift",
      brand: "The Doormans",
      category: "Jaba Collection",
      description: "Engineered for maximum endurance and focus.",
      fullDescription: "When the sun goes down, Doormans Night Shift keeps you going. Extra concentrated botanicals for those who work while the world sleeps.",
      price: 750,
      image: "/images/product/jaba/doormans-night-shift.png",
      tags: ["Endurance", "Focus", "Intense"],
      badge: "Extra Strength"
    }
  ],
  moratina: [
    {
      id: 9,
      name: "Classic Moratina",
      brand: "Just It",
      category: "Moratina Collection",
      description: "Refined non-alcoholic version of the tradition.",
      fullDescription: "Heritage in every sip. Our Classic Moratina captures the deep, woody notes of the sausage tree fruit, balanced with roasted honey. A sophisticated serve for moments of reflection.",
      price: 600,
      image: "/images/product/moratina/classic.jpg",
      tags: ["Heritage", "Sophisticated"],
      isComingSoon: true
    },
    {
      id: 10,
      name: "Honey Gold Moratina",
      brand: "Just It",
      category: "Moratina Collection",
      description: "Liquid gold sweetness with a heritage base.",
      fullDescription: "A smoother, sweeter take on the classic. Infused with premium multi-floral honey, this blend is warm, welcoming, and deeply satisfying.",
      price: 650,
      image: "/images/product/moratina/honey-gold.jpg",
      tags: ["Sweet", "Premium"],
      isComingSoon: true
    },
    {
      id: 11,
      name: "Amber Reserve Moratina",
      brand: "Just It",
      category: "Moratina Collection",
      description: "Small-batch reserve for the ultimate connoisseur.",
      fullDescription: "The peak of our craftsmanship. Double-steeped and carefully filtered, the Amber Reserve offers the most complex flavor profile in our Moratina line.",
      price: 850,
      image: "/images/product/moratina/amber-reserve.jpg",
      tags: ["Complex", "Reserve"],
      isComingSoon: true
    },
    {
      id: 12,
      name: "Vanilla Oak Moratina",
      brand: "Just It",
      category: "Moratina Collection",
      description: "Subtle vanilla notes aged with natural oak extracts.",
      fullDescription: "A modern fusion. Traditional Moratina meets the creamy, comforting notes of natural Madagascan vanilla. Unexpectedly smooth and elegant.",
      price: 700,
      image: "/images/product/moratina/vanilla-oak.jpg",
      tags: ["Creamy", "Modern"],
      isComingSoon: true
    },
    {
      id: 13,
      name: "Cinnamon Spice Moratina",
      brand: "Just It",
      category: "Moratina Collection",
      description: "Warm cinnamon spice blended perfectly with tradition.",
      fullDescription: "Infused with Ceylon cinnamon, this blend offers a warm, spicy finish that perfectly complements the earthy notes of the traditional Moratina.",
      price: 680,
      image: "/images/product/moratina/cinnamon-spice.jpg",
      tags: ["Warm", "Spicy"],
      isComingSoon: true
    },
    {
      id: 14,
      name: "Spiced Heritage Blend",
      brand: "Just It",
      category: "Moratina Collection",
      description: "A secret blend of traditional spices and botanical extracts.",
      fullDescription: "Our family recipe. A closely guarded blend of seven traditional spices that brings a unique, grounded energy to your gathering.",
      price: 720,
      image: "/images/product/moratina/spiced-heritage.jpg",
      tags: ["Traditional", "Grounded"],
      isComingSoon: true
    },
    {
      id: 15,
      name: "Midnight Reserve",
      brand: "Just It",
      category: "Moratina Collection",
      description: "Deepest roast, boldest flavor for a regal experience.",
      fullDescription: "Extra long-steeped ingredients for an intense, unforgettable profile. For those who enjoy the deepest, most cultural notes of African tradition.",
      price: 900,
      image: "/images/product/moratina/midnight-reserve.jpg",
      tags: ["Intense", "Regal"],
      isComingSoon: true
    },
    {
      id: 16,
      name: "Moratina Signature Pack",
      brand: "Just It",
      category: "Moratina Collection",
      description: "The complete heritage experience across all flavors.",
      fullDescription: "The ultimate cultural gift. This signature collection features four of our most popular Moratina blends in a premium presentation pack.",
      price: 2500,
      image: "/images/product/moratina/signature-pack.jpg",
      tags: ["Gift", "Collection"],
      isComingSoon: true
    }
  ],
  natural: [
    {
      id: 17,
      name: "Hibiscus High",
      brand: "Freshly",
      category: "Natural Juice",
      description: "Cold-brewed hibiscus with a hint of lime and mint.",
      fullDescription: "Packed with antioxidants and naturally refreshing. Our Hibiscus High is cold-pressed to preserve the floral richness and vibrant color of Kenyan hibiscus flowers.",
      price: 200,
      image: "/images/product/natural/hibiscus-high.jpg",
      tags: ["Healthy", "Clean", "Fresh"],
      badge: "Natural",
      isComingSoon: true
    },
    {
      id: 18,
      name: "Baobab Bliss",
      brand: "Wild",
      category: "Natural Juice",
      description: "Superfood in a bottle. Tangy baobab and honey.",
      fullDescription: "Ancient wisdom in a modern bottle. The baobab fruit is a nutritional powerhouse, blended here with wild honey for a creamy, tangy delight.",
      price: 250,
      image: "/images/product/natural/baobab-bliss.jpg",
      tags: ["Superfood", "Energy", "Clean"],
      isComingSoon: true
    },
    {
      id: 19,
      name: "Passion Punch",
      brand: "Coastal",
      category: "Natural Juice",
      description: "Intense passion fruit with a tropical twist.",
      fullDescription: "Coastal intensity. We source the most aromatic passion fruits from the Kenyan coast to deliver a sharp, sweet peak of tropical energy.",
      price: 180,
      image: "/images/product/natural/passion-punch.jpg",
      tags: ["Vibrant", "Tropical", "Fresh"],
      isComingSoon: true
    },
    {
      id: 20,
      name: "Mango Moon",
      brand: "Coastal",
      category: "Natural Juice",
      description: "Rich coastal mango nectar, smooth and velvety.",
      fullDescription: "Pure nectar from sun-drenched Ngowe mangos. Thick, velvety, and naturally sweet without a single gram of added sugar.",
      price: 220,
      image: "/images/product/natural/mango-moon.jpg",
      tags: ["Velvety", "Clean", "Healthy"],
      isComingSoon: true
    },
    {
      id: 21,
      name: "Green Goddess",
      brand: "Garden",
      category: "Natural Juice",
      description: "Detox blend of kale, apple, and cucumber.",
      fullDescription: "Your daily reboot. Cold-pressed kale, Granny Smith apples, and cucumber with a dash of lemon. Bright, bright energy for a clean start.",
      price: 300,
      image: "/images/product/natural/green-goddess.jpg",
      tags: ["Detox", "Clean", "Natural"],
      isComingSoon: true
    },
    {
      id: 22,
      name: "Citrus Glow",
      brand: "Garden",
      category: "Natural Juice",
      description: "Bright citrus notes bring a sunny glow to tradition.",
      fullDescription: "A Vitamin-C explosion. Orange, tangerine, and a hint of grapefruit zest for a morning boost that radiates from the inside out.",
      price: 240,
      image: "/images/product/natural/citrus-glow.jpg",
      tags: ["Glowing", "Bright", "Healthy"],
      isComingSoon: true
    },
    {
      id: 23,
      name: "Tropical Sunrise",
      brand: "Coastal",
      category: "Natural Juice",
      description: "A vibrant blend of pineapple, passion, and orange.",
      fullDescription: "Every morning should feel this good. Tropical Sunrise is a balanced three-fruit blend that brings the warmth of the Kenyan coast to your table.",
      price: 260,
      image: "/images/product/natural/tropical-sunrise.jpg",
      tags: ["Vibrant", "Balanced", "Fresh"],
      isComingSoon: true
    },
    {
      id: 24,
      name: "Berry Bloom",
      brand: "Garden",
      category: "Natural Juice",
      description: "Fruity blend of mixed forest berries with natural energy.",
      fullDescription: "A wild harvest. We've combined strawberries, raspberries, and local wild berries into a clean, energetic juice that's as beautiful as it is delicious.",
      price: 280,
      image: "/images/product/natural/berry-bloom.jpg",
      tags: ["Antioxidant", "Natural", "Sweet"],
      isComingSoon: true
    }
  ]
};


export const allProducts = Object.values(productData).flat();
