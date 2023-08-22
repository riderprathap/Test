import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cap-america',
  templateUrl: './cap-america.component.html',
  styleUrls: ['./cap-america.component.css']
})
export class CapAmericaComponent {
  marginTop: string = '40%';

// @Input()
//   if (Routes path:'') {
//   this.marginTop = '40%';
// }
  setMarginTop(value: number): void {
    this.marginTop = value + '%';
  }
}
