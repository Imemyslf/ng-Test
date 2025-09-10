export interface ProductType {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string;
    image: string;
    slug: string;
    creationAt: string;
    updatedAt: string;
  };
  images: string[];
  creationAt: string;
  updatedAt: string;
}


export interface ProductItemTypeIn {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  brand?: string;
  model?: string;
  color?: string;
  category: string;
  discount?: number;
}

export interface ProductItemTypeCom {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

// {
//     "id": 1,
//     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     "price": 109.95,
//     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
//     "rating": {
//       "rate": 3.9,
//       "count": 120
//     }

// {
//       "id": 1,
//       "title": "Sony WH-1000XM3 Bluetooth Wireless Over Ear Headphones with Mic (Silver)",
//       "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg",
//       "price": 773,
//       "description": "Digital noise cancelling : Industry leading Active Noise Cancellation (ANC) lends a personalized, virtually soundproof experience at any situation\r\nHi-Res Audio : A built-in amplifier integrated in HD Noise Cancelling Processor QN1 realises the best-in-class signal-to-noise ratio and low distortion for portable devices.\r\nDriver Unit : Powerful 40-mm drivers with Liquid Crystal Polymer (LCP) diaphragms make the headphones perfect for handling heavy beats and can reproduce a full range of frequencies up to 40 kHz.\r\nVoice assistant : Alexa enabled (In-built) for voice access to music, information and more. Activate with a simple touch. Frequency response: 4 Hz-40,000 Hz",
//       "brand": "sony",
//       "model": "WH-1000XM3",
//       "color": "silver",
//       "category": "audio",
//       "discount": 11
//   },