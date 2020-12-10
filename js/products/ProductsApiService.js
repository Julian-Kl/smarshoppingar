class BaseApi {
  _baseUrl = 'https://team5.uber.space';

  async get(url) {
    const response = await fetch(url);
    return response.json();
  }
}

export class ProductsApiService extends BaseApi {
  productsUrl = `${this._baseUrl}/products`;

  getAllProducts() {
    return this.get(this.productsUrl);
  }
}
