import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-store-home',
  templateUrl: './store-home.component.html',
  styleUrls: ['./store-home.component.scss']
})
export class StoreHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    type EChartsOption = echarts.EChartsOption;

    var chartDom = document.getElementById('main')!;
    var myChart = echarts.init(chartDom);
    var option: EChartsOption;

    option = {

      legend: {
        top: '25%',
        orient: 'vertical',
        left: 'right',
        show: true,
      },

      tooltip: {},

      dataset: {
        source: [
          [
            'الأسبوع',
            'الأحد',
            'الاثنين',
            'الثلاثاء',
            'الأربعاء',
            'الخميس',
            'الجمعة',
            'السبت'
          ],
          ['الأسبوع الخامس', 5000, 3000, 7000, 0, 0, 0, 0],
          ['الأسبوع الرابع', 5000, 3000, 7000, 10000, 13000, 2000, 4000],
          ['الأسبوع الثالث', 1000, 6000, 2500, 4000, 10000, 8000, 6000],
          ['الأسبوع الثاني', 2000, 8000, 5000, 4000, 2000, 2500],
          ['الأسبوع الأول', 8000, 13000, 2500, 2500, 4000, 10000, 2000]
        ]
      },

      xAxis: { type: 'category' },
      yAxis: {},

      series: [
        { type: 'bar' },
        { type: 'bar' },
        { type: 'bar' },
        { type: 'bar' },
        { type: 'bar' },
        { type: 'bar' },
        { type: 'bar' }
      ]
    };
    option && myChart.setOption(option);

    var chartDom = document.getElementById('main1')!;
    var myChart = echarts.init(chartDom);
    var option: EChartsOption;

    option = {

      tooltip: {
        trigger: 'item'
      },

      legend: {
        top: '5%',
        right: '30%',
        orient: 'vertical',
        left: 'right',
        show: true,
      },

      series: [
        {
          name: 'الشهر :',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },

          label: {
            show: false,
            position: 'center'
          },

          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold'
            }
          },

          labelLine: {
            show: false
          },

          data: [
            { value: 300000, name: 'يناير' },
            { value: 900000, name: 'فبراير' },
            { value: 200000, name: 'مارس' },
            { value: 300000, name: 'أبريل' },
            { value: 99000, name: 'يونيو' },
            { value: 100000, name: 'يوليو' },
            { value: 800000, name: 'أغسطس' },
            { value: 700000, name: 'سبتمبر' },
            { value: 500000, name: 'أكتوبر' },
            { value: 200000, name: 'نوفمبر' },
            { value: 100000, name: 'ديسمبر' }]
        }
      ]
    };
    option && myChart.setOption(option);
  }

  img = "../../../../../assets/images/Panda.png"; //store_logo

  customersArray = [
    {
      total: '500,000  عميل',
      newCustomer: '5,000  عميل',
      returnees: '300,000 عميل',
    }
  ]

  comparingArray = [
    {
      store: 'بن داوود',
      percentageOfSalesBetweenStores: '30%',
      sortBySales: '1',
      branchOfStore: 'الشيششة',
      sortByBranchs: '1',
      NumberOfClients: '700,000 عميل',
      progress: '+',
    },
    {
      store: 'بن داوود',
      percentageOfSalesBetweenStores: '30%',
      sortBySales: '1',
      branchOfStore: 'الشيششة',
      sortByBranchs: '1',
      NumberOfClients: '700,000 عميل',
      progress: '+',
    },
    {
      store: 'بن داوود',
      percentageOfSalesBetweenStores: '30%',
      sortBySales: '1',
      branchOfStore: 'الشيششة',
      sortByBranchs: '1',
      NumberOfClients: '700,000 عميل',
      progress: '+',
    },
    {
      store: 'بن داوود',
      percentageOfSalesBetweenStores: '30%',
      sortBySales: '1',
      branchOfStore: 'الشيششة',
      sortByBranchs: '1',
      NumberOfClients: '700,000 عميل',
      progress: '+',
    },
    {
      store: 'بن داوود',
      percentageOfSalesBetweenStores: '30%',
      sortBySales: '1',
      branchOfStore: 'الشيششة',
      sortByBranchs: '1',
      NumberOfClients: '700,000 عميل',
      progress: '+',
    },
    {
      store: 'بن داوود',
      percentageOfSalesBetweenStores: '30%',
      sortBySales: '1',
      branchOfStore: 'الشيششة',
      sortByBranchs: '1',
      NumberOfClients: '700,000 عميل',
      progress: '+',
    },
    {
      store: 'بن داوود',
      percentageOfSalesBetweenStores: '30%',
      sortBySales: '1',
      branchOfStore: 'الشيششة',
      sortByBranchs: '1',
      NumberOfClients: '700,000 عميل',
      progress: '+',
    },
  ]
}
