import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  bookCodeSearch = '';

  bookListPaging: Book[];
  numberRecord = 3;
  curPage = 1;
  totalPage: number;

  bookCodeDelete: string;
  bookIdDelete: number;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.findAllBookSearch(this.bookCodeSearch)
      .subscribe(list => {
        this.totalPage = Math.ceil(list.length / this.numberRecord);
      }, error => {
        console.log(error);
      }, () => {
        console.log('OK!');
      });

    this.bookService.findBookSearchPaging(this.numberRecord, this.curPage,
      this.bookCodeSearch).subscribe(pagingList => {
      this.bookListPaging = pagingList;
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

  getInfoBookDelete(bookCode: string, bookId: number): void {
    this.bookCodeDelete = bookCode;
    this.bookIdDelete = bookId;
  }

  deleteBook(): void {
    this.bookService.deleteBook(this.bookIdDelete).subscribe(() => {
      Swal.fire({
        icon: 'success',
        title: 'Xóa thành công!',
        text: 'Khách hàng: ' + this.bookCodeDelete,
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
