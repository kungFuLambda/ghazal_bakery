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
  // Bite-sized cakes
  {
    id: 1,
    name: "Emerald Apple",
    description:
      "Apple mousse, vanilla sponge, soft caramel, creamy apple curd, on a bed of a pecan cinnamon shortcrust, topped with a smooth whipped white chocolate ganache",
    longDescription:
      "Apple mousse, vanilla sponge, soft caramel, creamy apple curd, on a bed of a pecan cinnamon shortcrust, topped with a smooth whipped white chocolate ganache. A perfect balance of fruity sweetness and nutty crunch.",
    price: 3.5,
    images: ["/images/apple.jpeg"],
    category: "Bite-sized cakes",
  },
  {
    id: 2,
    name: "Island Pistachio",
    description:
      "Pistachio Frangipane topped with a silky pistachio ganache in a crunchy tart, topped with an exotic whipped coconut ganache & elderflowers",
    longDescription:
      "Pistachio Frangipane topped with a silky pistachio ganache in a crunchy tart, topped with an exotic whipped coconut ganache & elderflowers. A tropical escape in every bite.",
    price: 4.25,
    images: ["/images/flower.jpeg"],
    category: "Bite-sized cakes",
  },
  {
    id: 3,
    name: "Floating Raspberry",
    description:
      "Crunchy meringue floats topped with raspberry ganache, rich chocolate sponge, butter biscuit, white chocolate ganache, decorated with candied hazelnuts",
    longDescription:
      "Crunchy meringue floats topped with raspberry ganache, rich chocolate sponge, butter biscuit, white chocolate ganache, decorated with candied hazelnuts. A delightful combination of textures and flavors.",
    price: 3.5,
    images: ["/images/berries.jpeg"],
    category: "Bite-sized cakes",
  },
  {
    id: 4,
    name: "Reinvented Mango Sticky Rice",
    description:
      "Mango crispy sticky rice, mango cake and a luscious mango milk jam, covered with a creamy coconut mousse and coconut jelly sheet",
    longDescription:
      "Mango crispy sticky rice, mango cake and a luscious mango milk jam, covered with a creamy coconut mousse and coconut jelly sheet. A modern twist on the beloved Thai classic.",
    price: 4.0,
    images: ["/images/mango.jpeg"],
    category: "Bite-sized cakes",
  },
  // Cakes (For 10-12 people)
  {
    id: 5,
    name: "Choco Passion Cake",
    description:
      "Chocolate sponge, crispy chocolate, passionfruit curd and a perfect combination of sweet and sour milk chocolate and passionfruit mousse",
    longDescription:
      "Chocolate sponge, crispy chocolate, passionfruit curd and a perfect combination of sweet and sour milk chocolate and passionfruit mousse. Serves 10-12 people. Perfect for celebrations.",
    price: 23.0,
    images: ["/images/chocolate.jpeg"],
    category: "Cakes",
  },
  {
    id: 6,
    name: "Berry Bliss Cake",
    description:
      "A fusion of mixed berries; Vanilla sponge, raspberry crispy ganache, mixed berried marmalade and a silky strawberry mousse",
    longDescription:
      "A fusion of mixed berries; Vanilla sponge, raspberry crispy ganache, mixed berried marmalade and a silky strawberry mousse. Serves 10-12 people. A berry lover's dream.",
    price: 27.0,
    images: ["/images/paint.jpeg"],
    category: "Cakes",
  },
];

export const getProductById = (id: number): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter((product) => product.category === category);
};
