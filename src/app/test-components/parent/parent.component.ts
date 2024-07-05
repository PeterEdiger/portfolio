import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {

  myData = [
    {
      "imgPath": "pathOne",
      "text": "blabla 1",
      "number": "one"
    },
    {
      "imgPath": "pathTwo",
      "text": "blabla 2",
      "number": "two"
    },
    {
      "imgPath": "pathOne",
      "text": "blabla 1",
      "number": "three"
    },
  ];
}
