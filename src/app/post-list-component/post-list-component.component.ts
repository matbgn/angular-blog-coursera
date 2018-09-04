import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit {

  postTitleOne = "Hello World";
  postTitleTwo = "Toto";
  postTitleThree = "In the End";

  constructor() { }

  ngOnInit() {
  }

}
