export const productData: Array<{
  id: number;
  title: string;
  category: string;
  price: number;
  imageUrl: string;
  description: string;
  sizes: string[];
  colors: string[];
  rating: number;
}> = [
  {
    id: 1,
    title: "Half Sleeve T-Shirt",
    category: "Shirt",
    price: 1140,
    imageUrl: "assets/Product/selling-products1.jpg",
    description: "A comfortable and breathable half-sleeve t-shirt, perfect for casual summer days. Made with premium cotton ensuring durability and a soft touch.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#2d3748", "#e2e8f0"],
    rating: 4.5,
  },
  {
    id: 2,
    title: "Stylish Grey Pant",
    category: "Pant",
    price: 2220,
    imageUrl: "assets/Product/selling-products2.jpg",
    description: "Modern slim-fit trousers designed with flexibility in mind. Ideal for both office settings and weekend outings.",
    sizes: ["30", "32", "34", "36"],
    colors: ["#718096", "#1a202c"],
    rating: 4.2,
  },
  {
    id: 3,
    title: "Silk White Shirt",
    category: "Shirt",
    price: 1599,
    imageUrl: "assets/Product/selling-products3.jpg",
    description: "An elegant white silk shirt with a refined cut. Provides a sophisticated look for evenings out or sharp business casual environments.",
    sizes: ["M", "L", "XL"],
    colors: ["#FDFDFD", "#F2F2F2"],
    rating: 4.8,
  },
  {
    id: 4,
    title: "Grunge Hoodie",
    category: "Hoodie",
    price: 4999,
    imageUrl: "assets/Product/selling-products4.jpg",
    description: "Stay warm in style with this street-wear inspired grunge hoodie. Features ribbed cuffs, an oversized fit, and an ultra-soft fleece interior.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["#171923", "#4A5568", "#E76F51"],
    rating: 4.9,
  },
  {
    id: 5,
    title: "Full Sleeve Jeans Jacket",
    category: "Pant", // Based on the mock data, although it says Pant, but is a jacket. Leaving as Pant to not break filters randomly.
    price: 1999,
    imageUrl: "assets/Product/selling-products5.jpg",
    description: "Classic denim jacket crafted with heavy-duty fibers. Features classic wash tones and rugged brass buttons.",
    sizes: ["M", "L", "XL"],
    colors: ["#3182CE", "#2B6CB0"],
    rating: 4.6,
  },
  {
    id: 6,
    title: "Orange White Nike",
    category: "Shoes",
    price: 3000,
    imageUrl: "assets/Product/selling-products13.jpg",
    description: "Step out with confidence. High-performance sneakers combining vivid orange accents with breathable white mesh.",
    sizes: ["7", "8", "9", "10", "11"],
    colors: ["#ED8936", "#CBD5E0", "#E76F51"],
    rating: 4.7,
  },
];
