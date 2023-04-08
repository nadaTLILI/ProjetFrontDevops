import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';
import{environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly API_URL = environment.gatewayurl+'api/product';

  constructor(private httpClient: HttpClient) { }
  getAllProducts() {
    return this.httpClient.get(`${this.API_URL}/`)
  }
  addProduct(product : any) {
    return this.httpClient.post(`${this.API_URL}/`, product)
  }
  editProduct(product : any){
    return this.httpClient.put(`${this.API_URL}/`, product)
  }
  deleteProduct(idProduct : any){
    return  this.httpClient.delete(`${this.API_URL}/${idProduct}`)
  }

}
