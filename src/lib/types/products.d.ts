/* eslint-disable @typescript-eslint/no-explicit-any */
declare type Products = {
  _id: string;
  title: string;
  slug: string;
  description: string;
  imgCover: string;
  images: [];
  price: number;
  priceAfterDiscount: number;
  quantity: number;
  category: string;
  occasion: string;
  discount: number;
  sold: number;
  rateAvg: number;
  rateCount: number;
  id: string;
};

declare type productResponse = {
  filter(arg0: (product: Product) => any): unknown;
  message: string;
  metadata: {
    currentPage: number;
    totalPages: number;
    limit: number;
    totalItems: number;
  };
  products: Products[];
};

declare type ProductDetails = {
  message: string;
  product: Products;
};

declare type CartDetails = {
  message: "success";
  numOfCartItems: number;
  cart: {
    _id: string;
    user: string;
    cartItems: [
      {
        product: {
          rateAvg: number;
          rateCount: number;
          _id: string;
          title: string;
          slug: string;
          description: string;
          imgCover: string;
          images: [];
          price: number;
          priceAfterDiscount: number;
          quantity: number;
          category: string;
          occasion: string;
          __v: number;
          discount: number;
          sold: number;
          id: string;
        };
        price: number;
        quantity: number;
        _id: string;
      }
    ];
    discount: 50;
    totalPrice: 1099;
    totalPriceAfterDiscount: 549.5;
    createdAt: "2025-04-20T14:15:52.965Z";
    updatedAt: "2025-04-20T14:15:52.965Z";
    __v: 0;
  };
};
