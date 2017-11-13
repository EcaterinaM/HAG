import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-answer',
  templateUrl: './button-answer.component.html',
  styleUrls: ['./button-answer.component.scss']
})
export class ButtonAnswerComponent {
  @Input() content : string;
}
