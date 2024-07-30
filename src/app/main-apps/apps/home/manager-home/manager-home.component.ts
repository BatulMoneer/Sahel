import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { HOME } from 'src/app/constant/Routes';
import { ImpApiService } from 'src/app/services/imp-api.service';

@Component({
  selector: 'app-manager-home',
  templateUrl: './manager-home.component.html',
  styleUrls: ['./manager-home.component.scss']
})
export class ManagerHomeComponent implements OnInit {

  constructor(
    private impApiService: ImpApiService,
  ) { }


  total: 'Number of users';
      noCustomer: '5,000  عميل';
      noCollectors: '300,000 عميل';
      noStores: '300,000 عميل';


  customersList = []

  collectorsList = [
    {
      collectorName: 'عامر عثمان',
      collectorAge: '31',
      Email: 'amir@gmail.com',
      phone: '0567893465',
      IBAN: 'SA 12353629187549240358124',
    },
  ]

  arrayList1 = [
    {
      StoreName: 'بن داوود',
      storeAddress: '31',
      Email: 'bindaowood@gmail.com',
      phone: '0567893465',
      monthSales: '15,000,000  ريال',
      commercialRegistration: "../../../../../assets/images/commercialRegistration.jpg",
    },
    {
      StoreName: 'بن داوود',
      storeAddress: '31',
      Email: 'bindaowood@gmail.com',
      phone: '0567893465',
      monthSales: '15,000,000  ريال',
      commercialRegistration: "../../../../../assets/images/commercialRegistration.jpg",
    },
    {
      StoreName: 'بن داوود',
      storeAddress: '31',
      Email: 'bindaowood@gmail.com',
      phone: '0567893465',
      monthSales: '15,000,000  ريال',
      commercialRegistration: "../../../../../assets/images/commercialRegistration.jpg",
    },
    {
      StoreName: 'بن داوود',
      storeAddress: '31',
      Email: 'bindaowood@gmail.com',
      phone: '0567893465',
      monthSales: '15,000,000  ريال',
      commercialRegistration: "../../../../../assets/images/commercialRegistration.jpg",
    },
    {
      StoreName: 'بن داوود',
      storeAddress: '31',
      Email: 'bindaowood@gmail.com',
      phone: '0567893465',
      monthSales: '15,000,000  ريال',
      commercialRegistration: "../../../../../assets/images/commercialRegistration.jpg",
    },
  ]

  ngOnInit(): void {

    this.impApiService.get(HOME.total_users_customers_manager).subscribe(data => {
      this.total = data.data
    })

    this.impApiService.get(HOME.list_users_customers).subscribe(data => {
      this.customersList = data.data
    })

    this.impApiService.get(HOME.list_users_collectors).subscribe(data => {
      this.collectorsList = data.data
    })

    var chartDom = document.getElementById('main');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          name: 'الأرباح الشهرية للتطبيق :',
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
            { value: 300000, name: 'أرباح المناديب' },
            { value: 200000, name: 'أرباح المتاجر' },
            { value: 900000, name: 'أرباح مدير التطبيق' },
            { value: 300000, name: 'الإجمالي' }
          ]
        }
      ]
    };

    option && myChart.setOption(option);
  }

}
