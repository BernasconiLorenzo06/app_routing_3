import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { OpenfoodService } from '../openfood.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  query !: string;
  obsFood !: Observable<Object>;
  results: any;

  
constructor(public cercacibo : OpenfoodService) {}

  submit(query: HTMLInputElement): void {

    if (!query.value) {
      return;
    }

    this.query = query.value;
    this.obsFood = this.cercacibo.searchFood(this.query);
    this.obsFood.subscribe((data) => { this.results = data;});
  }
}