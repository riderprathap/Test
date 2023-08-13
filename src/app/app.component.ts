import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Avengers';

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    const audioElement = this.el.nativeElement.querySelector('audio');

    if (audioElement) {
      this.renderer.listen(audioElement, 'canplaythrough', () => {
        audioElement.volume = 0.40;
      });
    }
  }
}
