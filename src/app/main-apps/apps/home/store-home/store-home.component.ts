import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-home',
  templateUrl: './store-home.component.html',
  styleUrls: ['./store-home.component.scss']
})
export class StoreHomeComponent implements OnInit {

  constructor() { }

  arrayList = [
    {
      store: 'بن داوود',
      percentageOfSalesBetweenStores: '30%',
      sortBySales: '1',
      branchOfStore: 'الشيششة',
      sortByBranchs: '1',
      NumberOfClients: '700,000 عميل',
      productBarcode: '+',
    },
    {
      store: 'بن داوود',
      percentageOfSalesBetweenStores: '30%',
      sortBySales: '1',
      branchOfStore: 'الشيششة',
      sortByBranchs: '1',
      NumberOfClients: '700,000 عميل',
      productBarcode: '+',
    },
    {
      store: 'بن داوود',
      percentageOfSalesBetweenStores: '30%',
      sortBySales: '1',
      branchOfStore: 'الشيششة',
      sortByBranchs: '1',
      NumberOfClients: '700,000 عميل',
      productBarcode: '+',
    },
    {
      store: 'بن داوود',
      percentageOfSalesBetweenStores: '30%',
      sortBySales: '1',
      branchOfStore: 'الشيششة',
      sortByBranchs: '1',
      NumberOfClients: '700,000 عميل',
      productBarcode: '+',
    },
    {
      store: 'بن داوود',
      percentageOfSalesBetweenStores: '30%',
      sortBySales: '1',
      branchOfStore: 'الشيششة',
      sortByBranchs: '1',
      NumberOfClients: '700,000 عميل',
      productBarcode: '+',
    },
    {
      store: 'بن داوود',
      percentageOfSalesBetweenStores: '30%',
      sortBySales: '1',
      branchOfStore: 'الشيششة',
      sortByBranchs: '1',
      NumberOfClients: '700,000 عميل',
      productBarcode: '+',
    },
    {
      store: 'بن داوود',
      percentageOfSalesBetweenStores: '30%',
      sortBySales: '1',
      branchOfStore: 'الشيششة',
      sortByBranchs: '1',
      NumberOfClients: '700,000 عميل',
      productBarcode: '+',
    },
  ]
  ngOnInit(): void {
  }

}
