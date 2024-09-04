import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { OpenfoodService } from '../openfood.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  routeObs !: Observable<ParamMap>; 
  obsProduct !: Observable<Object>;
  results: any;

  constructor(
    public cercacibo: OpenfoodService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    //Ottengo l'observable che notifica le informazioni sulla route attiva
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }

  //Ogni volta che viene invocata la route product/:id, l'observable richiama questo metodo
  getRouterParam = (params: ParamMap) =>
    {
      let productId = params.get('id') || ''; 
      console.log(productId); 
      this.obsProduct = this.cercacibo.searchProduct(productId);
      this.obsProduct.subscribe((data) => { this.results = data; console.log(this.results)});
    }

    back() : void
    {

    }
}