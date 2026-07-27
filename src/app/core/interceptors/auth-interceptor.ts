import { HttpInterceptorFn } from '@angular/common/http';
import { StorageService } from '../services/storage/storage';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const storage = inject(StorageService);
  const token = storage.getItem<string>('authToken');

  if (token) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    return next(authReq);
  }

  return next(req);
};
