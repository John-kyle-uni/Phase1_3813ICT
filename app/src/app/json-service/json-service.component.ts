import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class JsonServiceComponent {
  jsonItems: any = {};

  setItem(key: string, item: any): void {  
    this.jsonItems[key] = item;
  }

  getItem(key: string): any {  
    return this.jsonItems[key];
  }
}
