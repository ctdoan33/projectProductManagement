import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListComponent implements OnInit {

	products=[];

  constructor(private _productService: ProductService) {
	  this.products=this._productService.products;
  }

  ngOnInit() {
  }

  onDelete(idx){
	  this._productService.delete(idx);
  }
}
