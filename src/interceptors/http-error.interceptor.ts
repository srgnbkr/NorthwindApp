import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { MessageService } from 'primeng/api';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private messageService: MessageService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((responseError: HttpErrorResponse) => {
        if (responseError.error.Errors && responseError.error.Errors.length > 0)
          responseError.error.Errors.forEach((error: any) =>
            this.messageService.add({
              severity: 'warn',
              summary: 'Warn',
              detail: responseError.error.message,
            })
          );
        else if (responseError.error.message)
          this.messageService.add({
            severity: 'warn',
            summary: 'Warn',
            detail: responseError.error.message,
          });
        else
          this.messageService.add({
            severity: 'warn',
            summary: 'Warn',
            detail: responseError.error.message,
          });

        return throwError(responseError);
      })
    );
  }
}
