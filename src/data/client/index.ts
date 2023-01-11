import axios from "axios";
import {
  Information,
  InformationPaginator,
  LoginUserInput,
  PaginatorRequest,
  PostulationPaginator,
  ProductPaginator,
} from "@interfaces/index";
import { API_ENDPOINTS } from "./endpoints";
import { Http, HttpClient } from "./http-client";
import { UserPaginator } from "../../types/index";

class Client {
  products = {
    all: ({ ...options }: Partial<PaginatorRequest>) =>
      HttpClient.get<ProductPaginator>(API_ENDPOINTS.PRODUCTOS, { ...options }),
  };
  services = {
    all: ({ ...options }: Partial<PaginatorRequest>) =>
      HttpClient.get<any>(API_ENDPOINTS.SERVICIOS, {}),
  };
  features = {
    all: ({ ...options }: Partial<PaginatorRequest>) =>
      HttpClient.get<any>(API_ENDPOINTS.CAREACTERISTICAS, {}),
  };
  informacion = {
    all: ({ ...options }: Partial<PaginatorRequest>) =>
      HttpClient.get<InformationPaginator>(API_ENDPOINTS.INFORMATION, {
        ...options,
      }),
    create: (input: Information) =>
      HttpClient.post<Information>(API_ENDPOINTS.INFORMATION, input),
  };
  postulacion = {
    all: ({ ...options }: Partial<PaginatorRequest>) =>
      HttpClient.get<PostulationPaginator>(API_ENDPOINTS.POSTULATION, {
        ...options,
      }),
    create: (input: any) =>
      HttpClient.post<any>(API_ENDPOINTS.POSTULATION, input),
  };
  user = {
    all: ({ ...options }: Partial<PaginatorRequest>) =>
      Http.get<UserPaginator>(API_ENDPOINTS.USER_ALL, { ...options }),
  };
  auth = {
    login: (input: LoginUserInput) =>
      Http.post<any>(API_ENDPOINTS.USER_LOGIN, input),
    // register: (input: RegisterUserInput) =>
    //   HttpClient.post<AuthResponse>(API_ENDPOINTS.USERS_REGISTER, input),
    // forgotPassword: (input: ForgetPasswordInput) =>
    //   HttpClient.post<PasswordChangeResponse>(
    //     API_ENDPOINTS.USERS_FORGOT_PASSWORD,
    //     input
    //   ),
    // verifyForgotPasswordToken: (input: VerifyForgetPasswordTokenInput) =>
    //   HttpClient.post<PasswordChangeResponse>(
    //     API_ENDPOINTS.USERS_VERIFY_FORGOT_PASSWORD_TOKEN,
    //     input
    //   ),
    // resetPassword: (input: ResetPasswordInput) =>
    //   HttpClient.post<PasswordChangeResponse>(
    //     API_ENDPOINTS.USERS_RESET_PASSWORD,
    //     input
    //   ),
    // changePassword: (input: ChangePasswordInput) =>
    //   HttpClient.post<PasswordChangeResponse>(
    //     API_ENDPOINTS.USERS_CHANGE_PASSWORD,
    //     input
    //   ),
    // logout: () => HttpClient.post<boolean>(API_ENDPOINTS.USERS_LOGOUT, {}),
  };
}

export default new Client();
