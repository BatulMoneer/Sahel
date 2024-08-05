import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { REQUESTS } from 'src/app/constant/Routes';
import { ImpApiService } from 'src/app/services/imp-api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-manager-representative-registration-requests',
  templateUrl: './manager-representative-registration-requests.component.html',
  styleUrls: ['./manager-representative-registration-requests.component.scss']
})
export class ManagerRepresentativeRegistrationRequestsComponent implements OnInit {

  collectorsList = []
  collectorsList_ = []

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

  constructor(
    private modalService: NgbModal,
    private impApiService: ImpApiService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.impApiService.get(REQUESTS.list_users_collectors).subscribe(data => {
      this.collectorsList = data.data
      this.collectorsList_ = data.data
    })
  }

  filter_collector(user_filter) {
    this.collectorsList = this.collectorsList_
    this.collectorsList = this.collectorsList.filter((data) => {
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
