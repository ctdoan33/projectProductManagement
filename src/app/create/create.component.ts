import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ProductService } from '../product.service';

import { Product } from './../product';

import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CreateComponent implements OnInit {

	product=new Product;

  constructor(private _productService: ProductService, private _router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
	this._productService.add(this.product);
	this.product=new Product;
	this._router.navigateByUrl('products');
  }
}
