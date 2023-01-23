import { Component } from '@angular/core';


@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.css']
})
export class UserKittenComponent {



favoriteCat: any[] = [];

receiveCat(event:any ): void {
  this.favoriteCat.push(event)
  console.log(this.favoriteCat)

}}