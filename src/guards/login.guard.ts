import { AuthService } from './../app/services/authServices/auth.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { MessageService } from 'primeng/api';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.isAuthenticated().pipe(
      map((response) => {
        return response.success;
      }),
      catchError(() => {
        this.authService.logout();
        this.router.navigate(['/login']);
        this.messageService.add({
          severity: 'info',
          summary: 'Info',
          detail: 'Message Content',
        });
        return of(false);
      })
    );
  }
}
