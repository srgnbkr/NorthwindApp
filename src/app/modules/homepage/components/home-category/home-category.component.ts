import { CategoryService } from './../../../../services/categoryServices/category.service';
import { Category } from './../../../../models/categoryModels/category';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-category',
  templateUrl: './home-category.component.html',
  styleUrls: ['./home-category.component.scss'],
})
export class HomeCategoryComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getListCategory();
  }

  getListCategory() {
    this.categoryService.getAllCategories().subscribe((response) => {
      this.categories=response.data;
    });
  }
}
