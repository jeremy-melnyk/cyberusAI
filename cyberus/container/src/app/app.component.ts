import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../../node_modules/videogular2/fonts/videogular.css']
})
export class AppComponent {
  title = 'Welcome to CyberusAI';
      sources: Array<Object>;

    constructor() {
        this.sources = [
            {
                src: "assets/videos/VIRAT_S_010000_00_000000_000165.mp4",
                type: "video/mp4"
            }
        ];
    }

    ngOnInit() {
    }
}
