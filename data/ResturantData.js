export const restaurantData = [
  {
  _id: 1,
  imageUrl: "https://b.zmtcdn.com/data/pictures/2/36282/a65734ab025650ea5b843c15af899667.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
  title: "Cafe Mondegar",
  rating: 4.2,
  genre: "Cafe / Continental",
  address: "Metro House, Colaba Causeway, Mumbai 400005, India",
  short_description: "Retro cafe famous for Mario murals, beer & bar snacks.",
  latitude: 18.9246,
  longitude: 72.8312,
},
  {
    _id: 2,
    imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/03/a8/b8/the-moghul-room.jpg?w=900&h=-1&s=1",
    title: "Khyber Restaurant",
    rating: 4.3,
    genre: "North Indian / Mughlai",
    address: "5th Road, SV Road, Khar West, Mumbai 400052, India",
    short_description:
      "Long-standing favourite for flavorful North Indian, Mughlai dishes in western suburbs.",
    latitude: 18.928602,
    longitude: 72.831741,
  },
  {
    _id: 3,
    imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/b3/a2/50/bademiya-fort.jpg?w=900&h=500&s=1",
    title: "Bademiya",
    rating: 4.4,
    genre: "Street-food / Kebabs",
    address: "Apollo Bandar, near Taj Hotel, Colaba, Mumbai 400001, India",
    short_description:
      "Legendary late-night kebab and rolls joint behind Taj — perfect for midnight hunger pangs.",
    latitude: 18.921,
    longitude: 72.8335,
  },
  {
    _id: 4,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkNOhEA4xDOGI5V1qhuRPTZL4AqQyfWaCIyg&s",
    title: "Masque",
    rating: 4.6,
    genre: "Fine dining / Modern Indian",
    address:
      "Laxmi Woollen Mills, Shakti Mills Lane, Mahalaxmi, Mumbai 400011, India",
    short_description:
      "Contemporary restaurant known for tasting-menu and modern Indian cuisine.",
    latitude: 19.0054,
    longitude: 72.8229,
  },
  {
    _id: 5,
    imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/65/65/b0/we-had-best-thali-in.jpg?w=900&h=500&s=1",
    title: "Mysore Café",
    rating: 4.1,
    genre: "South Indian / Udupi",
    address: "461, Bhaudaji Road, Matunga, Mumbai 400019, India",
    short_description:
      "Old-school South Indian eatery serving dosas, idlis and filter coffee for decades.",
    latitude: 19.02,
    longitude: 72.847,
  },
];

export const categoryData = [
  {
    _id: 1,
    imgUrl:
      "https://www.thespruceeats.com/thmb/gwtKeNKbXW9zyHvymWGU6DjDEus=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/the-ultimate-cheeseburger-530744755-589cfb5b3df78c475878c4da.jpg",
    title: "American",
  },
  {
    _id: 2,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFG4JL9iLo_S5ijobxkAU7Ty_oG-UsnGmYjA&s",
    title: "Italian",
  },
  {
    _id: 3,
    imgUrl:
      "https://cdn.prod.website-files.com/64931d2aee18510b47f4bb1f/64d26739f645999c3c34ffb3_6-Must-Have-Indian-Dishes-That-Everyone-Should-Try-Blog-Cover.jpeg",
    title: "Indian",
  },
  {
    _id: 4,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxkry9wUzZ6MZmGrRTPlbyIggvXsGM5WtEGA&s",
    title: "Chinese",
  },
  {
    _id: 5,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8XU9iNdPenqXiT5cIvPtt6Y-7aAmwcLokdg&s",
    title: "Mexican",
  },
];

// Dishes mapped to specific restaurants
// restaurantId matches _id from restaurantData

export const dishes = [
  // ☕️ Cafe Mondegar (1) – Cafe / Continental
  {
    _id: "dish1",
    restaurantId: 1,
    name: "Cheese Garlic Bread",
    short_description:
      "Toasted baguette topped with garlic butter and melted cheese.",
    price: 260, // ₹
    image:
      "https://t3.ftcdn.net/jpg/02/52/38/80/360_F_252388016_KjPnB9vglSCuUJAumCDNbmMzGdzPAucK.jpg",
  },
  {
    _id: "dish2",
    restaurantId: 1,
    name: "Loaded Nachos",
    short_description:
      "Crispy nachos topped with cheese, salsa, jalapeños and sour cream.",
    price: 380,
    image:
      "https://t3.ftcdn.net/jpg/02/52/38/80/360_F_252388016_KjPnB9vglSCuUJAumCDNbmMzGdzPAucK.jpg",
  },
  {
    _id: "dish3",
    restaurantId: 1,
    name: "Grilled Chicken Sandwich",
    short_description:
      "Grilled chicken, lettuce and house sauce in toasted bread.",
    price: 340,
    image:
      "https://t3.ftcdn.net/jpg/02/52/38/80/360_F_252388016_KjPnB9vglSCuUJAumCDNbmMzGdzPAucK.jpg",
  },

  // 🍗 Khyber Restaurant (2) – North Indian / Mughlai
  {
    _id: "dish4",
    restaurantId: 2,
    name: "Murgh Makhani (Butter Chicken)",
    short_description:
      "Tandoori chicken cooked in a rich, buttery tomato gravy.",
    price: 520,
    image:
      "https://t3.ftcdn.net/jpg/02/52/38/80/360_F_252388016_KjPnB9vglSCuUJAumCDNbmMzGdzPAucK.jpg",
  },
  {
    _id: "dish5",
    restaurantId: 2,
    name: "Rogan Josh",
    short_description:
      "Slow-cooked mutton curry with Kashmiri spices and aromatic gravy.",
    price: 580,
    image:
      "https://t3.ftcdn.net/jpg/02/52/38/80/360_F_252388016_KjPnB9vglSCuUJAumCDNbmMzGdzPAucK.jpg",
  },
  {
    _id: "dish6",
    restaurantId: 2,
    name: "Dal Makhani",
    short_description:
      "Creamy black lentils simmered overnight with butter and spices.",
    price: 360,
    image:
      "https://t3.ftcdn.net/jpg/02/52/38/80/360_F_252388016_KjPnB9vglSCuUJAumCDNbmMzGdzPAucK.jpg",
  },
  {
    _id: "dish7",
    restaurantId: 2,
    name: "Garlic Naan",
    short_description:
      "Soft tandoori naan brushed with garlic butter and coriander.",
    price: 120,
    image:
      "https://t3.ftcdn.net/jpg/02/52/38/80/360_F_252388016_KjPnB9vglSCuUJAumCDNbmMzGdzPAucK.jpg",
  },

  // 🥙 Bademiya (3) – Street-food / Kebabs
  {
    _id: "dish8",
    restaurantId: 3,
    name: "Chicken Seekh Kebab",
    short_description:
      "Minced spiced chicken skewers grilled over charcoal.",
    price: 280,
    image:
      "https://t3.ftcdn.net/jpg/02/52/38/80/360_F_252388016_KjPnB9vglSCuUJAumCDNbmMzGdzPAucK.jpg",
  },
  {
    _id: "dish9",
    restaurantId: 3,
    name: "Mutton Boti Kebab",
    short_description:
      "Juicy marinated mutton cubes char-grilled to perfection.",
    price: 340,
    image:
      "https://t3.ftcdn.net/jpg/02/52/38/80/360_F_252388016_KjPnB9vglSCuUJAumCDNbmMzGdzPAucK.jpg",
  },
  {
    _id: "dish10",
    restaurantId: 3,
    name: "Chicken Tikka Roll",
    short_description:
      "Roomali roti stuffed with smoky chicken tikka and chutneys.",
    price: 220,
    image:
      "https://t3.ftcdn.net/jpg/02/52/38/80/360_F_252388016_KjPnB9vglSCuUJAumCDNbmMzGdzPAucK.jpg",
  },
  {
    _id: "dish11",
    restaurantId: 3,
    name: "Paneer Tikka Roll",
    short_description:
      "Grilled paneer tikka wrapped in roti with onions and mint chutney.",
    price: 210,
    image:
      "https://t3.ftcdn.net/jpg/02/52/38/80/360_F_252388016_KjPnB9vglSCuUJAumCDNbmMzGdzPAucK.jpg",
  },

  // 🍷 Masque (4) – Fine dining / Modern Indian
  {
    _id: "dish12",
    restaurantId: 4,
    name: "Seasonal Tasting Menu (Veg)",
    short_description:
      "Multi-course chef’s tasting menu highlighting seasonal Indian produce.",
    price: 3800,
    image:
      "https://t3.ftcdn.net/jpg/02/52/38/80/360_F_252388016_KjPnB9vglSCuUJAumCDNbmMzGdzPAucK.jpg",
  },
  {
    _id: "dish13",
    restaurantId: 4,
    name: "Seasonal Tasting Menu (Non-Veg)",
    short_description:
      "Chef’s curated non-vegetarian tasting menu with modern Indian plates.",
    price: 4200,
    image:
      "https://t3.ftcdn.net/jpg/02/52/38/80/360_F_252388016_KjPnB9vglSCuUJAumCDNbmMzGdzPAucK.jpg",
  },
  {
    _id: "dish14",
    restaurantId: 4,
    name: "Smoked Beetroot Salad",
    short_description:
      "Smoked beetroot with citrus, nuts and herb oil – signature small plate.",
    price: 850,
    image:
      "https://t3.ftcdn.net/jpg/02/52/38/80/360_F_252388016_KjPnB9vglSCuUJAumCDNbmMzGdzPAucK.jpg",
  },

  // 🍛 Mysore Café (5) – South Indian / Udupi
  {
    _id: "dish15",
    restaurantId: 5,
    name: "Masala Dosa",
    short_description:
      "Crispy dosa stuffed with spiced potato, served with chutney and sambar.",
    price: 120,
    image:
      "https://t3.ftcdn.net/jpg/02/52/38/80/360_F_252388016_KjPnB9vglSCuUJAumCDNbmMzGdzPAucK.jpg",
  },
  {
    _id: "dish16",
    restaurantId: 5,
    name: "Idli Sambar",
    short_description:
      "Soft steamed idlis served with hot sambar and coconut chutney.",
    price: 90,
    image:
      "https://t3.ftcdn.net/jpg/02/52/38/80/360_F_252388016_KjPnB9vglSCuUJAumCDNbmMzGdzPAucK.jpg",
  },
  {
    _id: "dish17",
    restaurantId: 5,
    name: "Medu Vada",
    short_description:
      "Crispy lentil fritters served with sambar and chutney.",
    price: 100,
    image:
      "https://t3.ftcdn.net/jpg/02/52/38/80/360_F_252388016_KjPnB9vglSCuUJAumCDNbmMzGdzPAucK.jpg",
  },
  {
    _id: "dish18",
    restaurantId: 5,
    name: "Filter Coffee",
    short_description:
      "Strong South Indian filter coffee served in traditional tumbler.",
    price: 60,
    image:
      "https://t3.ftcdn.net/jpg/02/52/38/80/360_F_252388016_KjPnB9vglSCuUJAumCDNbmMzGdzPAucK.jpg",
  },
];

