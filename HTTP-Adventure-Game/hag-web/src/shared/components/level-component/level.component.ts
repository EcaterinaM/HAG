import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LevelComponent {
  @Input() isLocked: boolean;
  @Input() planetName: string;
  @Input() click: boolean;

  planet: string;
  mercury11 = "red";
  mercury12 = "white";
  mercury13 = "white";
  mercury14 = "white";
  mercury15 = "white";
  mercury16 = "white";
  

  private addFilter(): any {
    if (this.isLocked) {
      return 'grayscale(100%)';
    }
  }
}
