import { environment } from './../../../environments/environment';
import { Category } from './../../models/categoryModels/category';
import { ListResponseModel } from './../../models/base/listResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  apiUrl: string = `${environment.apiUrl}/categories`;

  constructor(private httpClient: HttpClient) {}

  getAllCategories(): Observable<ListResponseModel<Category>> {
    return this.httpClient.get<ListResponseModel<Category>>(
      `${this.apiUrl}/getall`
    );
  }
}
