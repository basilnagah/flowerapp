declare type CartItem ={
  product: {
    _id: "673e1cd711599201718280fb";
    id: "673e1cd711599201718280fb";
    title: "Wdding Flower";
    description: "This is a Pack of White Widding Flowers";
    imgCover: "https://flower.elevateegy.com/uploads/fefa790a-f0c1-42a0-8699-34e8fc065812-cover_image.png";
    images: [
      "https://flower.elevateegy.com/uploads/66c36d5d-c067-46d9-b339-d81be57e0149-image_one.png",
      "https://flower.elevateegy.com/uploads/f27e1903-74cf-4ed6-a42c-e43e35b6dd14-image_three.png",
      "https://flower.elevateegy.com/uploads/500fe197-0e16-4b01-9a0d-031ccb032714-image_two.png"
    ];
    price: 440;
    priceAfterDiscount: 100;
    category: "673c46fd1159920171827c85";
    discount: 50;
  };
  price: 440;
  quantity: 4;
  _id: "68058e88a9832d8359e58b4b";
}

declare type CartItems ={
  id: string;
  user: string;
  discount: string;
  totalPrice: string;
  totalPriceAfterDiscount: string;
  cartItems: CartItem[];
}

declare type CartResponse ={
  message: string;
  numOfCartItems: number;
  cart: CartItems;
}
