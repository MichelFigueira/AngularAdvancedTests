import { PhotoBoardService } from './../../services/photo-board/photo-board.service';
import { PhotoFrameModule } from './../photo-frame/photo-frame.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoBoardComponent } from './photo-board.component';

@NgModule({
  imports: [
    CommonModule,
    PhotoFrameModule
  ],
  declarations: [PhotoBoardComponent],
  exports: [PhotoBoardComponent],
  providers: [PhotoBoardService]
})
export class PhotoBoardModule { }
