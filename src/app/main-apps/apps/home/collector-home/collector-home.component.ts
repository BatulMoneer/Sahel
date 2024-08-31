import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { auth, collector } from 'src/app/constant/Routes';
import { OrderService } from 'src/app/service/order.service';
import { ImpApiService } from 'src/app/services/imp-api.service';

@Component({
  selector: 'app-collector-home',
  templateUrl: './collector-home.component.html',
  styleUrls: ['./collector-home.component.scss']
})
export class CollectorHomeComponent implements OnInit {

  isActive: boolean;
  status: any;
  name = "قصي";
  link = "/apps/products/collector-orders";
  value = "عرض الطلبات";


  constructor(private impApiService: ImpApiService,) { }
  /*
  getTableData$(pageNumber: Number, pageSize: Number) {
    return this.impApiService.getEmployees(pageNumber, pageSize);
  }

  ngOnInit(): void {
    this.getTableData$(1, 3).subscribe(data => {
      this.dataSource = new MatTableDataSource(data.data);
      this.totalData = data.total;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
  applyFilterInput = '';
  applyFilter(filterValue) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  changePage(data) {
    this.getTableData$(data.pageIndex, data.pageSize)
  }

  displayedColumns = [
    'id',
    'first_name',
    'last_name',
    'email',
    'avatar',

  ];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: any;
  totalData = null;
  pageSizes = [3, 5, 7];
*/
  ngOnInit(): void {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    console.log(currentUser);

    this.impApiService.get(`${collector.getCollectorStatus}${currentUser.user_info.id}`).subscribe(data => {
      this.status = data.collector_status[0];
      console.log(this.status);
      this.isActive = this.status === 'active';
    });
  }
  toggleStatus(): void {
    this.isActive = !this.isActive;
    console.log(this.isActive);

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    console.log(currentUser);

    const payload = {
      user_id: currentUser.user_info.id,
      values_info: this.isActive ? 'active' : 'inactive'
    };

    console.log(this.isActive ? 'active' : 'inactive');

    this.impApiService.post(collector.updateCollectorStatus, payload).subscribe(data => {
      console.log(data);
    });
  }
}
