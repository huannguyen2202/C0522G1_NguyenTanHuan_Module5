import { Component, OnInit } from '@angular/core';
import {Kh} from '../../model/kh';
import {KhService} from '../../service/kh.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-kh-list',
  templateUrl: './kh-list.component.html',
  styleUrls: ['./kh-list.component.css']
})
export class KhListComponent implements OnInit {
  khNameSearch = '';
  khAddressSearch = '';
  khPhoneSearch = '';

  khListPaging: Kh[];
  numberRecord = 5;
  curPage = 1;
  totalPage: number;

  khNameDelete: string;
  khIdDelete: number;


  constructor(private khService: KhService) { }

  ngOnInit(): void {
    this.khService.findAllKhSearch(this.khNameSearch, this.khAddressSearch, this.khPhoneSearch)
      .subscribe(list => {
        this.totalPage = Math.ceil(list.length / this.numberRecord);
      }, error => {
        console.log(error);
      }, () => {
        console.log('OK!');
      });

    this.khService.findKhSearchPaging(this.numberRecord, this.curPage,
      this.khNameSearch, this.khAddressSearch, this.khPhoneSearch).subscribe(pagingList => {
      this.khListPaging = pagingList;
    }, error => {
      console.log(error);
    }, () => {
      console.log('Hiển thị khách hàng ở trang ' + this.curPage);
    });

  }
  next(): void {
    this.curPage++;
    this.ngOnInit();
  }

  previos(): void {
    this.curPage--;
    this.ngOnInit();
  }

  getInfoKhDelete(khName: string, khId: number): void {
    this.khNameDelete = khName;
    this.khIdDelete = khId;
  }

  deleteKh(): void {
    this.khService.deleteKh(this.khIdDelete).subscribe(() => {
      // 1 thông báo vip-pro:
      Swal.fire({
        icon: 'success',
        title: 'Xóa thành công!',
        text: 'Khách hàng: ' + this.khNameDelete,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });

      this.curPage = 1;
      this.ngOnInit();
    }, error => {
      console.log(error);
    }, () => {
      console.log('Xóa khách hàng thành công!');
    });
  }

  searchByMore(): void {
    this.curPage = 1;
    this.ngOnInit();
  }

}
