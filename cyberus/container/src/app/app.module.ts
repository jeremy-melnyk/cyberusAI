import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Angular 2 video
import { CommonModule } from '@angular/common';
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';

// Visual Recognition
import { VisualRecognitionService } from './visual-recognition.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  providers: [ VisualRecognitionService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
