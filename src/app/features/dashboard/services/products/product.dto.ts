import { Product } from "../../models/product";

export interface ProductDto {
  id: string;
  product_name: string;
  product_image: string;
  description: string;
  price: number;
}

export function mapProductDtoToProduct(dto: ProductDto): Product {
  return {
    id: dto.id,
    productName: dto.product_name,
    productImage: dto.product_image,
    description: dto.description,
    price: dto.price,
  };
}
