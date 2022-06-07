import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalstorageService {
  isLocalStorageSupported!: boolean;
  localStorage!: Storage;

  constructor() {
    this.isLocalStorageSupported =
      typeof window['localStorage'] != 'undefined' &&
      window['localStorage'] != null;
    if (this.isLocalStorageSupported) this.localStorage = window.localStorage;
  }

  // Get the value of a key from local storage
  get<T>(key: string): T | null {
    if (!this.isLocalStorageSupported) return null;

    let item: string | null = this.localStorage.getItem(key);
    let result: T | null = item ? JSON.parse(item) : null;
    return result;
  }

  //Set the value of a key in local storage
  set(key: string, value: any) {
    if (!this.isLocalStorageSupported) return;

    this.localStorage.setItem(key, JSON.stringify(value));
  }

  //Remove a key from local storage
  remove(key: string) {
    if (!this.isLocalStorageSupported) return;

    this.localStorage.removeItem(key);
  }
}
