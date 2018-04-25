import { Component } from '@angular/core';
import { MindmapComponent}   from './mindmap/mindmap.component';
import map from "./data/map";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mindmap on Angular 5 SSR';
  data = {...map};
}
