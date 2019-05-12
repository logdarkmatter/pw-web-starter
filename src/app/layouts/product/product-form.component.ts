import {Component, OnInit, OnDestroy} from '@angular/core';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {Subscription} from 'rxjs';
import {ProductService} from './product.service';
import {IProduct, Product} from './';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product.scss'],
})
export class ProductFormComponent implements OnInit, OnDestroy {
  public product: IProduct;
  constructor(private pproductService: ProductService) {}

  public ngOnInit() {
    this.product = new Product();
    this.pproductService.getAll().subscribe(res => {
      this.product = res[0];
    });
  }

  public ngOnDestroy() {}

  public saveProduct() {
    if (this.product.id === undefined) {
      this.pproductService.create(this.product).subscribe(res => {
        this.product = res;
      });
    } else {
      this.pproductService.update(this.product).subscribe(res => {
        this.product = res;
      });
    }
  }
}
