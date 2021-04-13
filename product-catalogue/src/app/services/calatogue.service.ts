import { Injectable } from '@angular/core';
import { Catalogue } from '../models/data.model';

@Injectable({
  providedIn: 'root'
})
export class CalatogueService {

  constructor() { }

  public _data: Catalogue[] = [
    {id: 11111,name: 'MAC BOOK AIR', category: 'Laptops', price: '12', quantity: '10'},
    {id: 22222,name: 'HP PROBOOK G7', category: 'Laptops', price: '12', quantity: '10'},
    {id: 33333,name: 'DELL RAIZEN 7', category: 'Gaming PC', price: '11', quantity: '10'},
    {id: 44444,name: 'PS4 Exclusive Bundle', category: 'PS4', price: '333', quantity: '10'},
    {id: 55555,name: 'AASSASIN CREED VALHALLA', category: 'Gaming CDs', price: '32', quantity: '10'},
  ];;

  public getData(): Catalogue[] {
    return this._data;
  }

  public getCatalogue(catId: number): Catalogue {
    const result = this._data.find( ({ id }) => id === catId );
    if (!!result) {
      return result;
    } else {
      return {id: 0,name: '', category: '', price: '', quantity: ''};
    }

  }

  public postData(data: Catalogue, operationType: string) {
    if (operationType === 'ADD') {
      let idGenerator = new Date();
      data.id = idGenerator.getTime();
      this._data.push(data);
    } else if(this.checkProduct(data, operationType)) {
      switch(operationType) {
        case 'EDIT':
          this.editData(data);
          break;
        case 'DELETE':
          this.deleteData(data);
          break;
        default:

      }
    }
  }

  private checkProduct(data: Catalogue, operation: string): Boolean {
    const result = this._data.find( ({ id }) => id === data.id );
    return !!result;
  }

  private editData(data: Catalogue) {
    this._data.forEach(mainData => {
      if (mainData.id === data.id) {
        mainData = data;
      }
    })
  }

  private deleteData(data: Catalogue) {
    let index = 0;
    if(this._data.length > 0) {
      this._data.forEach((arrayData, ind) => {
        if (arrayData.id === data.id) {
          index = ind;
        }
      });
      this._data.splice(index, 1);
      console.log(this._data);
    }

  }




}
