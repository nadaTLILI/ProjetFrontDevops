import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FactureService {
  readonly API_URL = environment.gatewayurl+'api/facture';
  

  constructor(private httpClient: HttpClient) { }

  getAllFactures() {
    return this.httpClient.get(`${this.API_URL}/`)
  }
  addFacture(facture : any) {
    return this.httpClient.post(`${this.API_URL}/`, facture)
  }
}
