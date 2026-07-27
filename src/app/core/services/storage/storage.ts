import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {

  constructor() {}

  setItem<T>(keyName: string, value: T): void {
    localStorage.setItem(keyName, JSON.stringify(value));
  }

  getItem<T>(keyName: string): T | null {
    const value = localStorage.getItem(keyName);
    try {
      return value ? (JSON.parse(value) as T) : null;
    } catch (error) {
      console.error(`Error parsing JSON from localStorage for key "${keyName}":`, error);
      return null;
    }
  }

  removeItem(keyName: string) {
    localStorage.removeItem(keyName);
  }

  clear() {
    localStorage.clear();
  }

}
