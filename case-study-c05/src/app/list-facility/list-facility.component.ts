import { Component, OnInit } from '@angular/core';
import {Facility} from '../model/facility';
import {ListFacilityService} from '../service/list-facility.service';


@Component({
  selector: 'app-list-facility',
  templateUrl: './list-facility.component.html',
  styleUrls: ['./list-facility.component.css']
})
export class ListFacilityComponent implements OnInit {
  facility: Facility[] = [];



  constructor(private facilityService: ListFacilityService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.facility = this.facilityService.getAll();
  }

}
