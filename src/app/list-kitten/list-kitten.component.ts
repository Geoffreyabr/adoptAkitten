import { Component, EventEmitter, Output } from '@angular/core';
import { catList } from '../Data/catlist';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css'],
})
export class ListKittenComponent {
  catList = catList;
  survol!:any

  receiveCat(event: any) {
    this.catList.push(event);
  }
  selectedCat!: any;

  @Output()
  sendSelectedCat: EventEmitter<any> = new EventEmitter();

  selectCat(cat: any) {
    this.selectedCat = cat;
    console.log(this.selectedCat);
    this.sendSelectedCat.emit(this.selectedCat);
    this.catList = this.catList.filter((item) => item !== this.selectedCat);
  }

  playP(cat: any){
    this.selectedCat = cat
    cat.survol = !cat.survol;
  }
}
