import { API_ENDPOINTS } from "./endpoints";
import { HttpClient } from "./http-client";

class Client {
  departamentos = {
    all: () => HttpClient.get<any>(API_ENDPOINTS.DEPARTMENTS, {}),
  };
  provincias = {
    all: () => HttpClient.get<any>(API_ENDPOINTS.PROVINCIAS, {}),
  };
  distritos = {
    all: () => HttpClient.get<any>(API_ENDPOINTS.DISTRITOS, {}),
  };
  products = {
    all: () => HttpClient.get<any>(API_ENDPOINTS.PRODUCTS, {}),
  };
  services = {
    all: () => HttpClient.get<any>(API_ENDPOINTS.SERVICES, {}),
  };
}

export default new Client();
