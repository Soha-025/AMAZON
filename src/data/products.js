const products = [
  {
    id: 1,
    title: "Sneakers",
    price: 45000,
    discount: false,
    category: "Shoes",
    image: "https://i.pinimg.com/736x/a3/75/a7/a375a720ef3ad8e1eed25b9decaca4b9.jpg",
    description: "Comfortable running shoes with breathable material."
  },
  {
    id: 2,
    title: "Necklace",
    price: 1400,
    discount: false,
    category: "Jewellery",
    image: "https://i.pinimg.com/1200x/75/39/1d/75391d40daa4d16f964b83431d7ad4a7.jpg",
    description: "Elegant jewellery piece for special occasions."
  },
  {
    id: 3,
    title: "Smart Watch",
    price: 12000,
    discount: true,
    category: "Smart Devices",
    image: "https://i.pinimg.com/736x/74/a6/3f/74a63f2a28a3e8c330faab4e93312883.jpg",
    description: "Track your fitness and stay connected."
  },
  {
    id: 4,
    title: "Garden Tool Set",
    price: 8700,
    discount: true,
    category: "Gardening",
    image: "https://i.pinimg.com/736x/87/d2/ab/87d2aba78fcbcf25f181fd54ebcbf9c0.jpg",
    description: "Essential gardening tools for home use."
  },
  {
    id: 5,
    title: "Cotton T-Shirt",
    price: 2500,
    discount: false,
    category: "Clothes",
    image: "https://i.pinimg.com/1200x/d3/ec/95/d3ec95e4f6333e110ae131dabde89856.jpg",
    description: "Soft and comfortable cotton t-shirt."
  },
  {
    id: 6,
    title: "Non-stick Frying Pan",
    price: 3800,
    discount: true,
    category: "Kitchen Utilities",
    image: "https://i.pinimg.com/736x/27/15/15/271515cc7aa2cafdb813e01cba8091d7.jpg",
    description: "Durable non-stick pan for easy cooking."
  },
  {
    id: 7,
    title: "Cleanser",
    price: 2300,
    discount: false,
    category: "SkinCare",
    image: "https://i.pinimg.com/736x/a0/f2/f0/a0f2f026aae8798bcc72f18617915e41.jpg",
    description: "Moisturizing cream for healthy skin."
  },
   {
    id: 8,
    title: "Blender Machine",
    category: "Kitchen Utilities",   
    price: 4500,
    discount: true,
    image: "https://i.pinimg.com/736x/01/80/63/01806344932777f5a8399cade2f33b1f.jpg",
    description: "Powerful blender machine for smoothies and shakes."
  },
  {
    id: 9,
    title: "Smart Watch",
    category: "smart-devices",
    price: 12000,
    discount: false,
    image: "https://i.pinimg.com/736x/17/df/34/17df34766079f05e50c74be3d6491248.jpg",
    description: "Smart watch with fitness tracking and notifications."
  },
    {
    id: 10,
    title: "SweatShirt",
    price: 2800,
    discount: false,
    category: "Clothes",
    image: "https://i.pinimg.com/1200x/8e/a7/2c/8ea72c2182893d56f1137ade964d51a3.jpg",
    description: "Soft and comfortable cotton t-shirt."
  },
   {
    id: 11,
    title: "Kitten Heels",
    price: 9000,
    discount: false,
    category: "Shoes",
    image: "https://i.pinimg.com/1200x/64/66/e0/6466e05f0878e3d69a0870aa019e7e05.jpg",
    description: "Comfortable running shoes with breathable material."
  },
  {
    id: 12,
    title: "Ring",
    price: 4000,
    discount: false,
    category: "Jewellery",
    image: "https://i.pinimg.com/736x/6f/31/a1/6f31a1fe84eb299cc361db955fc753a8.jpg",
    description: "Elegant jewellery piece for special occasions."
  },
  {
    id: 13,
    title: "Ordinary Hyaluronic Acid",
    price: 3200,
    discount: false,
    category: "SkinCare",
    image: "https://i.pinimg.com/1200x/dc/65/f0/dc65f05827e6c364fa0e035c9f0f2073.jpg",
    description: "Moisturizing cream for healthy skin."
  }
];

export default products;
