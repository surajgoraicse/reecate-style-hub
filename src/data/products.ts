export interface Product {
  id: string;
  name: string;
  category: "men" | "kids";
  price: number;
  image: string;
  description: string;
  occasion: "casual" | "everyday" | "playwear" | "outing";
  variants: {
    sizes: string[];
    colors: string[];
  };
}

export const products: Product[] = [
  {
    id: "1",
    name: "Classic Cotton Tee",
    category: "men",
    price: 2499,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800",
    description: "Premium cotton t-shirt with a perfect fit for everyday comfort.",
    occasion: "everyday",
    variants: {
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["White", "Black", "Navy", "Gray"],
    },
  },
  {
    id: "2",
    name: "Luxury Linen Shirt",
    category: "men",
    price: 4999,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800",
    description: "Breathable linen shirt perfect for casual outings.",
    occasion: "outing",
    variants: {
      sizes: ["S", "M", "L", "XL"],
      colors: ["White", "Beige", "Light Blue"],
    },
  },
  {
    id: "3",
    name: "Casual Chinos",
    category: "men",
    price: 3999,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800",
    description: "Versatile chinos that blend comfort with style.",
    occasion: "casual",
    variants: {
      sizes: ["30", "32", "34", "36", "38"],
      colors: ["Khaki", "Navy", "Olive", "Gray"],
    },
  },
  {
    id: "4",
    name: "Premium Polo Shirt",
    category: "men",
    price: 3499,
    image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=800",
    description: "Classic polo design with modern fit.",
    occasion: "casual",
    variants: {
      sizes: ["S", "M", "L", "XL"],
      colors: ["White", "Navy", "Burgundy", "Forest Green"],
    },
  },
  {
    id: "5",
    name: "Kids Cotton Tee",
    category: "kids",
    price: 1299,
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=800",
    description: "Soft and comfortable tee for everyday play.",
    occasion: "everyday",
    variants: {
      sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y"],
      colors: ["White", "Blue", "Red", "Yellow"],
    },
  },
  {
    id: "6",
    name: "Kids Playful Shorts",
    category: "kids",
    price: 1499,
    image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=800",
    description: "Comfortable shorts perfect for active play.",
    occasion: "playwear",
    variants: {
      sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
      colors: ["Navy", "Khaki", "Gray"],
    },
  },
  {
    id: "7",
    name: "Kids Casual Hoodie",
    category: "kids",
    price: 2299,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800",
    description: "Cozy hoodie for casual outings and cooler days.",
    occasion: "outing",
    variants: {
      sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y"],
      colors: ["Gray", "Navy", "Black", "Red"],
    },
  },
  {
    id: "8",
    name: "Kids Denim Jeans",
    category: "kids",
    price: 1999,
    image: "https://images.unsplash.com/photo-1475178626620-a4d074967452?w=800",
    description: "Durable denim jeans for everyday adventures.",
    occasion: "everyday",
    variants: {
      sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y"],
      colors: ["Blue", "Black"],
    },
  },
  {
    id: "9",
    name: "Formal Dress Shirt",
    category: "men",
    price: 4499,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800",
    description: "Crisp dress shirt perfect for formal occasions and office wear.",
    occasion: "outing",
    variants: {
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["White", "Light Blue", "Pink", "Lavender"],
    },
  },
  {
    id: "10",
    name: "Comfortable Joggers",
    category: "men",
    price: 2999,
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800",
    description: "Soft joggers for relaxed everyday comfort.",
    occasion: "casual",
    variants: {
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Gray", "Black", "Navy", "Olive"],
    },
  },
  {
    id: "11",
    name: "Athletic Performance Tee",
    category: "men",
    price: 2799,
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800",
    description: "Moisture-wicking athletic shirt for active lifestyles.",
    occasion: "casual",
    variants: {
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Navy", "Red", "Neon Green"],
    },
  },
  {
    id: "12",
    name: "Classic Denim Jacket",
    category: "men",
    price: 5499,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800",
    description: "Timeless denim jacket that pairs with everything.",
    occasion: "outing",
    variants: {
      sizes: ["S", "M", "L", "XL"],
      colors: ["Blue", "Black", "Light Blue"],
    },
  },
  {
    id: "13",
    name: "Kids Graphic Tee",
    category: "kids",
    price: 1399,
    image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=800",
    description: "Fun graphic tee with colorful designs kids will love.",
    occasion: "casual",
    variants: {
      sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y"],
      colors: ["White", "Gray", "Navy", "Red"],
    },
  },
  {
    id: "14",
    name: "Kids Active Tracksuit",
    category: "kids",
    price: 2999,
    image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=800",
    description: "Complete tracksuit set for active play and sports.",
    occasion: "playwear",
    variants: {
      sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y"],
      colors: ["Navy", "Black", "Gray", "Red"],
    },
  },
  {
    id: "15",
    name: "Kids Cozy Sweater",
    category: "kids",
    price: 2499,
    image: "https://images.unsplash.com/photo-1519689373023-dd07c7988603?w=800",
    description: "Warm and comfortable sweater for cooler weather.",
    occasion: "everyday",
    variants: {
      sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y"],
      colors: ["Red", "Navy", "Gray", "Cream"],
    },
  },
  {
    id: "16",
    name: "Kids Cargo Pants",
    category: "kids",
    price: 1799,
    image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=800",
    description: "Practical cargo pants with multiple pockets for adventure.",
    occasion: "playwear",
    variants: {
      sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y"],
      colors: ["Khaki", "Olive", "Navy", "Gray"],
    },
  },
];
