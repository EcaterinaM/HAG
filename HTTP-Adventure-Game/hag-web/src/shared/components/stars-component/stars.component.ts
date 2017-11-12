import { Component, NgModule, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StarsComponent{
  public starsCount: number = 1;
}
