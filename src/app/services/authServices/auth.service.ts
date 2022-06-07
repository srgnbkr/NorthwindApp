import { TokenModel } from './../../models/authModels/tokenModel';
import { SingleResponseModel } from './../../models/base/singleResponseModel';
import { LoginModel } from './../../models/authModels/loginModel';
import { map, Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';

import { LocalstorageService } from '../localStorageServices/localstorage.service';
import { UserDetail } from 'src/app/models/usersModels/userDetail';
import {
  deleteUserDetail,
  setUserDetail,
} from 'src/app/store/auth/auth.actions';
import { ResponseModel } from 'src/app/models/base/responseModel';
import { RegisterModel } from 'src/app/models/authModels/registerModel';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl: string = `${environment.apiUrl}/auth`;

  userDetail$: Observable<UserDetail | undefined> = this.store
    .select((s) => s.appAuth)
    .pipe(map((b) => b.userDetail));

  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalstorageService,
    private store: Store<AppState>
  ) {}

  login(loginModel: LoginModel): Observable<SingleResponseModel<TokenModel>> {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(
      `${this.apiUrl}/login`,
      loginModel
    );
  }

  register(
    registerModel: RegisterModel
  ): Observable<SingleResponseModel<TokenModel>> {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(
      `${this.apiUrl}/register`,
      registerModel
    );
  }

  logout() {
    this.localStorageService.remove('tokenModel');
    this.localStorageService.remove('userMail');
    this.deleteUserDetail();
  }

  isAuthenticated(
    userMail?: string | null,
    requiredRoles?: string[]
  ): Observable<ResponseModel> {
    return this.httpClient.get<ResponseModel>(
      `${this.apiUrl}/isauthenticated`,
      {
        params:
          userMail && requiredRoles
            ? {
                userMail: userMail,
                requiredRoles: requiredRoles.join(','),
              }
            : {},
      }
    );
  }

  setUserDetail(userDetail: UserDetail) {
    this.store.dispatch(setUserDetail({ userDetail: userDetail }));
  }

  deleteUserDetail() {
    this.store.dispatch(deleteUserDetail());
  }
}
