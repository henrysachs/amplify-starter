import {Component, OnInit} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [trigger('slide', [state('left', style({transform: 'translateX(0)'})), state('right', style({transform: 'translateX(-50%)'})), transition('* => *', animate(300))])]
})
export class ProfileComponent implements OnInit {
  activePane = 'left';
  constructor() {}

  ngOnInit() {}

  togglePane() {
    this.activePane = this.activePane === 'left' ? 'right' : 'left';
    console.log(this.activePane);
  }
}
