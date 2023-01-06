import type { NextPage } from "next";
import type { ReactElement, ReactNode } from "react";

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  authorization?: boolean;
  getLayout?: (page: ReactElement) => ReactNode;
};

export interface ApiResponse<T> {
  statusCode: number;
  message: string;
  data: T[];
  pagination: PaginatorResponse;
}
export interface ApiPaginationResponse<T> {
  statusCode: number;
  message: string;
  data: T[];
  pagination: PaginatorResponse;
}

export interface PaginatorRequest {
  order?: string;
  page?: number;
  take?: number;
}
interface PaginatorResponse {
  page?: number;
  take?: number;
  itemCount?: number;
  pageCount?: number;
  hasPreviousPage?: boolean;
  hasNextPage?: boolean;
}

export interface Perfil extends BaseEntity {
  nombre: string;
}

export interface PerfilPaginator extends ApiPaginationResponse<Perfil> {}

export interface User extends BaseEntity {
  nombres: string;
  apellidos: string;
  email: string;
  password: string;
  telefono: string;
  perfil: Perfil;
}

export interface UserPaginator extends ApiPaginationResponse<User> {}

export interface ChangePasswordInput {
  oldPassword: string;
  newPassword: string;
}

export interface ContactInput {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
}
export interface LoginUserInput {
  email: string;
  password: string;
}
export interface RegisterUserInput {
  name: string;
  email: string;
  password: string;
}
export interface ForgetPasswordInput {
  email: string;
}
export interface ResetPasswordInput {
  token: string;
  email: string;
  password: string;
}
export interface VerifyForgetPasswordTokenInput {
  token: string;
  email: string;
}

export interface PasswordChangeResponse {
  success: boolean;
  message: string;
}

interface BaseEntity {
  id?: string;
  active?: boolean;
  createdAt?: Date;
  createdBy?: string;
}

export interface Empleo extends BaseEntity {
  nombre: string;
  descripcion: string;
}

export interface TipoDocumento extends BaseEntity {
  nombre: string;
  descripcion: string;
}

export interface Product extends BaseEntity {
  nombre: string;
  descripcion: string;
}

export interface ProductPaginator extends ApiPaginationResponse<Product> {}

export interface Information extends BaseEntity {
  nombres: string;
  apellidos: string;
  email: string;
  celular: string;
  departamento: string;
  provincia: string;
  distrito: string;
  direccion: string;
}

export interface InformationPaginator
  extends ApiPaginationResponse<Information> {}

export interface Postulation extends BaseEntity {
  nombres: string;
  apellidos: string;
  documento: string;
  email: string;
  experiencia: string;
  empleo: Empleo;
  tipo_documento: TipoDocumento;
}

export interface PostulationPaginator
  extends ApiPaginationResponse<Postulation> {}
