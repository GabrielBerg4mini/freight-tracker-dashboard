import { Freight } from "../../models/freight";

export interface FreightDto {
  id: string;
  product_name: string;
  buyer_name: string;
  product_image: string;
  created_at: string;
  address: {
    zip_code: string;
    street: string;
    neighborhood: string;
    state: string;
    city: string;
    number: string;
    address_complete: string;
  };
}


export function mapFreightDtoToFreight(dto: FreightDto): Freight {
  return {
    id: dto.id,
    productName: dto.product_name,
    buyerName: dto.buyer_name,
    productImage: dto.product_image,
    createdAt: dto.created_at,
    completAddress: dto.address.address_complete
  };
}
