import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth-component',
  template: `
    <p>
      fourth-component works!
    </p>
  `,
  styleUrls: ['./fourth-component.component.css']
})
export class FourthComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
