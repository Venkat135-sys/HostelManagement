import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hostel-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  email = "venkatvadlakonda2002@gmail.com";
  userName = "DhanushBhargavUma";
  
  constructor() { }

  ngOnInit(): void {
  }

}
