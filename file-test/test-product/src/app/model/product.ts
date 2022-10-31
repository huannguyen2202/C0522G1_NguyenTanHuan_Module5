import {Category} from './category';

export interface Product {
  id?: number;
  productName?: string;
  productPrice?: string;
  productDescription?: string;
  category?: Category;
}
