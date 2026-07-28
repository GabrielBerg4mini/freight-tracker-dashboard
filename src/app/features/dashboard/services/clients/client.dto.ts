import { Client } from "../../models/client";

export interface ClientDto {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  cpf_cnpj: string;
}


export function mapClientDtoToClient(dto: ClientDto): Client {
  return {
    id: dto.id,
    fullName: dto.full_name,
    email: dto.email,
    phone: dto.phone,
    cpfCnpj: dto.cpf_cnpj,
  };
}
