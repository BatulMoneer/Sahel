import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { REQUESTS } from 'src/app/constant/Routes';
import { ImpApiService } from 'src/app/services/imp-api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-manager-stores-registration-requests',
  templateUrl: './manager-stores-registration-requests.component.html',
  styleUrls: ['./manager-stores-registration-requests.component.scss']
})
export class ManagerStoresRegistrationRequestsComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    private impApiService: ImpApiService,
    private toastr: ToastrService
  ) { }

  replay_data = {
    data: null,
    replay: '',
    type: null
  }

  open(model, data) {
    this.replay_data = {
      data: data,
      replay: '',
      type: null
    }
    this.modalService.open(model, { centered: true })
  }

  storesList = []
  storesList_ = []

  ngOnInit(): void {

    this.impApiService.get(REQUESTS.list_users_markets).subscribe(data => {
      this.storesList = data.data
      this.storesList_ = data.data
    })
  }

  filter_store(user_filter) {
    this.storesList = this.storesList_
    this.storesList = this.storesList.filter((data) => {
      return data.name_user.includes(user_filter)
    })
  }

  acceptance() {
   this.replay_data.type = 1
    console.log(this.replay_data)
    this.toastr.success('تم إرسال ردك');
    this.modalService.dismissAll()
  }

  rejection() {
    this.replay_data.type = 2
    console.log(this.replay_data)
    this.toastr.success('تم إرسال ردك');
    this.modalService.dismissAll()
  }

}
