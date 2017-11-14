import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

	products=[{title: "Camera", price: 1499.99, image_url: "../../assets/camera.jpeg"}, {title: "Laptop", price: 1299.99, image_url: "../../assets/laptop.jpg"}];

	constructor( ) { }

	delete(idx){
		this.products.splice(idx, 1);
	}

	add(product){
		this.products.push(product);
	}

	update(id, product){
		this.products[id]=product;
	}
}
