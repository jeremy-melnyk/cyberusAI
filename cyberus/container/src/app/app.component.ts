import { Component } from '@angular/core';

// Visual Recognition
import { VisualRecognitionService } from './visual-recognition.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CyberusAI';
  sources: Array<Object>;

  constructor(private visualRecognitionService: VisualRecognitionService) {
    this.sources = [
      {
        src: "assets/videos/VIRAT_S_010000_00_000000_000165.mp4",
        type: "video/mp4"
      },
      {
        src: "assets/videos/out.mp4",
        type: "video/mp4"
      }
    ];
  }

  public testWatson() {
    this.visualRecognitionService.classify("assets/putin.jpg");
  }

  ngOnInit() {
  }
}
