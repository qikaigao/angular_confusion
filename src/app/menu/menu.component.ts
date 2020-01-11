import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
// import { DISHES } from '../shared/dishes';
import { DishService } from '../services/dish.service';
import { inject } from '@angular/core/testing';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  dishes: Dish[];
  errMess: string;

  // this should be write like that. We cannot declare the disService in the typical way.
  constructor(private dishService: DishService,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.dishService.getDishes().subscribe((dishes) => this.dishes = dishes,
      errMess => this.errMess = <any>errMess);
  }

}
