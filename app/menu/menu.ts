export interface Product {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  images: string[];
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Chocolate Croissant",
    description: "Buttery croissant filled with premium Belgian chocolate",
    longDescription:
      "Our signature chocolate croissant is made with imported French butter and premium Belgian chocolate. Each croissant is hand-rolled and laminated to create 81 delicate layers of flaky perfection. The rich chocolate center melts perfectly when warmed, creating an indulgent breakfast or afternoon treat.",
    price: 4.5,
    images: ["/images/croissant.jpg", "/images/glaze.jpg", "/images/glaze2.jpg"],
    category: "Pastries",
  },
  {
    id: 2,
    name: "Glazed Donut",
    description: "Fresh glazed donut with our signature glaze",
    longDescription:
      "Our classic glazed donut features a light, airy dough that's fried to golden perfection and dipped in our house-made vanilla glaze. Made fresh every morning, these donuts have a delicate crunch on the outside and a pillowy soft interior that melts in your mouth.",
    price: 3.25,
    images: ["/images/glaze.jpg", "/images/croissant.jpg", "/images/glaze2.jpg"],
    category: "Donuts",
  },
  {
    id: 3,
    name: "Artisan Sourdough",
    description: "Handcrafted sourdough bread with crispy crust",
    longDescription:
      "Our artisan sourdough is crafted using a 25-year-old starter, giving it a complex tangy flavor and chewy texture. The long fermentation process develops deep flavors while creating the signature open crumb structure. Perfect for sandwiches, toast, or simply enjoyed with quality butter.",
    price: 8.0,
    images: ["/images/glaze2.jpg", "/images/croissant.jpg", "/images/glaze.jpg"],
    category: "Breads",
  },
  {
    id: 4,
    name: "Almond Croissant",
    description: "Flaky croissant filled with sweet almond cream",
    longDescription:
      "A decadent twist on the classic croissant, filled with our house-made almond frangipane cream and topped with sliced almonds. Each croissant is brushed with simple syrup and baked until the almonds are perfectly toasted. The combination of buttery layers and nutty sweetness is irresistible.",
    price: 5.0,
    images: ["/images/croissant.jpg", "/images/glaze2.jpg", "/images/glaze.jpg"],
    category: "Pastries",
  },
  {
    id: 5,
    name: "Chocolate Éclair",
    description: "Classic French éclair with chocolate glaze",
    longDescription:
      "Our chocolate éclair features a perfectly baked choux pastry filled with silky vanilla pastry cream and topped with a glossy dark chocolate ganache. Each éclair is made to order to ensure the pastry stays crisp and the filling remains fresh and creamy.",
    price: 4.75,
    images: ["/images/glaze.jpg", "/images/glaze2.jpg", "/images/croissant.jpg"],
    category: "Pastries",
  },
  {
    id: 6,
    name: "Cinnamon Roll",
    description: "Warm cinnamon roll with cream cheese frosting",
    longDescription:
      "Our cinnamon rolls are made with a soft, enriched dough swirled with Ceylon cinnamon and brown sugar. Baked until golden and topped with a generous layer of tangy cream cheese frosting. Best enjoyed warm from the oven – we can heat one up for you!",
    price: 3.75,
    images: ["/images/glaze2.jpg", "/images/glaze.jpg", "/images/croissant.jpg"],
    category: "Pastries",
  },
];

export const getProductById = (id: number): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter((product) => product.category === category);
};
