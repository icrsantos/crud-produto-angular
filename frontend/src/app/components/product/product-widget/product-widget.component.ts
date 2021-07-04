import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
	selector: 'app-product-widget',
	templateUrl: './product-widget.component.html',
	styleUrls: ['./product-widget.component.css']
})
export class ProductWidgetComponent implements OnInit {

	products: Product[];
	displayedColumns = ['id', 'name', 'price', 'action'];

	constructor(private productService: ProductService) { }

	ngOnInit(): void {
		this.productService.read().subscribe((products) => {
			this.products = products;
		});
	}
}
