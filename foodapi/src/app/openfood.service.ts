import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OpenfoodService {

  constructor(private http: HttpClient) { }
  searchFood(query: string) {
    const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&page_size=5&json=true`; 
    let obsFood = this.http.get(url);
    console.log(obsFood)
    return obsFood;}

    searchProduct(id: string) {
      const url = `https://world.openfoodfacts.org/api/v0/product/${id}`;
      let obsProduct = this.http.get(url);
      console.log(obsProduct);
      return obsProduct;
}
}