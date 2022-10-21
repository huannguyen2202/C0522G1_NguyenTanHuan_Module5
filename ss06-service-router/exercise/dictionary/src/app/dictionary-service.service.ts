import { Injectable } from '@angular/core';
import {IWord} from './iword';

@Injectable({
  providedIn: 'root'
})
export class DictionaryServiceService {
  dictionary: IWord[] = [
    {
      word: 'hello',
      mean: 'xin chào'
    },
    {
      word: 'banana',
      mean: 'quả chuoi'
    },
    {
      word: 'sorry',
      mean: 'xin lỗi'
    },
    {
      word: 'you',
      mean: 'bạn'
    },
    {
      word: 'pen',
      mean: 'bút'
    },
    {
      word: 'apple',
      mean: 'quả táo'
    },
    {
      word: 'orange',
      mean: 'quả cam'
    },
    {
      word: 'book',
      mean: 'sách'
    },
    {
      word: 'exercise',
      mean: 'bài tập'
    },

  ];

  constructor() { }
  translate(keyword: string) {
    return this.dictionary.find(word => word.word === keyword);

  }

  findAll(): IWord[] {
    return this.dictionary;
  }
}
