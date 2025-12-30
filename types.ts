
export interface User {
  id: string;
  fullName: string;
  email: string;
  createdAt: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export type Category = 'Men' | 'Women' | 'Kids' | 'Featured';

export interface Product {
  id: number;
  name: string;
  category: Category;
  price: number;
  image: string;
  description: string;
}
