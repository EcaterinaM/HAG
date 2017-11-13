import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LevelComponent {
  @Input() numberLevel: number;
  @Input() isLocked: boolean;
}
