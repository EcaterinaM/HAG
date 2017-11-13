import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.scss']
})
export class BackComponent {
  @Input() path: string;
  constructor(private router:Router){}
  
  public routeToPreviousPage(): void {
    this.router.navigate([this.path])
  }
}
