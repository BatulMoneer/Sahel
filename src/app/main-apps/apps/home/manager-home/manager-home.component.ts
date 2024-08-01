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

  total: '';
  number_of_users: '';
  number_of_collectors: '';
  number_of_markets: '';

  customersList = []

  collectorsList = []
  collectorsListv2 = []

  marketsList = []

  ngOnInit(): void {

    // console.log(data); to print data in "inespect"

    // this.impApiService.get(HOME.total_all_users_manager).subscribe(data => {
    //    this.total = data.total
    // })

    this.impApiService.get(HOME.total_users_customers_manager).subscribe(data => {
      this.number_of_users = data.number_of_users
    })

    this.impApiService.get(HOME.total_users_collectors_manager).subscribe(data => {
      this.number_of_collectors = data.number_of_collectors
    })

    this.impApiService.get(HOME.total_users_markets_manager).subscribe(data => {
      this.number_of_markets = data.number_of_markets
    })

    this.impApiService.get(HOME.list_users_customers).subscribe(data => {
      this.customersList = data.data
    })

    this.impApiService.get(HOME.list_users_collectors).subscribe(data => {
      this.collectorsList = data.data
      this.collectorsListv2 = data.data

    })
    this.impApiService.get(HOME.list_users_markets).subscribe(data => {
      this.marketsList = data.data
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

  filter_collecrot(user_filter){
    this.collectorsList = this.collectorsListv2
   this.collectorsList =  this.collectorsList.filter((data)=>{
       return data.name_user.includes(user_filter)
    })

  }

}
