import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditComponent implements OnInit {

	product;
	id;

	constructor(private _productService: ProductService, private _router: Router, private _route: ActivatedRoute) {
		this._route.paramMap.subscribe(params=>{
			this.id=params.get("id");
			this.product=_productService.products[this.id];
		})
	}

	ngOnInit() {
	}

	onSubmit(){
		this._productService.update(this.id, this.product);
		this._router.navigateByUrl('products');
	}

	onDelete(){
		this._productService.delete(this.id);
		this._router.navigateByUrl('products');
	}
}
