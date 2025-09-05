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

export interface CategoryType {
  id: number;
  name: string;
  slug: string;
  image: string;
  creationAt?: string;
  updatedAt?: string;
}
