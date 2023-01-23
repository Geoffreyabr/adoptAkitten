import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css']
})
export class CreateKittenComponent {
  newCat =  {name: '', race: '', date: '', img: '', survol:false }

  isFormValid = false;

  @Output()
  sendCattoList:EventEmitter<object> = new EventEmitter();

  createCat(){
    
    if ( this.newCat.name && this.newCat.race && this.newCat.date && this.newCat.img) {
      this.isFormValid = true} else { this.isFormValid = false}  
    this.sendCattoList.emit(this.newCat)
}
}
