import { Component, OnInit } from '@angular/core';
import {DictionaryServiceService} from '../dictionary-service.service';
import {IWord} from '../iword';

@Component({
  selector: 'app-dictionary-page-component',
  templateUrl: './dictionary-page-component.component.html',
  styleUrls: ['./dictionary-page-component.component.css']
})
export class DictionaryPageComponentComponent implements OnInit {
  dictionaryList: IWord[];

  constructor(private dictionaryService: DictionaryServiceService) { }

  ngOnInit(): void {
    this.dictionaryList = this.dictionaryService.findAll();
  }

}
