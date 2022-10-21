import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DictionaryServiceService} from '../dictionary-service.service';
import {IWord} from '../iword';

@Component({
  selector: 'app-dictionary-detail-component',
  templateUrl: './dictionary-detail-component.component.html',
  styleUrls: ['./dictionary-detail-component.component.css']
})
export class DictionaryDetailComponentComponent implements OnInit {
  word: IWord;

  constructor(private dictionaryService: DictionaryServiceService,
              private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    const word = this.activatedRouter.snapshot.params.keyword;
    this.word = this.dictionaryService.translate(word);
  }

}
