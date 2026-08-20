/* ToyVerse - Main Application JavaScript */
var IMG = 'https://images.unsplash.com/photo-';

var PRODUCTS = [
  {
    id: 1,
    name: "Lala Doll - Traditional Pakistani Doll",
    image: IMG + "1558060370-d644479cb6f7?w=400&h=400&fit=crop",
    category: "girls",
    subcategory: "dolls",
    price: 1499,
    oldPrice: 1899,
    rating: 4.5,
    reviewCount: 42,
    bestseller: true,
    isNew: false,
    onSale: true,
    inStock: true,
    quality: "Standard",
    age: "3+",
    material: "Cotton & Polyester",
    brand: "ToyVerse Original",
    country: "Pakistan",
    description: "Adorable Lala doll dressed in vibrant traditional Pakistani attire. Hand-stitched dress with beautiful embroidery details that celebrate local culture.",
    features: [
      "Hand-stitched traditional dress",
      "Soft cuddly body",
      "Embroidered details",
      "Detachable dupatta",
      "Safe for ages 3+"
    ],
    safetyInfo: "Meets CPSIA safety standards. No small parts. Non-toxic materials.",
    reviews: [
      { name: "Ayesha Khan", avatar: "A", date: "2025-11-15", stars: 5, text: "My daughter absolutely loves this doll! The dress quality is amazing and so culturally beautiful." },
      { name: "Fatima R.", avatar: "F", date: "2025-12-03", stars: 4, text: "Great gift for my niece. The embroidery is lovely but I wish the hair was a bit more durable." }
    ]
  },
  {
    id: 2,
    name: "Princess Jasmine Fashion Doll",
    image: IMG + "1559715541-d5bdb2cff4be?w=400&h=400&fit=crop",
    category: "girls",
    subcategory: "dolls",
    price: 1999,
    oldPrice: 2499,
    rating: 4.7,
    reviewCount: 67,
    bestseller: true,
    isNew: false,
    onSale: true,
    inStock: true,
    quality: "Premium",
    age: "4+",
    material: "Premium Vinyl & Fabric",
    brand: "Royal Toys",
    country: "Pakistan",
    description: "Elegant princess doll with flowing hair and shimmering gown. Comes with a brush and tiara for hours of styling fun.",
    features: [
      "30cm articulated doll",
      "Removable shimmering gown",
      "Includes brush and tiara",
      "Premium vinyl face",
      "Joints at knees and elbows"
    ],
    safetyInfo: "CPSIA compliant. Lead-free paint. BPA-free materials.",
    reviews: [
      { name: "Sana Malik", avatar: "S", date: "2025-10-22", stars: 5, text: "Beautiful doll! My daughter plays with it every single day. Worth every rupee." },
      { name: "Hira Ahmed", avatar: "H", date: "2025-11-18", stars: 5, text: "The quality is premium indeed. Hair is silky and doesn't tangle easily." }
    ]
  },
  {
    id: 3,
    name: "Baby Dolly with Feeding Set",
    image: IMG + "1587654780291-39c9404d7dd0?w=400&h=400&fit=crop",
    category: "girls",
    subcategory: "dolls",
    price: 2499,
    oldPrice: 2999,
    rating: 4.3,
    reviewCount: 35,
    bestseller: false,
    isNew: true,
    onSale: true,
    inStock: true,
    quality: "Standard",
    age: "2+",
    material: "Soft Vinyl",
    brand: "Little Mamas",
    country: "China",
    description: "Cute baby doll that drinks water and wets her diaper. Comes with a complete feeding set including bottle, bib, and extra diaper.",
    features: [
      "Drinks and wets diaper",
      "25cm baby doll",
      "Feeding bottle included",
      "Bib and extra diaper",
      "Makes soft crying sounds"
    ],
    safetyInfo: "CE certified. Battery-free. Safe for toddlers.",
    reviews: [
      { name: "Maria Bibi", avatar: "M", date: "2026-01-05", stars: 4, text: "My 3-year-old is obsessed! She loves feeding the baby. A bit messy with the water but fun." },
      { name: "Nadia Qureshi", avatar: "N", date: "2026-01-20", stars: 5, text: "Perfect first doll for my little one. The accessories are well made." }
    ]
  },
  {
    id: 4,
    name: "Ballerina Dance Doll",
    image: IMG + "1558618666-fcd25c85f82e?w=400&h=400&fit=crop",
    category: "girls",
    subcategory: "dolls",
    price: 1799,
    oldPrice: 1799,
    rating: 4.6,
    reviewCount: 28,
    bestseller: false,
    isNew: true,
    onSale: false,
    inStock: true,
    quality: "Premium",
    age: "4+",
    material: "ABS Plastic & Fabric",
    brand: "DanceStars",
    country: "Pakistan",
    description: "Graceful ballerina doll with jointed limbs for realistic ballet poses. Includes a music box stand that plays a beautiful melody.",
    features: [
      "12-point articulation",
      "Tutu and ballet slippers",
      "Music box stand included",
      "Brushable hair",
      "Posable limbs"
    ],
    safetyInfo: "ASTM F963 certified. No sharp edges. Smooth finish.",
    reviews: [
      { name: "Zainab Hussain", avatar: "Z", date: "2026-02-01", stars: 5, text: "The music box stand is a wonderful touch! My daughter wants to learn ballet now." },
      { name: "Rabia S.", avatar: "R", date: "2026-02-10", stars: 4, text: "Very well made doll. Only wish it came with more outfits." }
    ]
  },
  {
    id: 5,
    name: "Princess Castle Doll Playset",
    image: IMG + "1609198092454-16774c621e85?w=400&h=400&fit=crop",
    category: "girls",
    subcategory: "dolls",
    price: 3499,
    oldPrice: 4199,
    rating: 4.8,
    reviewCount: 89,
    bestseller: true,
    isNew: false,
    onSale: true,
    inStock: true,
    quality: "Premium",
    age: "5+",
    material: "ABS Plastic",
    brand: "FairyTale Toys",
    country: "Pakistan",
    description: "Magnificent three-story dollhouse playset with two princess dolls, furniture, and LED lights. A complete magical kingdom for imaginative play.",
    features: [
      "Three-story castle design",
      "LED fairy lights",
      "Two princess dolls included",
      "15 pieces of furniture",
      "Working elevator"
    ],
    safetyInfo: "CPSIA certified. LED lights are low-heat. Batteries included.",
    reviews: [
      { name: "Samira Patel", avatar: "S", date: "2025-09-18", stars: 5, text: "Absolutely stunning playset! The LED lights make it magical at night. Best purchase ever." },
      { name: "Amber Javed", avatar: "A", date: "2025-10-05", stars: 5, text: "My daughter and her friends fight over who gets to play with this. Excellent quality." }
    ]
  },
  {
    id: 6,
    name: "Modern Dream Dollhouse",
    image: IMG + "1566576912321-d58ddd7a6088?w=400&h=400&fit=crop",
    category: "girls",
    subcategory: "dollhouses",
    price: 4999,
    oldPrice: 5999,
    rating: 4.7,
    reviewCount: 53,
    bestseller: true,
    isNew: false,
    onSale: true,
    inStock: true,
    quality: "Premium",
    age: "5+",
    material: "MDF Wood & Fabric",
    brand: "Little Homes",
    country: "Pakistan",
    description: "Beautifully crafted wooden dollhouse with four rooms, real fabric curtains, and handmade furniture. A miniature home your child will treasure.",
    features: [
      "Four fully furnished rooms",
      "Real fabric curtains",
      "Handmade wooden furniture",
      "Opening front panels",
      "Realistic wallpaper"
    ],
    safetyInfo: "Water-based non-toxic paint. Rounded edges. EN71 compliant.",
    reviews: [
      { name: "Neha Shah", avatar: "N", date: "2025-11-02", stars: 5, text: "The craftsmanship is incredible for the price. Feels like a real miniature home!" },
      { name: "Bushra Khan", avatar: "B", date: "2025-12-12", stars: 4, text: "Beautiful dollhouse. Assembly was a bit tricky but the result is gorgeous." }
    ]
  },
  {
    id: 7,
    name: "Modular Mansion Playset",
    image: IMG + "1594787318286-3d835c1d207f?w=400&h=400&fit=crop",
    category: "girls",
    subcategory: "dollhouses",
    price: 6999,
    oldPrice: 7999,
    rating: 4.9,
    reviewCount: 31,
    bestseller: false,
    isNew: true,
    onSale: true,
    inStock: true,
    quality: "Premium",
    age: "6+",
    material: "BPA-Free Plastic",
    brand: "GrandPlay",
    country: "China",
    description: "Expandable modular mansion that kids can configure in different layouts. Includes pool area, garden, and rooftop terrace with 20+ furniture pieces.",
    features: [
      "Modular design - rearrange rooms",
      "Swimming pool area",
      "Rooftop terrace garden",
      "20+ furniture pieces",
      "Battery-operated lights"
    ],
    safetyInfo: "CPSIA and EN71 certified. No small parts under 3+. Non-toxic.",
    reviews: [
      { name: "Asma Rehman", avatar: "A", date: "2026-01-14", stars: 5, text: "The modular design is genius! My kids spend hours reconfiguring the rooms." },
      { name: "Tania F.", avatar: "T", date: "2026-02-03", stars: 5, text: "Premium quality through and through. The pool area is my daughter's favorite part." }
    ]
  },
  {
    id: 8,
    name: "Princess Royal Palace Dollhouse",
    image: IMG + "1513364776144-60967b0f800f?w=400&h=400&fit=crop",
    category: "girls",
    subcategory: "dollhouses",
    price: 8999,
    oldPrice: 9999,
    rating: 4.8,
    reviewCount: 22,
    bestseller: false,
    isNew: true,
    onSale: true,
    inStock: true,
    quality: "Premium",
    age: "5+",
    material: "Solid Wood & MDF",
    brand: "Royal Estates",
    country: "Pakistan",
    description: "Grand five-story palace dollhouse with ornate detailing, a working lift, ballroom, and throne room. The ultimate luxury dollhouse for young royalty.",
    features: [
      "Five-story grand palace",
      "Working elevator lift",
      "Ballroom with chandelier",
      "Throne room",
      "Ornate hand-painted details"
    ],
    safetyInfo: "Premium safety certified. Lead-free paint. Solid construction.",
    reviews: [
      { name: "Sabrina Patel", avatar: "S", date: "2026-02-15", stars: 5, text: "This is truly a masterpiece. My daughter's eyes lit up when she saw the chandelier!" },
      { name: "Kinza Malik", avatar: "K", date: "2026-03-01", stars: 5, text: "Worth every penny. The hand-painted details are exquisite. An heirloom piece." }
    ]
  },
  {
    id: 9,
    name: "Doctor Play Set with Lab Coat",
    image: IMG + "1532094349884-543bc11b234d?w=400&h=400&fit=crop",
    category: "girls",
    subcategory: "roleplay",
    price: 1299,
    oldPrice: 1699,
    rating: 4.4,
    reviewCount: 58,
    bestseller: true,
    isNew: false,
    onSale: true,
    inStock: true,
    quality: "Standard",
    age: "3+",
    material: "Polyester & ABS Plastic",
    brand: "Little Professions",
    country: "Pakistan",
    description: "Complete doctor play kit with lab coat, stethoscope, syringe, thermometer, and medical bag. Inspire the next generation of healthcare heroes.",
    features: [
      "Lab coat with name tag",
      "Stethoscope with real sounds",
      "Toy syringe and thermometer",
      "Medical bag",
      "X-ray cards"
    ],
    safetyInfo: "No sharp edges. Child-safe materials. Lab coat machine washable.",
    reviews: [
      { name: "Farah Noor", avatar: "F", date: "2025-10-28", stars: 5, text: "My daughter wants to be a doctor and this set made her so happy! Great quality." },
      { name: "Uzma Bibi", avatar: "U", date: "2025-11-15", stars: 4, text: "Good value for money. The lab coat fits well and the accessories are fun." }
    ]
  },
  {
    id: 10,
    name: "Kitchen Chef Roleplay Costume",
    image: IMG + "1555041469-a586c61ea9bc?w=400&h=400&fit=crop",
    category: "girls",
    subcategory: "roleplay",
    price: 1799,
    oldPrice: 1999,
    rating: 4.6,
    reviewCount: 44,
    bestseller: false,
    isNew: false,
    onSale: true,
    inStock: true,
    quality: "Premium",
    age: "4+",
    material: "Cotton & Stainless Steel (toy)",
    brand: "Junior Chefs PK",
    country: "Pakistan",
    description: "Professional-looking chef costume with apron, hat, and toy utensils. Made from breathable cotton fabric perfect for Pakistani summers.",
    features: [
      "Cotton chef coat and apron",
      "Chef hat included",
      "5 toy stainless steel utensils",
      "Recipe card set",
      "Breathable fabric"
    ],
    safetyInfo: "Flame-retardant fabric. No small parts. BPA-free utensils.",
    reviews: [
      { name: "Hina Shahid", avatar: "H", date: "2025-12-08", stars: 5, text: "My little chef is in heaven! The cotton quality is perfect for our weather." },
      { name: "Rida Ahmed", avatar: "R", date: "2026-01-02", stars: 4, text: "Great costume set. The utensils are well made. Wish it came in smaller sizes too." }
    ]
  },
  {
    id: 11,
    name: "Jumbo Teddy Bear - Brown",
    image: IMG + "1569242840510-9fe8f0acb672?w=400&h=400&fit=crop",
    category: "girls",
    subcategory: "soft",
    price: 2499,
    oldPrice: 2999,
    rating: 4.8,
    reviewCount: 112,
    bestseller: true,
    isNew: false,
    onSale: true,
    inStock: true,
    quality: "Standard",
    age: "0+",
    material: "Plush Polyester Fill",
    brand: "CuddleBears",
    country: "China",
    description: "Super soft 60cm jumbo teddy bear with a gentle smile and huggable body. The perfect cuddle companion for kids of all ages.",
    features: [
      "60cm tall",
      "Ultra-soft plush fur",
      "Machine washable",
      "Hypoallergenic fill",
      "Safety eyes"
    ],
    safetyInfo: "EN71 certified. Suitable from birth. Double-stitched seams.",
    reviews: [
      { name: "Amina Malik", avatar: "A", date: "2025-09-20", stars: 5, text: "So soft and huggable! Even my 8-year-old refuses to sleep without it now." },
      { name: "Zara Khan", avatar: "Z", date: "2025-10-14", stars: 5, text: "The best teddy bear we've ever bought. Survived multiple washes perfectly." }
    ]
  },
  {
    id: 12,
    name: "Unicorn Dream Plush Toy",
    image: IMG + "1547447134-cd3f5c716030?w=400&h=400&fit=crop",
    category: "girls",
    subcategory: "soft",
    price: 1299,
    oldPrice: 1599,
    rating: 4.5,
    reviewCount: 76,
    bestseller: true,
    isNew: false,
    onSale: true,
    inStock: true,
    quality: "Standard",
    age: "2+",
    material: "Minky Fabric & PP Cotton",
    brand: "Dream Creatures",
    country: "Pakistan",
    description: "Magical unicorn plush with rainbow mane, sparkle horn, and soft wings. A dreamy companion that sparks imagination and endless adventures.",
    features: [
      "35cm tall unicorn",
      "Rainbow mane with tassels",
      "Glitter horn (non-toxic)",
      "Soft fabric wings",
      "Super squishy body"
    ],
    safetyInfo: "Non-toxic glitter. Embroidered features. Suitable for ages 2+.",
    reviews: [
      { name: "Mehwish Ali", avatar: "M", date: "2025-11-30", stars: 5, text: "The rainbow mane is absolutely gorgeous! My daughter named it Sparkle and takes it everywhere." },
      { name: "Sobia R.", avatar: "S", date: "2025-12-20", stars: 4, text: "Beautiful plush toy. The wings are a nice touch. Good quality for the price." }
    ]
  },
  {
    id: 13,
    name: "Dinosaur Plush Collection Set",
    image: IMG + "1503454537195-1dcabb73ffb9?w=400&h=400&fit=crop",
    category: "girls",
    subcategory: "soft",
    price: 3499,
    oldPrice: 3999,
    rating: 4.7,
    reviewCount: 48,
    bestseller: false,
    isNew: true,
    onSale: true,
    inStock: true,
    quality: "Premium",
    age: "3+",
    material: "Velvet & PP Cotton",
    brand: "Prehistoric Pals",
    country: "Pakistan",
    description: "Set of 5 adorable mini dinosaur plushies in pastel colors. Each dinosaur has its own name tag and personality. Perfect for collecting!",
    features: [
      "5 piece dinosaur set",
      "Pastel color palette",
      "Individual name tags",
      "Collectible design",
      "Carry pouch included"
    ],
    safetyInfo: "All pieces pass small parts test. Non-toxic dyes. Double-stitched.",
    reviews: [
      { name: "Nida Parveen", avatar: "N", date: "2026-01-25", stars: 5, text: "My daughter loves collecting these! The pastel colors are so unique and adorable." },
      { name: "Gulnaz B.", avatar: "G", date: "2026-02-08", stars: 5, text: "Great value for a set of 5. Each dinosaur is well-made with cute expressions." }
    ]
  },
  {
    id: 14,
    name: "Deluxe Art & Craft Kit",
    image: IMG + "1611371805429-8b8c6d397585?w=400&h=400&fit=crop",
    category: "girls",
    subcategory: "arts",
    price: 1999,
    oldPrice: 2499,
    rating: 4.6,
    reviewCount: 63,
    bestseller: true,
    isNew: false,
    onSale: true,
    inStock: true,
    quality: "Standard",
    age: "5+",
    material: "Non-toxic Paints & Paper",
    brand: "Creative Kids PK",
    country: "Pakistan",
    description: "Complete 50-piece art kit with watercolors, oil pastels, glitter glue, stickers, paper, and brushes. Everything a young artist needs to create masterpieces.",
    features: [
      "50+ art supplies",
      "Non-toxic watercolors",
      "Oil pastels set",
      "Glitter glue tubes",
      "Sticker sheets included"
    ],
    safetyInfo: "All materials non-toxic and washable. ASTM D-4236 certified.",
    reviews: [
      { name: "Leena Tariq", avatar: "L", date: "2025-10-05", stars: 5, text: "This kit has everything! My daughter hasn't stopped creating art since we got it." },
      { name: "Sumaira K.", avatar: "S", date: "2025-11-22", stars: 4, text: "Great variety of supplies. The washable paints are a lifesaver for parents!" }
    ]
  },
  {
    id: 15,
    name: "Slime Making Studio",
    image: IMG + "1535572290543-960a8046f5af?w=400&h=400&fit=crop",
    category: "girls",
    subcategory: "arts",
    price: 1499,
    oldPrice: 1499,
    rating: 4.3,
    reviewCount: 87,
    bestseller: false,
    isNew: true,
    onSale: false,
    inStock: true,
    quality: "Standard",
    age: "6+",
    material: "Non-toxic Polymer",
    brand: "SlimeWorld",
    country: "China",
    description: "Create your own colorful slimes with this complete studio kit. Includes glue, activator, colorants, glitter, and scent oils for endless mixing fun.",
    features: [
      "Makes 10+ slimes",
      "6 colorants",
      "Glitter and beads",
      "Scent oils included",
      "Storage containers"
    ],
    safetyInfo: "Non-toxic ingredients. Adult supervision recommended. Ages 6+.",
    reviews: [
      { name: "Maira S.", avatar: "M", date: "2026-01-10", stars: 4, text: "My kids love making different slimes! A bit messy but tons of fun." },
      { name: "Palwasha N.", avatar: "P", date: "2026-01-28", stars: 5, text: "Best craft kit we've bought. The scent oils make the slimes smell amazing!" }
    ]
  },
  {
    id: 16,
    name: "Professional Sketching & Drawing Set",
    image: IMG + "1596461404969-9ae70f2830c1?w=400&h=400&fit=crop",
    category: "girls",
    subcategory: "arts",
    price: 2499,
    oldPrice: 2999,
    rating: 4.7,
    reviewCount: 34,
    bestseller: false,
    isNew: true,
    onSale: true,
    inStock: true,
    quality: "Premium",
    age: "7+",
    material: "Graphite, Charcoal & Wood",
    brand: "ArtScope",
    country: "Pakistan",
    description: "Professional-grade sketching set with graphite pencils, charcoal sticks, blending tools, erasers, and a hardcover sketchbook. For serious young artists.",
    features: [
      "12 graphite pencils (2H-8B)",
      "Charcoal sticks set",
      "Blending stumps",
      "Hardcover sketchbook",
      "Zippered carry case"
    ],
    safetyInfo: "Non-toxic graphite. CE certified. Professional quality materials.",
    reviews: [
      { name: "Dania Sheikh", avatar: "D", date: "2026-02-05", stars: 5, text: "My daughter is a talented artist and this set elevated her work! Professional quality." },
      { name: "Raheel M.", avatar: "R", date: "2026-02-20", stars: 5, text: "Excellent set for the price. The variety of pencil grades is impressive." }
    ]
  },
  {
    id: 17,
    name: "Wooden Kitchen Playset",
    image: IMG + "1602631985686-1bb0e6a8696e?w=400&h=400&fit=crop",
    category: "girls",
    subcategory: "kitchen",
    price: 4999,
    oldPrice: 5999,
    rating: 4.8,
    reviewCount: 41,
    bestseller: true,
    isNew: false,
    onSale: true,
    inStock: true,
    quality: "Premium",
    age: "3+",
    material: "Solid Wood & MDF",
    brand: "Little HomeChef",
    country: "Pakistan",
    description: "Beautiful wooden kitchen set with realistic knobs that turn, oven with door, sink, and 15-piece accessory set. A miniature kitchen that looks like the real thing.",
    features: [
      "Turning knobs with click sound",
      "Opening oven and microwave",
      "Working sink faucet",
      "15 accessory pieces",
      "Sturdy wooden construction"
    ],
    safetyInfo: "Water-based paint. Rounded corners. ASTM F963 certified.",
    reviews: [
      { name: "Najma Bibi", avatar: "N", date: "2025-11-08", stars: 5, text: "The most beautiful toy kitchen I've seen! Solid wood and looks like a real kitchen." },
      { name: "Fariha K.", avatar: "F", date: "2025-12-25", stars: 5, text: "Worth the investment. This kitchen will last through multiple children." }
    ]
  },
  {
    id: 18,
    name: "Mini Baking Set for Kids",
    image: IMG + "1563911892437-1feda0179e1b?w=400&h=400&fit=crop",
    category: "girls",
    subcategory: "kitchen",
    price: 2999,
    oldPrice: 3499,
    rating: 4.5,
    reviewCount: 55,
    bestseller: false,
    isNew: false,
    onSale: true,
    inStock: true,
    quality: "Standard",
    age: "4+",
    material: "Silicone & Stainless Steel",
    brand: "BakeKids",
    country: "China",
    description: "Real baking set designed for little hands with silicone molds, child-safe rolling pin, cookie cutters, and recipe cards. Bake real treats together!",
    features: [
      "6 silicone molds",
      "Child-safe rolling pin",
      "12 cookie cutters",
      "Kid-friendly recipe cards",
      "Non-stick surfaces"
    ],
    safetyInfo: "Food-grade silicone. BPA-free. Dishwasher safe molds.",
    reviews: [
      { name: "Tahira Shah", avatar: "T", date: "2025-12-01", stars: 5, text: "We bake together every weekend now! The recipe cards are perfect for beginners." },
      { name: "Yasmin R.", avatar: "Y", date: "2025-12-18", stars: 4, text: "Great quality baking tools. My daughter made her first cookies with this set!" }
    ]
  },
  {
    id: 19,
    name: "STEM Robot Building Kit",
    image: IMG + "1618923850107-d1a234ef2b1f?w=400&h=400&fit=crop",
    category: "girls",
    subcategory: "educational",
    price: 3499,
    oldPrice: 3999,
    rating: 4.7,
    reviewCount: 29,
    bestseller: false,
    isNew: true,
    onSale: true,
    inStock: true,
    quality: "Premium",
    age: "7+",
    material: "ABS Plastic & Electronics",
    brand: "SmartGirls PK",
    country: "Pakistan",
    description: "Build and code your own robot with this STEM kit. Includes 120+ pieces, a programmable board, and a step-by-step guide. Girls in STEM start here!",
    features: [
      "120+ building pieces",
      "Programmable micro-board",
      "15 project guidebook",
      "USB charging cable",
      "Compatible with Scratch"
    ],
    safetyInfo: "CE certified. Low-voltage electronics. Adult supervision for under 10.",
    reviews: [
      { name: "Dr. Sana Iqbal", avatar: "S", date: "2026-01-18", stars: 5, text: "Bought this for my 8-year-old daughter. She's now interested in coding! Excellent educational toy." },
      { name: "Qudsia B.", avatar: "Q", date: "2026-02-12", stars: 5, text: "Finally a STEM kit designed for girls. The guidebook is easy to follow and fun." }
    ]
  },
  {
    id: 20,
    name: "Science Experiment Lab Kit",
    image: IMG + "1576020799627-aeac74d58064?w=400&h=400&fit=crop",
    category: "girls",
    subcategory: "educational",
    price: 2499,
    oldPrice: 2999,
    rating: 4.5,
    reviewCount: 47,
    bestseller: true,
    isNew: false,
    onSale: true,
    inStock: true,
    quality: "Standard",
    age: "6+",
    material: "Safe Chemicals & Plastic",
    brand: "Junior Scientists PK",
    country: "Pakistan",
    description: "Explore 25 safe science experiments at home! Includes volcano eruption, crystal growing, rainbow milk, and more. Real science made fun and safe.",
    features: [
      "25 safe experiments",
      "Lab coat and goggles",
      "Real lab equipment",
      "Experiment guidebook",
      "All chemicals included"
    ],
    safetyInfo: "All chemicals non-toxic and child-safe. Adult supervision required.",
    reviews: [
      { name: "Sehar Malik", avatar: "S", date: "2025-10-30", stars: 5, text: "My daughter did the volcano experiment 10 times! She wants to be a scientist now." },
      { name: "Wajiha A.", avatar: "W", date: "2025-11-25", stars: 4, text: "Fun and educational. The lab coat makes it feel very professional!" }
    ]
  },
  {
    id: 21,
    name: "Interactive Globe - Learn the World",
    image: IMG + "1589739900243-4b52cd9b104e?w=400&h=400&fit=crop",
    category: "girls",
    subcategory: "educational",
    price: 4499,
    oldPrice: 4999,
    rating: 4.9,
    reviewCount: 38,
    bestseller: false,
    isNew: true,
    onSale: true,
    inStock: true,
    quality: "Premium",
    age: "5+",
    material: "ABS Plastic & LED",
    brand: "WorldExplorers",
    country: "China",
    description: "Touch-sensitive interactive globe with 200+ facts about countries, cultures, animals, and landmarks. Lights up with music and voice narration.",
    features: [
      "Touch-sensitive surface",
      "200+ world facts",
      "LED backlit display",
      "Voice narration in English & Urdu",
      "Built-in speaker"
    ],
    safetyInfo: "CPSIA certified. Volume control. Auto shut-off feature. Batteries included.",
    reviews: [
      { name: "Ambreen Z.", avatar: "A", date: "2026-02-01", stars: 5, text: "The Urdu narration feature is amazing! My daughter learned about 10 countries in a week." },
      { name: "Shazia N.", avatar: "S", date: "2026-02-28", stars: 5, text: "Best educational purchase ever. She touches different countries and learns facts. Brilliant!" }
    ]
  },
  {
    id: 22,
    name: "Remote Control Racing Car",
    image: IMG + "1583511655826-05700442b31b?w=400&h=400&fit=crop",
    category: "boys",
    subcategory: "rc",
    price: 2499,
    oldPrice: 2999,
    rating: 4.5,
    reviewCount: 73,
    bestseller: true,
    isNew: false,
    onSale: true,
    inStock: true,
    quality: "Standard",
    age: "6+",
    material: "ABS Plastic & Rubber",
    brand: "SpeedKings",
    country: "China",
    description: "High-speed RC racing car with 4WD, shock absorbers, and 2.4GHz remote control. Reaches speeds up to 20km/h on smooth surfaces.",
    features: [
      "4-wheel drive system",
      "2.4GHz interference-free remote",
      "Speed up to 20km/h",
      "Shock absorber suspension",
      "Rechargeable battery"
    ],
    safetyInfo: "CE certified. 2.4GHz frequency safe for children. Battery safety tested.",
    reviews: [
      { name: "Usman Ali", avatar: "U", date: "2025-10-12", stars: 5, text: "My son is crazy about this car! The speed is impressive and the battery lasts long." },
      { name: "Imran K.", avatar: "I", date: "2025-11-05", stars: 4, text: "Great RC car for the price. Easy to control and durable build." }
    ]
  },
  {
    id: 23,
    name: "Drone Explorer Mini",
    image: IMG + "1612196808214-b8e1d6145a8c?w=400&h=400&fit=crop",
    category: "boys",
    subcategory: "rc",
    price: 3999,
    oldPrice: 4999,
    rating: 4.4,
    reviewCount: 32,
    bestseller: false,
    isNew: true,
    onSale: true,
    inStock: true,
    quality: "Premium",
    age: "8+",
    material: "Lightweight Plastic & Metal",
    brand: "SkyMasters",
    country: "China",
    description: "Beginner-friendly mini drone with altitude hold, headless mode, and one-key takeoff/landing. Includes HD camera for aerial photos.",
    features: [
      "HD camera (480p)",
      "Altitude hold mode",
      "Headless mode for beginners",
      "One-key takeoff/landing",
      "Foldable design"
    ],
    safetyInfo: "Propeller guards included. Altitude limiter. Low battery auto-landing.",
    reviews: [
      { name: "Bilal Sheikh", avatar: "B", date: "2026-01-08", stars: 4, text: "Fun little drone! The altitude hold makes it easy for beginners. Camera quality is decent." },
      { name: "Danish M.", avatar: "D", date: "2026-01-22", stars: 5, text: "My 10-year-old learned to fly it in minutes. The foldable design is great for travel." }
    ]
  },
  {
    id: 24,
    name: "RC Monster Truck - Mega Crusher",
    image: IMG + "1519019121996-5a48f6d78e8b?w=400&h=400&fit=crop",
    category: "boys",
    subcategory: "rc",
    price: 4999,
    oldPrice: 5999,
    rating: 4.8,
    reviewCount: 56,
    bestseller: true,
    isNew: false,
    onSale: true,
    inStock: true,
    quality: "Premium",
    age: "7+",
    material: "Reinforced ABS & Rubber Tires",
    brand: "MonsterWheels",
    country: "China",
    description: "Powerful RC monster truck with oversized rubber tires, waterproof design, and 30-minute battery life. Conquers any terrain with ease!",
    features: [
      "Waterproof body",
      "Oversized rubber tires",
      "30-minute battery life",
      "30km/h top speed",
      "All-terrain capability"
    ],
    safetyInfo: "IPX4 water resistant. Battery safety chip. CE and FCC certified.",
    reviews: [
      { name: "Hassan Raza", avatar: "H", date: "2025-11-28", stars: 5, text: "This truck is a beast! Drove it through puddles and mud without any issues." },
      { name: "Saad A.", avatar: "S", date: "2025-12-15", stars: 5, text: "Best RC car we've owned. The 30-minute battery life is impressive." }
    ]
  },
  {
    id: 25,
    name: "Nitro RC Drift Car",
    image: IMG + "1595841696677-6489ff3f8cd1?w=400&h=400&fit=crop",
    category: "boys",
    subcategory: "rc",
    price: 3499,
    oldPrice: 3499,
    rating: 4.3,
    reviewCount: 41,
    bestseller: false,
    isNew: true,
    onSale: false,
    inStock: true,
    quality: "Standard",
    age: "8+",
    material: "ABS Plastic & PVC",
    brand: "DriftMasters",
    country: "China",
    description: "Drift car with special drift tires and rear-wheel drive for smooth sliding action. LED underbody lights make it look incredible at night.",
    features: [
      "Rear-wheel drive drift system",
      "LED underbody lights",
      "Special drift tires",
      " proportional steering",
      "USB rechargeable"
    ],
    safetyInfo: "LED lights are cool-touch. Auto power-off after 5 minutes idle.",
    reviews: [
      { name: "Arslan Q.", avatar: "A", date: "2026-02-10", stars: 4, text: "The drift action is so cool! The LED lights are a great bonus. Fun toy." },
      { name: "Kamran B.", avatar: "K", date: "2026-02-25", stars: 5, text: "My son practices drifts on our tile floor for hours. Great quality car." }
    ]
  },
  {
    id: 26,
    name: "Mega Building Blocks Set - 500 pcs",
    image: IMG + "1581952976147-4a07e162a5c7?w=400&h=400&fit=crop",
    category: "boys",
    subcategory: "building",
    price: 2999,
    oldPrice: 3499,
    rating: 4.6,
    reviewCount: 94,
    bestseller: true,
    isNew: false,
    onSale: true,
    inStock: true,
    quality: "Standard",
    age: "4+",
    material: "ABS Plastic",
    brand: "BlockMaster PK",
    country: "Pakistan",
    description: "Massive 500-piece building block set compatible with major brands. Includes wheels, windows, doors, and special pieces for endless construction possibilities.",
    features: [
      "500 building blocks",
      "Wheels and axles included",
      "Windows and doors pieces",
      "Compatible with major brands",
      "Storage tub included"
    ],
    safetyInfo: "Non-toxic ABS. Smooth edges. CPSC and ASTM certified.",
    reviews: [
      { name: "Rashid Mehmood", avatar: "R", date: "2025-09-25", stars: 5, text: "Great value for 500 pieces! My kids build something new every day. Endless fun." },
      { name: "Adnan S.", avatar: "A", date: "2025-10-18", stars: 4, text: "Good quality blocks. The storage tub is a nice bonus for cleanup." }
    ]
  },
  {
    id: 27,
    name: "Space Explorer Construction Set",
    image: IMG + "1615497001839-b0a0eac3274c?w=400&h=400&fit=crop",
    category: "boys",
    subcategory: "building",
    price: 4499,
    oldPrice: 4999,
    rating: 4.8,
    reviewCount: 37,
    bestseller: false,
    isNew: true,
    onSale: true,
    inStock: true,
    quality: "Premium",
    age: "7+",
    material: "ABS Plastic & LED",
    brand: "SpaceBuilders",
    country: "Pakistan",
    description: "Build your own space station, rocket, and rover with 800+ precision pieces. Includes LED lights for the space station and astronaut minifigures.",
    features: [
      "800+ precision pieces",
      "3 buildable models",
      "LED space station lights",
      "4 astronaut minifigures",
      "Detailed instruction booklet"
    ],
    safetyInfo: "Precision-fit pieces. Non-toxic. EN71 and CPSIA certified.",
    reviews: [
      { name: "Asif Naveed", avatar: "A", date: "2026-01-20", stars: 5, text: "My son built the space station in 3 days and hasn't stopped talking about space!" },
      { name: "Javed I.", avatar: "J", date: "2026-02-05", stars: 5, text: "Incredible detail in these pieces. The LED lights make the station look amazing." }
    ]
  },
  {
    id: 28,
    name: "Castle Fortress Building Kit",
    image: IMG + "1624253321171-1be53e12f5f4?w=400&h=400&fit=crop",
    category: "boys",
    subcategory: "building",
    price: 5499,
    oldPrice: 6499,
    rating: 4.7,
    reviewCount: 28,
    bestseller: false,
    isNew: true,
    onSale: true,
    inStock: true,
    quality: "Premium",
    age: "8+",
    material: "ABS Plastic & Fabric",
    brand: "Medieval Kingdom",
    country: "Pakistan",
    description: "Epic medieval castle with working drawbridge, catapult, and 600+ pieces. Includes knight and dragon minifigures for epic battle scenarios.",
    features: [
      "Working drawbridge mechanism",
      "Functional catapult",
      "600+ detailed pieces",
      "Knight and dragon figures",
      "Fabric flags and banners"
    ],
    safetyInfo: "Moving parts tested for safety. Non-toxic materials. Ages 8+.",
    reviews: [
      { name: "Faisal Ahmed", avatar: "F", date: "2026-02-18", stars: 5, text: "The drawbridge actually works! My son spent a whole week building this masterpiece." },
      { name: "Waqas K.", avatar: "W", date: "2026-03-05", stars: 4, text: "Fantastic set with great attention to detail. The catapult is a fun feature." }
    ]
  },
  {
    id: 29,
    name: "Action Hero Figure - Captain Pakistan",
    image: IMG + "1515488042361-ee00e0ddd4e4?w=400&h=400&fit=crop",
    category: "boys",
    subcategory: "action",
    price: 1299,
    oldPrice: 1599,
    rating: 4.4,
    reviewCount: 68,
    bestseller: true,
    isNew: false,
    onSale: true,
    inStock: true,
    quality: "Standard",
    age: "4+",
    material: "ABS Plastic & Fabric",
    brand: "HeroForce PK",
    country: "Pakistan",
    description: "Pakistani superhero action figure with 15 points of articulation, removable cape, andæ‹³å¤´ action feature. A homegrown hero for local kids!",
    features: [
      "15 points of articulation",
      "Removable fabric cape",
      "æ‹³é ­ punching action",
      "8 inches tall",
      "Collectible packaging"
    ],
    safetyInfo: "No small detachable parts. Lead-free paint. CPSIA compliant.",
    reviews: [
      { name: "Zubair Khan", avatar: "Z", date: "2025-10-08", stars: 5, text: "Finally a Pakistani superhero figure! My son is obsessed and it's great to see local characters." },
      { name: "Tariq S.", avatar: "T", date: "2025-11-02", stars: 4, text: "Good quality figure with nice articulation. The cape is well made." }
    ]
  },
  {
    id: 30,
    name: "Ninja Warrior Action Playset",
    image: IMG + "1597633611385-17238892d086?w=400&h=400&fit=crop",
    category: "boys",
    subcategory: "action",
    price: 1999,
    oldPrice: 2199,
    rating: 4.6,
    reviewCount: 52,
    bestseller: false,
    isNew: false,
    onSale: true,
    inStock: true,
    quality: "Standard",
    age: "5+",
    material: "ABS Plastic & Rubber",
    brand: "NinjaStrike",
    country: "China",
    description: "Complete ninja playset with 3 figures, training dojo, throwing stars, and a wall-climbing ninja feature. Epic battles await!",
    features: [
      "3 ninja figures",
      "Training dojo playset",
      "Soft throwing stars",
      "Wall-climbing ninja",
      "Weapon rack"
    ],
    safetyInfo: "Soft-tip throwing stars. Rounded edges. EN71 certified.",
    reviews: [
      { name: "Noman A.", avatar: "N", date: "2025-12-05", stars: 5, text: "The wall-climbing feature is so cool! My kids have ninja battles every evening." },
      { name: "Shahid R.", avatar: "S", date: "2025-12-28", stars: 4, text: "Fun playset with good quality figures. The dojo is a nice addition." }
    ]
  },
  {
    id: 31,
    name: "Super Robot Transformer",
    image: IMG + "1617802690992-15d93263d3a9?w=400&h=400&fit=crop",
    category: "boys",
    subcategory: "action",
    price: 2199,
    oldPrice: 2499,
    rating: 4.5,
    reviewCount: 45,
    bestseller: false,
    isNew: true,
    onSale: true,
    inStock: true,
    quality: "Premium",
    age: "6+",
    material: "Die-cast Metal & Plastic",
    brand: "TransformBot",
    country: "China",
    description: "10-inch transformer that converts from robot to truck in 15 steps. Die-cast metal body with LED eyes and sound effects.",
    features: [
      "15-step transformation",
      "Die-cast metal body",
      "LED glowing eyes",
      "Sound effects button",
      "10 inches in robot mode"
    ],
    safetyInfo: "Pinch-free transformation joints. Low-volume speaker. CE certified.",
    reviews: [
      { name: "Hamza T.", avatar: "H", date: "2026-01-15", stars: 5, text: "The die-cast metal feels premium! The 15-step transformation is satisfying." },
      { name: "Rizwan M.", avatar: "R", date: "2026-02-02", stars: 4, text: "Solid build quality. My son mastered the transformation in a few days." }
    ]
  },
  {
    id: 32,
    name: "Turbo Racing Track Set",
    image: IMG + "1571936474602-3a0dad26a4e3?w=400&h=400&fit=crop",
    category: "boys",
    subcategory: "vehicles",
    price: 1999,
    oldPrice: 2499,
    rating: 4.6,
    reviewCount: 78,
    bestseller: true,
    isNew: false,
    onSale: true,
    inStock: true,
    quality: "Standard",
    age: "5+",
    material: "ABS Plastic",
    brand: "TrackStars PK",
    country: "Pakistan",
    description: "Expandable race track with loop-the-loop, bridge, and launcher. Includes 2 friction-powered cars. Connect to other sets for mega tracks!",
    features: [
      "2.5 meters of track",
      "Loop-the-loop stunt",
      "Car launcher included",
      "2 friction-powered cars",
      "Expandable system"
    ],
    safetyInfo: "Sturdy construction. No batteries needed for cars. CPSIA compliant.",
    reviews: [
      { name: "Bilal Q.", avatar: "B", date: "2025-09-15", stars: 5, text: "My son plays with this track for hours! The loop-the-loop is his favorite part." },
      { name: "Salman K.", avatar: "S", date: "2025-10-10", stars: 4, text: "Great track set. Easy to assemble and the cars are fast. Good value." }
    ]
  },
  {
    id: 33,
    name: "Construction Vehicle Set",
    image: IMG + "1598488035139-bdbb2231ce04?w=400&h=400&fit=crop",
    category: "boys",
    subcategory: "vehicles",
    price: 1499,
    oldPrice: 1799,
    rating: 4.5,
    reviewCount: 63,
    bestseller: true,
    isNew: false,
    onSale: true,
    inStock: true,
    quality: "Standard",
    age: "3+",
    material: "Die-cast Metal & Plastic",
    brand: "HeavyMovers",
    country: "China",
    description: "Set of 4 construction vehicles: excavator, bulldozer, dump truck, and crane. Die-cast metal with moving parts for realistic play.",
    features: [
      "4 construction vehicles",
      "Die-cast metal bodies",
      "Moving parts and arms",
      "Realistic detailing",
      "Age-appropriate sizes"
    ],
    safetyInfo: "No sharp edges. Non-toxic paint. Rounded corners. Ages 3+.",
    reviews: [
      { name: "Kamal H.", avatar: "K", date: "2025-11-10", stars: 5, text: "These vehicles are so detailed! My 4-year-old loves making them work on his construction site." },
      { name: "Yasir P.", avatar: "Y", date: "2025-12-02", stars: 4, text: "Good quality die-cast set. Sturdy enough for rough play." }
    ]
  },
  {
    id: 34,
    name: "Emergency Vehicles Playset",
    image: IMG + "1545558014-8692077e9b5c?w=400&h=400&fit=crop",
    category: "boys",
    subcategory: "vehicles",
    price: 2499,
    oldPrice: 2999,
    rating: 4.7,
    reviewCount: 49,
    bestseller: false,
    isNew: true,
    onSale: true,
    inStock: true,
    quality: "Premium",
    age: "4+",
    material: "ABS Plastic & LED",
    brand: "RescueForce PK",
    country: "Pakistan",
    description: "Complete emergency services set with fire truck, police car, and ambulance. Each vehicle has working LED lights and realistic sirens.",
    features: [
      "3 emergency vehicles",
      "Working LED lights",
      "Realistic siren sounds",
      "Opening doors and compartments",
      "Interchangeable accessories"
    ],
    safetyInfo: "Volume-controlled sirens. Low-heat LED lights. CPSIA compliant.",
    reviews: [
      { name: "Ali Hassan", avatar: "A", date: "2026-01-12", stars: 5, text: "The LED lights and sirens are so realistic! My son conducts rescue missions daily." },
      { name: "Mansoor B.", avatar: "M", date: "2026-01-30", stars: 5, text: "Premium quality set. The fire truck ladder actually moves. Excellent toy." }
    ]
  },
  {
    id: 35,
    name: "Coding & Programming Kit for Kids",
    image: IMG + "1558618047-3c8c76ca7e0f?w=400&h=400&fit=crop",
    category: "boys",
    subcategory: "stem",
    price: 4999,
    oldPrice: 5999,
    rating: 4.8,
    reviewCount: 25,
    bestseller: false,
    isNew: true,
    onSale: true,
    inStock: true,
    quality: "Premium",
    age: "8+",
    material: "ABS Plastic & Electronics",
    brand: "CodeWizards PK",
    country: "Pakistan",
    description: "Learn to code with this visual programming kit. Build games, animations, and control robots using a drag-and-drop interface. No prior experience needed!",
    features: [
      "Visual drag-and-drop coding",
      "Build 20+ projects",
      "Control real robots",
      "Online learning portal",
      "Parent dashboard"
    ],
    safetyInfo: "CPSIA certified. No internet required for basic coding. Secure platform.",
    reviews: [
      { name: "Dr. Waheed A.", avatar: "W", date: "2026-02-08", stars: 5, text: "My 9-year-old is now making his own games! This kit is worth every rupee for education." },
      { name: "Farooq S.", avatar: "F", date: "2026-02-22", stars: 5, text: "Excellent STEM product. The online portal is well-designed and engaging." }
    ]
  },
  {
    id: 36,
    name: "Solar Power Experiment Kit",
    image: IMG + "1612196808214-b8e1d6145a8c?w=400&h=400&fit=crop",
    category: "boys",
    subcategory: "stem",
    price: 2999,
    oldPrice: 3499,
    rating: 4.6,
    reviewCount: 39,
    bestseller: false,
    isNew: true,
    onSale: true,
    inStock: true,
    quality: "Standard",
    age: "7+",
    material: "Solar Cells & ABS Plastic",
    brand: "GreenEnergy Kids",
    country: "China",
    description: "Build and learn about solar energy with 6 experiments including a solar car, windmill, and power station. Teaches renewable energy concepts hands-on.",
    features: [
      "6 solar experiments",
      "Build a solar car",
      "Working windmill model",
      "Power station model",
      "Learning guide included"
    ],
    safetyInfo: "Solar cells are sealed and safe. No harmful chemicals. CE certified.",
    reviews: [
      { name: "Majid T.", avatar: "M", date: "2026-01-28", stars: 5, text: "My son built a solar car that actually runs in sunlight! Incredible learning toy." },
      { name: "Irfan K.", avatar: "I", date: "2026-02-15", stars: 4, text: "Great STEM kit that teaches real science. The windmill project was our favorite." }
    ]
  },
  {
    id: 37,
    name: "Magnetic Experiment Lab",
    image: IMG + "1532094349884-543bc11b234d?w=400&h=400&fit=crop",
    category: "boys",
    subcategory: "stem",
    price: 3499,
    oldPrice: 3999,
    rating: 4.5,
    reviewCount: 33,
    bestseller: false,
    isNew: false,
    onSale: true,
    inStock: true,
    quality: "Standard",
    age: "6+",
    material: "Magnets & ABS Plastic",
    brand: "MagneticWorks",
    country: "Pakistan",
    description: "Explore the fascinating world of magnetism with 15 experiments. Includes magnets of various shapes, compass, iron filings, and experiment cards.",
    features: [
      "15 magnetic experiments",
      "Various magnet shapes",
      "Working compass",
      "Iron filings (sealed)",
      "Illustrated experiment cards"
    ],
    safetyInfo: "Magnets sealed in plastic. No loose small magnets. Warning label included.",
    reviews: [
      { name: "Naeem R.", avatar: "N", date: "2025-12-10", stars: 4, text: "Fascinating experiments! My kids love seeing how magnets attract and repel." },
      { name: "Qamar S.", avatar: "Q", date: "2026-01-05", stars: 5, text: "Great educational kit. The compass project was a hit with my son." }
    ]
  },
  {
    id: 38,
    name: "Jigsaw Puzzle - Pakistan Map",
    image: IMG + "1569242840510-9fe8f0acb672?w=400&h=400&fit=crop",
    category: "boys",
    subcategory: "puzzles",
    price: 999,
    oldPrice: 1299,
    rating: 4.4,
    reviewCount: 86,
    bestseller: true,
    isNew: false,
    onSale: true,
    inStock: true,
    quality: "Standard",
    age: "5+",
    material: "Thick Cardboard",
    brand: "PuzzlePakistan",
    country: "Pakistan",
    description: "Beautifully illustrated 100-piece jigsaw puzzle featuring a colorful map of Pakistan with landmarks, cities, and cultural icons. Learn while you play!",
    features: [
      "100 thick puzzle pieces",
      "Colorful Pakistan map",
      "Educational landmarks",
      "Finished size: 50x35cm",
      "Reference poster included"
    ],
    safetyInfo: "Non-toxic inks. Thick durable pieces. CE certified. Ages 5+.",
    reviews: [
      { name: "Tariq J.", avatar: "T", date: "2025-10-20", stars: 5, text: "My kids learned about all the provinces of Pakistan through this puzzle! Educational and fun." },
      { name: "Farhat B.", avatar: "F", date: "2025-11-15", stars: 4, text: "Great quality puzzle with beautiful colors. Pieces fit together well." }
    ]
  },
  {
    id: 39,
    name: "3D Metal Earth Puzzle - Airplane",
    image: IMG + "1547447134-cd3f5c716030?w=400&h=400&fit=crop",
    category: "boys",
    subcategory: "puzzles",
    price: 1499,
    oldPrice: 1799,
    rating: 4.3,
    reviewCount: 42,
    bestseller: false,
    isNew: true,
    onSale: true,
    inStock: true,
    quality: "Premium",
    age: "10+",
    material: "Stainless Steel",
    brand: "MetalCraft",
    country: "China",
    description: "Challenging 3D metal puzzle that builds into a detailed airplane model. No glue needed - pieces interlock precisely. A display-worthy achievement!",
    features: [
      "42 metal pieces",
      "No glue required",
      "Detailed airplane model",
      "Precision laser-cut steel",
      "Display stand included"
    ],
    safetyInfo: "Sharp edges on raw pieces - adult supervision required. Tweezers included.",
    reviews: [
      { name: "Saqib N.", avatar: "S", date: "2026-01-22", stars: 4, text: "Challenging but rewarding! My 12-year-old needed some help but loved the result." },
      { name: "Omar R.", avatar: "O", date: "2026-02-08", stars: 5, text: "Amazing quality metal puzzle. The finished airplane looks fantastic on the shelf." }
    ]
  },
  {
    id: 40,
    name: "Outdoor Adventure Explorer Kit",
    image: IMG + "1555041469-a586c61ea9bc?w=400&h=400&fit=crop",
    category: "boys",
    subcategory: "outdoor",
    price: 2499,
    oldPrice: 2999,
    rating: 4.7,
    reviewCount: 57,
    bestseller: true,
    isNew: false,
    onSale: true,
    inStock: true,
    quality: "Standard",
    age: "5+",
    material: "Polyester, Plastic & Metal",
    brand: "AdventureKids PK",
    country: "Pakistan",
    description: "Complete outdoor exploration kit with binoculars, compass, magnifying glass, flashlight, bug catcher, and safari hat. Every young explorer needs this!",
    features: [
      "Kid-sized binoculars",
      "Working compass",
      "Magnifying glass",
      "LED flashlight",
      "Bug catcher jar",
      "Safari explorer hat"
    ],
    safetyInfo: "Binoculars are impact-resistant. Flashlight uses low-power LED. Ages 5+.",
    reviews: [
      { name: "Raoof A.", avatar: "R", date: "2025-11-22", stars: 5, text: "My son takes this kit on every outdoor trip! The compass and binoculars are real working tools." },
      { name: "Junaid K.", avatar: "J", date: "2025-12-18", stars: 5, text: "Fantastic gift for adventurous kids. The quality of each item is impressive." }
    ]
  },
  // ---- BOYS: Outdoor (continued) ----
  {id:41,name:"Water Blaster Mega Pack",image:IMG+"1519019121996-5a48f6d78e8b?w=400&h=400&fit=crop",category:"boys",subcategory:"outdoor",price:1299,oldPrice:1799,rating:4.6,reviewCount:201,bestseller:true,isNew:true,onSale:true,inStock:true,quality:"Standard",age:"5-14 years",material:"ABS Plastic",brand:"AquaBlast",country:"China",description:"Set of 4 powerful water blasters in different sizes. Perfect for summer fun and pool parties!",features:["4 water blasters","Up to 10m range","Quick-fill design","BPA-free plastic"],safetyInfo:"CE certified. BPA-free, non-toxic. Ages 5+.",reviews:[{name:"Omar S.",avatar:"O",date:"Mar 2026",stars:5,text:"Best summer purchase!"},{name:"Sana K.",avatar:"S",date:"Feb 2026",stars:5,text:"Strong water stream, well-made."}]},
  {id:42,name:"Outdoor Sports Combo Set",image:IMG+"1515488042361-ee00e0ddd4e4?w=400&h=400&fit=crop",category:"boys",subcategory:"outdoor",price:1999,oldPrice:2799,rating:4.4,reviewCount:87,bestseller:false,isNew:false,onSale:true,inStock:true,quality:"Standard",age:"4-12 years",material:"Mixed Materials",brand:"ActiveKids",country:"Pakistan",description:"Multi-sport set with cricket bat, football, basketball, badminton rackets and more!",features:["Cricket bat and ball","Size 3 football","Mini basketball","2 badminton rackets"],safetyInfo:"Non-toxic materials. Rounded edges. Ages 4+.",reviews:[{name:"Kamran A.",avatar:"K",date:"Jan 2026",stars:4,text:"Great variety of sports equipment."},{name:"Farah N.",avatar:"F",date:"Feb 2026",stars:5,text:"My kids love every sport now!"}]},
  // ---- PREMIUM ----
  {id:43,name:"Premium Doll House Mansion",image:IMG+"1545558014-8692077e9b5c?w=400&h=400&fit=crop",category:"premium",subcategory:"dollhouses",price:12999,oldPrice:16999,rating:4.9,reviewCount:34,bestseller:true,isNew:true,onSale:true,inStock:true,quality:"Premium",age:"5-14 years",material:"Solid Wood & Fabric",brand:"ToyVerse Premium",country:"Germany",description:"Ultimate luxury dollhouse with 5 rooms, working lights, elevator, and 30 furniture pieces.",features:["5 furnished rooms","Working LED lights","Passenger elevator","30 furniture pieces"],safetyInfo:"EN71 and TUV certified. Water-based paints. Ages 5+.",reviews:[{name:"Asma Q.",avatar:"A",date:"Feb 2026",stars:5,text:"Absolutely premium quality!"},{name:"Tariq B.",avatar:"T",date:"Mar 2026",stars:5,text:"Stunning gift, worth every rupee."}]},
  {id:44,name:"Deluxe RC Helicopter Pro",image:IMG+"1615497001839-b0a0eac3274c?w=400&h=400&fit=crop",category:"premium",subcategory:"rc",price:8999,oldPrice:11999,rating:4.7,reviewCount:45,bestseller:true,isNew:false,onSale:true,inStock:true,quality:"Premium",age:"10-Adult",material:"Carbon Fiber & Metal",brand:"SkyMaster",country:"Japan",description:"Professional-grade RC helicopter with gyro stabilization and 45-minute flight time.",features:["Gyro stabilization","45-min flight time","LED navigation lights","3D flight capability"],safetyInfo:"FCC certified. Auto-land on low battery. Ages 10+.",reviews:[{name:"Hassan T.",avatar:"H",date:"Jan 2026",stars:5,text:"Incredible stability and flight time."},{name:"Faisal K.",avatar:"F",date:"Mar 2026",stars:5,text:"Professional quality RC helicopter."}]},
  {id:45,name:"Premium Engineering Building Set",image:IMG+"1602631985686-1bb0e6a8696e?w=400&h=400&fit=crop",category:"premium",subcategory:"building",price:7499,oldPrice:9999,rating:4.8,reviewCount:56,bestseller:false,isNew:true,onSale:true,inStock:true,quality:"Premium",age:"8-16 years",material:"ABS Plastic & Metal",brand:"TechBuild",country:"Germany",description:"Complex engineering set with motorized parts to build cranes, bridges and vehicles.",features:["800+ pieces","Motorized crane","Gear and pulley system","Detailed manual"],safetyInfo:"CE and TUV certified. No sharp edges. Ages 8+.",reviews:[{name:"Talha S.",avatar:"T",date:"Nov 2025",stars:5,text:"Fantastic educational toy!"},{name:"Shameem R.",avatar:"S",date:"Jan 2026",stars:5,text:"Premium quality, motorized parts work great."}]},
  {id:46,name:"Luxury Gift Set for Girls",image:IMG+"1563911892437-1feda0179e1b?w=400&h=400&fit=crop",category:"premium",subcategory:"giftsets",price:9999,oldPrice:13999,rating:4.9,reviewCount:28,bestseller:true,isNew:true,onSale:true,inStock:true,quality:"Premium",age:"3-10 years",material:"Mixed Premium Materials",brand:"ToyVerse Premium",country:"Pakistan",description:"Curated gift box with plush unicorn, princess doll, art set, puzzle, and greeting card.",features:["5 premium gifts","Personalized greeting card","Luxury gift wrapping","Premium quality items"],safetyInfo:"All items safety tested. Ages 3+.",reviews:[{name:"Saira M.",avatar:"S",date:"Feb 2026",stars:5,text:"Most beautiful gift set ever!"},{name:"Danish K.",avatar:"D",date:"Mar 2026",stars:5,text:"Premium packaging, amazing quality."}]},
  {id:47,name:"Premium STEM Laboratory Kit",image:IMG+"1532094349884-543bc11b234d?w=400&h=400&fit=crop",category:"premium",subcategory:"stem",price:7499,oldPrice:9999,rating:4.8,reviewCount:67,bestseller:false,isNew:true,onSale:true,inStock:true,quality:"Premium",age:"8-16 years",material:"Lab-grade Materials",brand:"ScienceElite",country:"USA",description:"Comprehensive STEM lab with real equipment, 100+ experiments, and digital guidebook.",features:["Real glass beakers","100+ experiments","Microscope included","Lab coat and goggles"],safetyInfo:"All chemicals non-toxic. Ages 8+.",reviews:[{name:"Shahid R.",avatar:"S",date:"Feb 2026",stars:5,text:"Phenomenal STEM kit!"},{name:"Nadia M.",avatar:"N",date:"Mar 2026",stars:5,text:"Lab-quality equipment, truly premium."}]},
  {id:48,name:"Premium Plush Bear Collection",image:IMG+"1559715541-d5bdb2cff4be?w=400&h=400&fit=crop",category:"premium",subcategory:"soft",price:6999,oldPrice:8999,rating:4.9,reviewCount:22,bestseller:false,isNew:true,onSale:true,inStock:true,quality:"Premium",age:"All ages",material:"Imported Ultra-Soft Plush",brand:"CuddleBuddy Premium",country:"South Korea",description:"3 premium plush bears in different sizes, each in a luxury gift bag.",features:["3 bears S/M/L","Imported ultra-soft plush","Gift bag packaging","Machine washable"],safetyInfo:"OEKO-TEX certified. Safety eyes. Suitable from birth.",reviews:[{name:"Rukhsana A.",avatar:"R",date:"Jan 2026",stars:5,text:"Softest plush toys ever!"},{name:"Imran S.",avatar:"I",date:"Feb 2026",stars:5,text:"Perfect luxury gift."}]},
  // ---- IMPORTED ----
  {id:49,name:"Imported LEGO City Fire Station",image:IMG+"1587654780291-39c9404d7dd0?w=400&h=400&fit=crop",category:"imported",subcategory:"building",price:14999,oldPrice:18999,rating:4.9,reviewCount:156,bestseller:true,isNew:false,onSale:true,inStock:true,quality:"Imported",age:"6-12 years",material:"ABS Plastic",brand:"LEGO",country:"Denmark",description:"Authentic LEGO City Fire Station with fire truck, minifigures, and detailed station.",features:["678 LEGO pieces","Fire truck with ladder","4 minifigures","Detailed station"],safetyInfo:"Original LEGO. EN71 certified. Ages 6+.",reviews:[{name:"Bilal K.",avatar:"B",date:"Dec 2025",stars:5,text:"Original LEGO quality!"},{name:"Amina R.",avatar:"A",date:"Jan 2026",stars:5,text:"Amazing detail, genuine product."}]},
  {id:50,name:"Imported Barbie Dreamhouse",image:IMG+"1596461404969-9ae70f2830c1?w=400&h=400&fit=crop",category:"imported",subcategory:"dolls",price:19999,oldPrice:24999,rating:4.8,reviewCount:89,bestseller:true,isNew:false,onSale:true,inStock:true,quality:"Imported",age:"3-10 years",material:"Premium Plastic",brand:"Barbie",country:"USA",description:"The iconic Barbie Dreamhouse with 3 stories, working elevator, pool, and 20+ accessories.",features:["3 stories, 7 rooms","Working elevator","Swimming pool","Light and sound"],safetyInfo:"Original Mattel. ASTM F963 certified. Ages 3+.",reviews:[{name:"Sana T.",avatar:"S",date:"Nov 2025",stars:5,text:"The real Barbie Dreamhouse!"},{name:"Omar H.",avatar:"O",date:"Jan 2026",stars:5,text:"Authentic product, amazing quality."}]},
  {id:51,name:"Imported Hot Wheels Ultimate Garage",image:IMG+"1558618666-fcd25c85f82e?w=400&h=400&fit=crop",category:"imported",subcategory:"rc",price:11999,oldPrice:14999,rating:4.7,reviewCount:112,bestseller:false,isNew:true,onSale:true,inStock:true,quality:"Imported",age:"5-12 years",material:"Die-cast Metal & Plastic",brand:"Hot Wheels",country:"USA",description:"Multi-level car garage with motorized elevator, crash zone, room for 60+ cars.",features:["3-level garage","Motorized elevator","Crash zone","Holds 60+ cars"],safetyInfo:"Original Mattel. Non-toxic. Ages 5+.",reviews:[{name:"Hamza A.",avatar:"H",date:"Feb 2026",stars:5,text:"My son is obsessed!"},{name:"Irfan M.",avatar:"I",date:"Mar 2026",stars:4,text:"Great garage, wish it had more cars."}]},
  {id:52,name:"Imported VTech Learning Tablet",image:IMG+"1576020799627-aeac74d58064?w=400&h=400&fit=crop",category:"imported",subcategory:"stem",price:6999,oldPrice:8999,rating:4.6,reviewCount:78,bestseller:false,isNew:true,onSale:true,inStock:true,quality:"Imported",age:"3-8 years",material:"Durable Plastic",brand:"VTech",country:"China",description:"Interactive learning tablet with 100+ educational games covering reading, math, and science.",features:["100+ learning activities","Touchscreen","Parental controls","Rechargeable battery"],safetyInfo:"FCC and CE certified. Drop-proof. Ages 3+.",reviews:[{name:"Nida K.",avatar:"N",date:"Jan 2026",stars:5,text:"My 4-year-old is learning to read!"},{name:"Ali R.",avatar:"A",date:"Feb 2026",stars:4,text:"Good educational tablet."}]},
  {id:53,name:"Imported Ravensburger 3D Puzzle",image:IMG+"1609198092454-16774c621e85?w=400&h=400&fit=crop",category:"imported",subcategory:"puzzles",price:5999,oldPrice:7499,rating:4.8,reviewCount:67,bestseller:false,isNew:false,onSale:true,inStock:true,quality:"Imported",age:"10-Adult",material:"Premium Plastic",brand:"Ravensburger",country:"Germany",description:"3D Eiffel Tower puzzle. 216 precision-fit pieces, 44cm tall. No glue needed.",features:["216 pieces","No glue required","LED light base","44cm tall"],safetyInfo:"Original Ravensburger. CE certified. Ages 10+.",reviews:[{name:"Waqas K.",avatar:"W",date:"Dec 2025",stars:5,text:"Amazing puzzle with LED base!"},{name:"Sobia A.",avatar:"S",date:"Feb 2026",stars:5,text:"Precision quality, perfect fit."}]},
  {id:54,name:"Imported Jellycat Plush Bunny",image:IMG+"1583511655826-05700442b31b?w=400&h=400&fit=crop",category:"imported",subcategory:"soft",price:5499,oldPrice:6999,rating:4.9,reviewCount:134,bestseller:true,isNew:false,onSale:true,inStock:true,quality:"Imported",age:"All ages",material:"Premium Plush",brand:"Jellycat",country:"UK",description:"Iconic Jellycat Bashful Bunny. Incredibly soft, cuddly, and loved worldwide.",features:["Iconic design","Super soft plush","Weighted bottom","32cm tall","Gift box included"],safetyInfo:"Original Jellycat. EN71 certified. Suitable from birth.",reviews:[{name:"Hira M.",avatar:"H",date:"Jan 2026",stars:5,text:"Softest bunny in the world!"},{name:"Tariq S.",avatar:"T",date:"Mar 2026",stars:5,text:"Authentic Jellycat quality."}]},
  {id:55,name:"Imported Crayola Art Case 140pc",image:IMG+"1595841696677-6489ff3f8cd1?w=400&h=400&fit=crop",category:"imported",subcategory:"arts",price:4999,oldPrice:6499,rating:4.7,reviewCount:98,bestseller:false,isNew:true,onSale:true,inStock:true,quality:"Imported",age:"4-14 years",material:"Non-toxic Pigments",brand:"Crayola",country:"USA",description:"Complete art case with 140 pieces: crayons, pencils, markers, watercolors in carrying case.",features:["140 art supplies","Crayons, pencils, markers","Watercolor set","Carrying case"],safetyInfo:"Original Crayola. AP certified non-toxic. Ages 4+.",reviews:[{name:"Mariam Z.",avatar:"M",date:"Feb 2026",stars:5,text:"Original Crayola quality!"},{name:"Kamran L.",avatar:"K",date:"Mar 2026",stars:4,text:"Great art set."}]},
  {id:56,name:"Imported National Geographic Rock Kit",image:IMG+"1532094349884-543bc11b234d?w=400&h=400&fit=crop",category:"imported",subcategory:"educational",price:4499,oldPrice:5999,rating:4.6,reviewCount:56,bestseller:false,isNew:true,onSale:true,inStock:true,quality:"Imported",age:"8-16 years",material:"Real Minerals & Tools",brand:"National Geographic",country:"USA",description:"15 real rock specimens with learning guide, magnifying glass, and display case.",features:["15 real specimens","Learning guide","Magnifying glass","Display case"],safetyInfo:"Original NatGeo. Non-toxic. Ages 8+.",reviews:[{name:"Faizan R.",avatar:"F",date:"Jan 2026",stars:5,text:"Real specimens are amazing!"},{name:"Parveen S.",avatar:"P",date:"Feb 2026",stars:5,text:"High quality educational kit."}]},
  // ---- EDUCATIONAL ----
  {id:57,name:"Montessori Wooden Puzzle Set",image:IMG+"1566576912321-d58ddd7a6088?w=400&h=400&fit=crop",category:"educational",subcategory:"montessori",price:2499,oldPrice:3299,rating:4.7,reviewCount:167,bestseller:true,isNew:false,onSale:true,inStock:true,quality:"Standard",age:"2-6 years",material:"Natural Wood",brand:"MontessoriPlay",country:"Pakistan",description:"6 wooden Montessori puzzles covering shapes, colors, numbers, animals, letters, and patterns.",features:["6 wooden puzzles","Natural wood finish","Non-toxic paint","Storage tray"],safetyInfo:"EN71 certified. Lead-free paint. Ages 2+.",reviews:[{name:"Sana K.",avatar:"S",date:"Jan 2026",stars:5,text:"Perfect Montessori puzzles!"},{name:"Ahmed H.",avatar:"A",date:"Feb 2026",stars:4,text:"Good quality wooden puzzles."}]},
  {id:58,name:"STEM Coding for Kids Kit",image:IMG+"1576020799627-aeac74d58064?w=400&h=400&fit=crop",category:"educational",subcategory:"coding",price:3999,oldPrice:5499,rating:4.8,reviewCount:89,bestseller:true,isNew:true,onSale:true,inStock:true,quality:"Premium",age:"7-14 years",material:"ABS Plastic & Electronics",brand:"CodeBuddy",country:"South Korea",description:"Build and program your own robot with drag-and-drop and real Python coding.",features:["150+ coding challenges","Bluetooth control","LED display","Voice commands"],safetyInfo:"FCC and CE certified. Ages 7+.",reviews:[{name:"Tariq S.",avatar:"T",date:"Mar 2026",stars:5,text:"Learned coding in a week!"},{name:"Rukhsana A.",avatar:"R",date:"Feb 2026",stars:5,text:"Plays and learns at the same time."}]},
  {id:59,name:"Solar System Model Kit",image:IMG+"1615497001839-b0a0eac3274c?w=400&h=400&fit=crop",category:"educational",subcategory:"science",price:2999,oldPrice:3999,rating:4.5,reviewCount:78,bestseller:false,isNew:false,onSale:true,inStock:true,quality:"Standard",age:"6-14 years",material:"Plastic & Electronics",brand:"SpaceKit",country:"China",description:"Motorized solar system model with LED sun, orbiting planets, and fact booklet.",features:["Motorized orbits","LED sun","9 planets","Fact booklet"],safetyInfo:"CE certified. Battery operated. Ages 6+.",reviews:[{name:"Imran B.",avatar:"I",date:"Feb 2026",stars:5,text:"Memorized all planet names!"},{name:"Nazia K.",avatar:"N",date:"Jan 2026",stars:4,text:"Great educational kit."}]},
  {id:60,name:"Microscope Explorer Kit",image:IMG+"1581952976147-4a07e162a5c7?w=400&h=400&fit=crop",category:"educational",subcategory:"science",price:3499,oldPrice:4499,rating:4.6,reviewCount:56,bestseller:false,isNew:true,onSale:true,inStock:true,quality:"Standard",age:"8-16 years",material:"Metal & Glass Optics",brand:"LabKids",country:"China",description:"Real microscope with 100x-1200x magnification, prepared slides, and specimen tools.",features:["100x-1200x magnification","25 prepared slides","LED illumination","Carrying case"],safetyInfo:"Glass optics, adult supervision. Ages 8+.",reviews:[{name:"Shahid K.",avatar:"S",date:"Jan 2026",stars:5,text:"A real microscope, not a toy!"},{name:"Bushra H.",avatar:"B",date:"Mar 2026",stars:4,text:"Good quality optics."}]},
  {id:61,name:"Magnetic Building Tiles 120pc",image:IMG+"1566576912321-d58ddd7a6088?w=400&h=400&fit=crop",category:"educational",subcategory:"building",price:4499,oldPrice:5999,rating:4.8,reviewCount:234,bestseller:true,isNew:false,onSale:true,inStock:true,quality:"Premium",age:"3-14 years",material:"ABS Plastic & Magnets",brand:"MagBuild",country:"China",description:"120 colorful magnetic tiles for building castles, rockets, houses and more.",features:["120 magnetic tiles","Multiple shapes","Strong magnets","Storage bag"],safetyInfo:"CE and ASTM certified. Magnets enclosed. Ages 3+.",reviews:[{name:"Kamran L.",avatar:"K",date:"Dec 2025",stars:5,text:"Family plays together!"},{name:"Shazia N.",avatar:"S",date:"Jan 2026",stars:5,text:"Best educational toy."}]},
  {id:62,name:"Math Learning Game Board",image:IMG+"1611371805429-8b8c6d397585?w=400&h=400&fit=crop",category:"educational",subcategory:"learning",price:1499,oldPrice:1999,rating:4.4,reviewCount:112,bestseller:false,isNew:false,onSale:true,inStock:true,quality:"Standard",age:"5-12 years",material:"Cardboard & Plastic",brand:"MathGenius",country:"Pakistan",description:"Board game teaching addition, subtraction, multiplication, and division through fun gameplay.",features:["4 math operations","2-4 players","100 question cards","Difficulty levels"],safetyInfo:"Non-toxic. Large pieces. Ages 5+.",reviews:[{name:"Ali M.",avatar:"A",date:"Feb 2026",stars:4,text:"Kids enjoy doing math now!"},{name:"Nasreen P.",avatar:"N",date:"Jan 2026",stars:4,text:"Fun way to learn math."}]},
  {id:63,name:"Robotics Building Kit 500pc",image:IMG+"1624253321171-1be53e12f5f4?w=400&h=400&fit=crop",category:"educational",subcategory:"stem",price:5999,oldPrice:7999,rating:4.7,reviewCount:45,bestseller:false,isNew:true,onSale:true,inStock:true,quality:"Premium",age:"8-16 years",material:"ABS Plastic & Metal",brand:"RoboKit",country:"South Korea",description:"Build 12 different robots with motor, sensors, and programmable controller.",features:["500+ pieces","12 robot designs","Motor and sensors","Programmable controller"],safetyInfo:"CE and FCC certified. Ages 8+.",reviews:[{name:"Hamza A.",avatar:"H",date:"Mar 2026",stars:5,text:"Built a line-following robot!"},{name:"Saima J.",avatar:"S",date:"Feb 2026",stars:5,text:"Best STEM investment."}]},
  {id:64,name:"Chemistry Lab Junior",image:IMG+"1532094349884-543bc11b234d?w=400&h=400&fit=crop",category:"educational",subcategory:"science",price:2999,oldPrice:3999,rating:4.5,reviewCount:89,bestseller:false,isNew:false,onSale:true,inStock:true,quality:"Standard",age:"8-14 years",material:"Mixed Materials",brand:"LabKids",country:"China",description:"50 science experiments including volcano eruptions, crystal growing, and slime making!",features:["50 experiments","Step-by-step guide","Safety goggles included","Lab notebook"],safetyInfo:"Non-toxic chemicals. Adult supervision required. Ages 8+.",reviews:[{name:"Faisal R.",avatar:"F",date:"Jan 2026",stars:5,text:"Volcano experiment was amazing!"},{name:"Amina K.",avatar:"A",date:"Dec 2025",stars:4,text:"Great variety of experiments."}]},
  // ---- EVERYDAY (affordable) ----
  {id:65,name:"Classic Teddy Bear",image:IMG+"1559715541-d5bdb2cff4be?w=400&h=400&fit=crop",category:"boys",subcategory:"everyday",price:699,oldPrice:999,rating:4.3,reviewCount:234,bestseller:true,isNew:false,onSale:true,inStock:true,quality:"Standard",age:"All ages",material:"Soft Plush",brand:"CuddleBuddy",country:"Pakistan",description:"Classic soft teddy bear. Affordable cuddle companion for every child.",features:["Soft plush fur","12 inches tall","Machine washable","Hypoallergenic"],safetyInfo:"CE certified. Safety eyes. All ages.",reviews:[{name:"Samina T.",avatar:"S",date:"Jan 2026",stars:4,text:"Great affordable teddy bear."},{name:"Usman A.",avatar:"U",date:"Feb 2026",stars:4,text:"Good value for money."}]},
  {id:66,name:"Colorful Building Blocks 200pc",image:IMG+"1587654780291-39c9404d7dd0?w=400&h=400&fit=crop",category:"girls",subcategory:"everyday",price:899,oldPrice:1299,rating:4.4,reviewCount:189,bestseller:true,isNew:false,onSale:true,inStock:true,quality:"Standard",age:"3-10 years",material:"ABS Plastic",brand:"BlockFun",country:"China",description:"200 colorful building blocks in various shapes. Build anything you imagine!",features:["200 pieces","Bright colors","Compatible with major brands","Storage bucket"],safetyInfo:"BPA-free, non-toxic. Rounded edges. Ages 3+.",reviews:[{name:"Hira M.",avatar:"H",date:"Feb 2026",stars:5,text:"Amazing value for 200 blocks!"},{name:"Nadia S.",avatar:"N",date:"Jan 2026",stars:4,text:"Good quality for the price."}]},
  {id:67,name:"Toy Car Collection 12pc",image:IMG+"1560807707-8cc77767d783?w=400&h=400&fit=crop",category:"boys",subcategory:"everyday",price:599,oldPrice:899,rating:4.3,reviewCount:312,bestseller:true,isNew:false,onSale:true,inStock:true,quality:"Standard",age:"3-8 years",material:"Die-cast Metal",brand:"TurboWheels",country:"China",description:"12 colorful die-cast toy cars. Free-rolling wheels and realistic designs.",features:["12 die-cast cars","Free-rolling wheels","Colorful designs","1:64 scale"],safetyInfo:"ASTM F963 certified. Lead-free paint. Ages 3+.",reviews:[{name:"Ali M.",avatar:"A",date:"Dec 2025",stars:5,text:"12 cars for this price? Amazing!"},{name:"Kainat R.",avatar:"K",date:"Jan 2026",stars:4,text:"Nice variety, good quality."}]},
  {id:68,name:"Sticker & Activity Book",image:IMG+"1595841696677-6489ff3f8cd1?w=400&h=400&fit=crop",category:"girls",subcategory:"everyday",price:499,oldPrice:699,rating:4.2,reviewCount:156,bestseller:false,isNew:false,onSale:true,inStock:true,quality:"Standard",age:"3-8 years",material:"Paper & Non-toxic Ink",brand:"FunLearn",country:"Pakistan",description:"Activity book with puzzles, coloring pages, stickers, and mazes. Screen-free fun!",features:["100+ pages","500 stickers","Coloring, puzzles, mazes","Travel-friendly"],safetyInfo:"Non-toxic inks. Rounded corners. Ages 3+.",reviews:[{name:"Fatima R.",avatar:"F",date:"Jan 2026",stars:4,text:"Keeps my daughter entertained for hours!"},{name:"Danish K.",avatar:"D",date:"Feb 2026",stars:4,text:"Good quality book."}]},
  {id:69,name:"Foam Ball Set (6pc)",image:IMG+"1503454537195-1dcabb73ffb9?w=400&h=400&fit=crop",category:"boys",subcategory:"everyday",price:799,oldPrice:1199,rating:4.4,reviewCount:98,bestseller:false,isNew:false,onSale:true,inStock:true,quality:"Standard",age:"2-8 years",material:"Soft Foam",brand:"PlayTime",country:"Pakistan",description:"6 soft foam balls in different sizes and colors. Safe for indoor and outdoor play.",features:["6 foam balls","Different sizes","Soft and lightweight","Bounceable"],safetyInfo:"Non-toxic foam. No hard parts. Ages 2+.",reviews:[{name:"Sobia A.",avatar:"S",date:"Feb 2026",stars:5,text:"Perfect for toddlers!"},{name:"Khalid M.",avatar:"K",date:"Jan 2026",stars:4,text:"Good quality foam balls."}]},
  {id:70,name:"Finger Painting Kit",image:IMG+"1513364776144-60967b0f800f?w=400&h=400&fit=crop",category:"girls",subcategory:"everyday",price:599,oldPrice:899,rating:4.3,reviewCount:134,bestseller:false,isNew:true,onSale:true,inStock:true,quality:"Standard",age:"2-8 years",material:"Non-toxic Pigments",brand:"ArtKids",country:"Pakistan",description:"Safe finger paint set with 8 vibrant colors, smock, and paper roll.",features:["8 paint colors","Child-size smock","Paper roll","Washable formula"],safetyInfo:"AP certified non-toxic. Washable. Ages 2+.",reviews:[{name:"Mariam Z.",avatar:"M",date:"Mar 2026",stars:4,text:"Easy to wash off!"},{name:"Tanya R.",avatar:"T",date:"Feb 2026",stars:5,text:"Safe and fun paints."}]},
  {id:71,name:"Jump Rope & Outdoor Fun Set",image:IMG+"1515488042361-ee00e0ddd4e4?w=400&h=400&fit=crop",category:"boys",subcategory:"everyday",price:499,oldPrice:699,rating:4.2,reviewCount:78,bestseller:false,isNew:false,onSale:true,inStock:true,quality:"Standard",age:"4-12 years",material:"Nylon & Plastic",brand:"ActiveKids",country:"Pakistan",description:"Jump rope, flying disc, and skipping rope. Get active outdoors!",features:["Adjustable jump rope","Flying disc","Soft skipping rope","Carry pouch"],safetyInfo:"Non-toxic. Rounded edges. Ages 4+.",reviews:[{name:"Adnan K.",avatar:"A",date:"Jan 2026",stars:4,text:"Simple but fun set."},{name:"Rukhsana M.",avatar:"R",date:"Feb 2026",stars:4,text:"Good quality for the price."}]},
  {id:72,name:"Board Game Family Fun",image:IMG+"1611371805429-8b8c6d397585?w=400&h=400&fit=crop",category:"girls",subcategory:"everyday",price:899,oldPrice:1299,rating:4.5,reviewCount:167,bestseller:false,isNew:false,onSale:true,inStock:true,quality:"Standard",age:"4-Adult",material:"Cardboard & Plastic",brand:"FunZone",country:"Pakistan",description:"Classic family board game with colorful board, dice, and tokens.",features:["2-4 players","Colorful board","Dice and tokens","Easy rules"],safetyInfo:"Non-toxic. Large pieces. Ages 4+.",reviews:[{name:"Irfan K.",avatar:"I",date:"Feb 2026",stars:5,text:"Family game night favorite!"},{name:"Parveen S.",avatar:"P",date:"Jan 2026",stars:4,text:"Fun for all ages."}]},
  // ---- MIXED BESTSELLERS & NEW ----
  {id:73,name:"Musical Instrument Set",image:IMG+"1598488035139-bdbb2231ce04?w=400&h=400&fit=crop",category:"girls",subcategory:"educational",price:1799,oldPrice:2499,rating:4.6,reviewCount:123,bestseller:true,isNew:true,onSale:true,inStock:true,quality:"Standard",age:"3-10 years",material:"Wood & Metal",brand:"MusicKids",country:"Pakistan",description:"10-piece musical instrument set including xylophone, drum, maracas, and trumpet.",features:["10 instruments","Xylophone with mallet","Hand drum","Carrying bag"],safetyInfo:"Non-toxic finishes. Ages 3+.",reviews:[{name:"Sana T.",avatar:"S",date:"Feb 2026",stars:5,text:"Concert every evening!"},{name:"Omar K.",avatar:"O",date:"Mar 2026",stars:4,text:"Good quality instruments."}]},
  {id:74,name:"Space Explorer Building Set",image:IMG+"1615497001839-b0a0eac3274c?w=400&h=400&fit=crop",category:"boys",subcategory:"building",price:3799,oldPrice:4999,rating:4.5,reviewCount:72,bestseller:false,isNew:true,onSale:true,inStock:true,quality:"Premium",age:"6-14 years",material:"ABS Plastic",brand:"SpaceKit",country:"China",description:"Build rockets, space stations, and rovers with 600-piece space set.",features:["600+ pieces","3 space models","Astronaut minifigures","Light-up rocket"],safetyInfo:"CE certified. Ages 6+.",reviews:[{name:"Imran B.",avatar:"I",date:"Feb 2026",stars:5,text:"Space-loving son adores this!"},{name:"Nazia K.",avatar:"N",date:"Mar 2026",stars:4,text:"Great quality pieces."}]},
  {id:75,name:"Dinosaur Adventure Set 12pc",image:IMG+"1618923850107-d1a234ef2b1f?w=400&h=400&fit=crop",category:"girls",subcategory:"soft",price:1499,oldPrice:1999,rating:4.7,reviewCount:156,bestseller:true,isNew:false,onSale:true,inStock:true,quality:"Standard",age:"3-12 years",material:"Non-toxic PVC",brand:"DinoWorld",country:"China",description:"12 realistic hand-painted dinosaur figures with educational info card.",features:["12 unique dinosaurs","Hand-painted details","Realistic sizes","Carrying case"],safetyInfo:"CE certified. BPA-free. Ages 3+.",reviews:[{name:"Hamza A.",avatar:"H",date:"Dec 2025",stars:5,text:"Knows every dinosaur name now!"},{name:"Saima J.",avatar:"S",date:"Jan 2026",stars:5,text:"Great quality paint."}]},
  {id:76,name:"Turbo RC Racing Car",image:IMG+"1558618666-fcd25c85f82e?w=400&h=400&fit=crop",category:"boys",subcategory:"rc",price:3499,oldPrice:4999,rating:4.6,reviewCount:189,bestseller:true,isNew:false,onSale:true,inStock:true,quality:"Premium",age:"6-16 years",material:"ABS Plastic & Rubber",brand:"SpeedKing",country:"China",description:"High-speed RC car with 30km/h top speed and 4-wheel suspension.",features:["30 km/h speed","2.4GHz remote","4-wheel suspension","30 min battery"],safetyInfo:"CE and FCC certified. Ages 6+.",reviews:[{name:"Bilal K.",avatar:"B",date:"Nov 2025",stars:5,text:"This car is FAST!"},{name:"Asif M.",avatar:"A",date:"Jan 2026",stars:4,text:"Great speed and durability."}]},
  {id:77,name:"Coding Robot Kit",image:IMG+"1576020799627-aeac74d58064?w=400&h=400&fit=crop",category:"educational",subcategory:"coding",price:4999,oldPrice:6999,rating:4.8,reviewCount:89,bestseller:true,isNew:true,onSale:true,inStock:true,quality:"Premium",age:"7-16 years",material:"ABS Plastic & Electronics",brand:"CodeBot",country:"South Korea",description:"Build and program your own robot with drag-and-drop and Python coding.",features:["Drag-and-drop coding","Python mode","10+ robot designs","Bluetooth"],safetyInfo:"FCC and CE certified. Ages 7+.",reviews:[{name:"Shahid K.",avatar:"S",date:"Mar 2026",stars:5,text:"Built his first robot!"},{name:"Zeenat A.",avatar:"Z",date:"Feb 2026",stars:5,text:"Best STEM investment."}]},
  {id:78,name:"Premium Gift Set - Boys Edition",image:IMG+"1563911892437-1feda0179e1b?w=400&h=400&fit=crop",category:"premium",subcategory:"giftsets",price:8999,oldPrice:11999,rating:4.8,reviewCount:34,bestseller:true,isNew:true,onSale:true,inStock:true,quality:"Premium",age:"4-12 years",material:"Mixed Premium Materials",brand:"ToyVerse Premium",country:"Pakistan",description:"Curated gift box with RC car, building set, puzzle, art kit, and birthday card.",features:["5 premium gifts","Personalized card","Luxury wrapping","Storage gift box"],safetyInfo:"All items tested. Ages 4+.",reviews:[{name:"Asif R.",avatar:"A",date:"Feb 2026",stars:5,text:"Best birthday gift ever!"},{name:"Hira M.",avatar:"H",date:"Mar 2026",stars:5,text:"Beautifully packaged."}]},
  {id:79,name:"Imported LEGO Creator Set",image:IMG+"1587654780291-39c9404d7dd0?w=400&h=400&fit=crop",category:"imported",subcategory:"building",price:8999,oldPrice:11999,rating:4.8,reviewCount:67,bestseller:false,isNew:true,onSale:true,inStock:true,quality:"Imported",age:"8-16 years",material:"ABS Plastic",brand:"LEGO",country:"Denmark",description:"3-in-1 LEGO Creator set: house, shop, or cafe. Over 700 pieces.",features:["3-in-1 models","700+ pieces","Detailed instructions","Display worthy"],safetyInfo:"Original LEGO. EN71 certified. Ages 8+.",reviews:[{name:"Waqas K.",avatar:"W",date:"Feb 2026",stars:5,text:"3 models in 1!"},{name:"Sobia A.",avatar:"S",date:"Mar 2026",stars:5,text:"Genuine LEGO quality."}]},
  {id:80,name:"Super Hero Action Figure Pack",image:IMG+"1594787318286-3d835c1d207f?w=400&h=400&fit=crop",category:"boys",subcategory:"action",price:2199,oldPrice:2999,rating:4.5,reviewCount:145,bestseller:true,isNew:false,onSale:true,inStock:true,quality:"Standard",age:"4-12 years",material:"PVC & ABS Plastic",brand:"HeroForce",country:"China",description:"4 superhero action figures with 20+ articulation points and battle accessories.",features:["4 figures","20+ joints each","Battle accessories","Display stands"],safetyInfo:"EN71 certified. Non-toxic. Ages 4+.",reviews:[{name:"Saad Q.",avatar:"S",date:"Jan 2026",stars:5,text:"Hero battles all day!"},{name:"Amina R.",avatar:"A",date:"Feb 2026",stars:4,text:"Good quality, sturdy joints."}]}
];;

/* ============ UTILITY FUNCTIONS ============ */
function formatPrice(n) { return 'Rs ' + Number(n).toLocaleString('en-PK'); }

function renderStars(rating) {
  var full = Math.floor(rating);
  var half = rating % 1 >= 0.5 ? 1 : 0;
  var empty = 5 - full - half;
  return '\u2605'.repeat(full) + (half ? '\u00BD' : '') + '\u2606'.repeat(empty);
}

function getProductById(id) {
  for (var i = 0; i < PRODUCTS.length; i++) {
    if (PRODUCTS[i].id === id) return PRODUCTS[i];
  }
  return null;
}

function getRelatedProducts(product, count) {
  return PRODUCTS.filter(function(p) {
    return p.id !== product.id && (p.category === product.category || p.subcategory === product.subcategory);
  }).slice(0, count);
}

/* ============ PRODUCT CARD ============ */
var CATEGORY_GRADIENTS = {
  girls: 'linear-gradient(135deg, #fce4ec, #f8bbd0)',
  boys: 'linear-gradient(135deg, #e3f2fd, #90caf9)',
  educational: 'linear-gradient(135deg, #e8f5e9, #a5d6a7)',
  premium: 'linear-gradient(135deg, #fff8e1, #ffe082)',
  imported: 'linear-gradient(135deg, #e0f7fa, #80deea)',
  default: 'linear-gradient(135deg, #f3e5f5, #ce93d8)'
};
var CATEGORY_EMOJIS = {
  girls: { dolls: '\uD83D\uDC85', dollhouses: '\uD83C\uDFE0', soft: '\uD83E\uDDF8', roleplay: '\uD83C\uDFAD', arts: '\uD83C\uDFA8', giftsets: '\uD83C\uDF81', everyday: '\uD83C\uDF88', default: '\uD83D\uDC67' },
  boys: { rc: '\uD83C\uDFCE\uFE0F', action: '\uD83D\uDCA5', building: '\uD83E\uDDF1', everyday: '\u26BD', soft: '\uD83E\uDDF8', default: '\uD83D\uDC66' },
  educational: { stem: '\uD83E\uDDEA', science: '\uD83D\uDD2C', coding: '\uD83D\uDCBB', montessori: '\uD83E\uDDE0', building: '\uD83E\uDDF1', learning: '\uD83D\uDCD6', default: '\uD83C\uDF93' },
  premium: { giftsets: '\uD83C\uDF81', stem: '\uD83E\uDDEA', building: '\uD83E\uDDF1', rc: '\u2708\uFE0F', dollhouses: '\uD83C\uDFE0', soft: '\uD83C\uDF88', default: '\u2B50' },
  imported: { building: '\uD83D\uDDFF\uFE0F', dolls: '\uD83D\uDC84', rc: '\uD83C\uDFCE\uFE0F', stem: '\uD83E\uDDEA', puzzles: '\uD83E\uDDE9', soft: '\uD83C\uDF80', arts: '\uD83C\uDFA8', educational: '\uD83D\uDCDA', everyday: '\uD83C\uDF88', default: '\uD83C\uDF0D' },
  default: { default: '\uD83C\uDFAE' }
};

function getCategoryEmoji(p) {
  var cat = CATEGORY_EMOJIS[p.category] || CATEGORY_EMOJIS.default;
  return cat[p.subcategory] || cat.default;
}

function getCategoryGradient(p) {
  return CATEGORY_GRADIENTS[p.category] || CATEGORY_GRADIENTS.default;
}

function productCard(p) {
  var discount = Math.round((1 - p.price / p.oldPrice) * 100);
  var badge = '';
  if (p.isNew) badge = '<span class="card-badge badge-new">New</span>';
  else if (p.bestseller) badge = '<span class="card-badge badge-best">Best Seller</span>';
  else if (p.quality === 'Premium') badge = '<span class="card-badge badge-premium">Premium</span>';
  else if (p.quality === 'Imported') badge = '<span class="card-badge badge-imported">Imported</span>';
  else if (p.onSale) badge = '<span class="card-badge badge-sale">Sale</span>';

  var emoji = getCategoryEmoji(p);
  var gradient = getCategoryGradient(p);

  return '<div class="product-card" onclick="location.href=\'product.html?id=' + p.id + '\'">' +
    '<div class="card-img" style="background:' + gradient + '">' +
      '<img src="' + p.image + '" alt="' + p.name + '" loading="lazy" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'">' +
      '<div class="card-img-fallback" style="display:none;background:' + gradient + '">' +
        '<span class="fallback-emoji">' + emoji + '</span>' +
        '<span class="fallback-name">' + p.name + '</span>' +
      '</div>' +
      badge +
      '<button class="card-wishlist" onclick="event.stopPropagation();toggleWishlist(' + p.id + ');this.classList.toggle(\'active\')" title="Wishlist">' + (isInWishlist(p.id) ? '\u2665' : '\u2661') + '</button>' +
    '</div>' +
    '<div class="card-body">' +
      '<div class="card-cat">' + p.subcategory + '</div>' +
      '<div class="card-title">' + p.name + '</div>' +
      '<div class="card-rating">' + renderStars(p.rating) + ' <span>(' + p.reviewCount + ')</span></div>' +
      '<div class="card-price">' + formatPrice(p.price) +
        (p.onSale ? '<span class="card-old">' + formatPrice(p.oldPrice) + '</span>' : '') +
        (p.onSale ? '<span class="card-discount">-' + discount + '%</span>' : '') +
      '</div>' +
      '<button class="card-cart-btn" onclick="event.stopPropagation();addToCart(' + p.id + ',1)">Add to Cart</button>' +
    '</div>' +
  '</div>';
}

/* ============ CART SYSTEM ============ */
function getCart() {
  try { return JSON.parse(localStorage.getItem('tv_cart')) || []; } catch(e) { return []; }
}

function saveCart(cart) {
  localStorage.setItem('tv_cart', JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(id, qty) {
  var cart = getCart();
  var product = getProductById(id);
  if (!product) return;
  var found = false;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id === id) { cart[i].qty += qty; found = true; break; }
  }
  if (!found) {
    cart.push({ id: product.id, name: product.name, image: product.image, price: product.price, emoji: product.image, subcategory: product.subcategory, qty: qty });
  }
  saveCart(cart);
  showToast(product.name + ' added to cart!');
}

function removeFromCart(id) {
  var cart = getCart().filter(function(item) { return item.id !== id; });
  saveCart(cart);
}

function updateCartQty(id, qty) {
  var cart = getCart();
  if (qty <= 0) { removeFromCart(id); return; }
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id === id) { cart[i].qty = qty; break; }
  }
  saveCart(cart);
}

function getCartCount() {
  return getCart().reduce(function(sum, item) { return sum + item.qty; }, 0);
}

function getCartTotal() {
  return getCart().reduce(function(sum, item) { return sum + item.price * item.qty; }, 0);
}

function updateCartBadge() {
  var badges = document.querySelectorAll('.cart-badge, .cart-count');
  var count = getCartCount();
  badges.forEach(function(b) { b.textContent = count; b.style.display = count > 0 ? 'flex' : 'none'; });
}

/* ============ WISHLIST SYSTEM ============ */
function getWishlist() {
  try { return JSON.parse(localStorage.getItem('tv_wishlist')) || []; } catch(e) { return []; }
}

function saveWishlist(list) {
  localStorage.setItem('tv_wishlist', JSON.stringify(list));
  updateWishlistBadge();
}

function toggleWishlist(id) {
  var list = getWishlist();
  var idx = list.indexOf(id);
  if (idx > -1) { list.splice(idx, 1); showToast('Removed from wishlist'); }
  else { list.push(id); showToast('Added to wishlist!'); }
  saveWishlist(list);
}

function isInWishlist(id) {
  return getWishlist().indexOf(id) > -1;
}

function updateWishlistBadge() {
  var badges = document.querySelectorAll('.wishlist-badge, .wish-count');
  var count = getWishlist().length;
  badges.forEach(function(b) { b.textContent = count; b.style.display = count > 0 ? 'flex' : 'none'; });
}

/* ============ TOAST ============ */
function showToast(msg) {
  var toast = document.getElementById('toast');
  if (!toast) { toast = document.createElement('div'); toast.id='toast'; toast.className='toast'; document.body.appendChild(toast); }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(function() { toast.classList.remove('show'); }, 2500);
}

/* ============ SEARCH ============ */
function initSearch() {
  var inputs = document.querySelectorAll('.search-bar input');
  inputs.forEach(function(input) {
    input.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        var q = this.value.trim().toLowerCase();
        if (q) location.href = 'category.html?cat=all&q=' + encodeURIComponent(q);
      }
    });
  });
}

/* ============ UI INIT ============ */
document.addEventListener('DOMContentLoaded', function() {
  updateCartBadge();
  updateWishlistBadge();
  initSearch();

  document.querySelectorAll('.hamburger-menu, .hamburger, .mobile-toggle').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var overlay = document.getElementById('mobileMenuOverlay') || document.getElementById('mobileMenu');
      if (overlay) overlay.classList.add('open');
    });
  });
  document.querySelectorAll('.mobile-menu-close, #mobileMenuClose').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var overlay = document.getElementById('mobileMenuOverlay') || document.getElementById('mobileMenu');
      if (overlay) overlay.classList.remove('open');
    });
  });

  var backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', function() {
      backToTop.classList.toggle('visible', window.scrollY > 400);
    });
    backToTop.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  document.querySelectorAll('.newsletter-form, #newsletterForm').forEach(function(form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      showToast('Thank you for subscribing to ToyVerse!');
      this.reset();
    });
  });
});
