import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gamecard',
  templateUrl: './gamecard.component.html',
  styleUrls: ['./gamecard.component.css']
})
export class GamecardComponent implements OnInit {
@Input() name: string;
@Input() srcimg: string;

  constructor() { }

  ngOnInit(): void {
  }

}
