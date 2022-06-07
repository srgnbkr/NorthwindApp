import { TokenModel } from './../app/models/authModels/tokenModel';
import { LocalstorageService } from './../app/services/localStorageServices/localstorage.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private localStorageService:LocalstorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {


      let tokenModel:TokenModel | null = this.localStorageService.get<TokenModel>(
        'tokenModel '
      );


      // add authorization header with jwt token if available
      let newRequest: HttpRequest<any> = request.clone({
        headers: request.headers.set(
          'Authorization',
          `Bearer ${tokenModel?.token}`
        ),
      });


    return next.handle(newRequest);
  }
}
