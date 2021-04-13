import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogue-list',
  templateUrl: './catalogue-list.component.html',
  styleUrls: ['./catalogue-list.component.css']
})
export class CatalogueListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'category', 'price', 'quantity'];
  dataSource = _DATA;
  constructor() { }

  ngOnInit(): void {
  }

  

}

export interface Catalogue {
  name: string;
  category: string;
  quantity: number;
  price: string;
}

const _DATA: Catalogue[] = [
  {name: 'Hydrogen', category: 'apparels', price: '12', quantity: 10},
  {name: 'Helium', category: 'apparels', price: '12', quantity: 10},
  {name: 'Lithium', category: 'apparels', price: '11', quantity: 10},
  {name: 'Beryllium', category: 'apparels', price: '333', quantity: 10},
  {name: 'Boron', category: 'apparels', price: '32', quantity: 10},
  {name: 'Carbon', category: 'apparels', price: '21', quantity: 10},
  {name: 'Nitrogen', category: 'apparels', price: '21', quantity: 10},
  {name: 'Oxygen', category: 'apparels', price: '34', quantity: 10},
  {name: 'Fluorine', category: 'apparels', price: '43', quantity: 10},
  { name: 'Neon', category: 'apparels', price: '89', quantity: 10},
];

