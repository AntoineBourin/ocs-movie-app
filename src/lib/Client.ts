import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

class Client {
  httpClient: AxiosInstance;

  constructor(baseURL: string = process.env.VUE_APP_OCS_API_URL) {
    this.httpClient = axios.create({
      baseURL,
      timeout: 5000,
    });
  }

  async get(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.httpClient.get(url, config);
  }
}

export default Client;
