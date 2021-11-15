import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
    name : string; // aggiungo la proprietà al nome
  constructor() {
      this.name = "Felipe" //setta il nome del costruttore
   }

  ngOnInit(){
  }

}
