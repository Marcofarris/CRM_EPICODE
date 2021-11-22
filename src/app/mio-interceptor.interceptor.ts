import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MioInterceptorInterceptor implements HttpInterceptor {

  bearerAuth = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTYzNzQ5NjcyOSwiZXhwIjoxNjM4MzYwNzI5fQ.jPUiSJxzaPpYgKMflYC1fsDj9q1WXsV2-0ytwahllTgyXCZGIM1k9-ZxVCgvg-HjHGZ2K-2-g7eU9K0aO77j1w';
  tenantID = 'fe_0421';
  constructor() {}
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    let myRequest: HttpRequest<any> = request;
    myRequest = request.clone(
      {headers: request.headers.set("Authorization", 'Bearer ' + this.bearerAuth)
                    .set("X-TENANT-ID", this.tenantID)
      })
    
    
    return next.handle(myRequest);
  }
}
