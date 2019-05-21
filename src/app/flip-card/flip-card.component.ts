import {Component, OnInit} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.scss'],
  animations: [
    trigger('flipState', [
      state(
        'active',
        style({
          transform: 'rotateY(179.9deg)'
        })
      ),
      state(
        'inactive',
        style({
          transform: 'rotateY(0)'
        })
      ),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})
export class FlipCardComponent implements OnInit {
  flip = 'inactive';
  constructor() {}

  ngOnInit() {}

  toggleFlip() {
    this.flip = this.flip === 'inactive' ? 'active' : 'inactive';
  }
}
