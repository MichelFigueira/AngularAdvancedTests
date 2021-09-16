import { PhotoBoardService } from './shared/services/photo-board/photo-board.service';
import { Component, OnInit } from '@angular/core';
import { Photo } from './shared/components/photo-board/interfaces/photo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular testing';
}
