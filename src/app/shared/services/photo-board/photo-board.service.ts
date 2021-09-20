import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../../components/photo-board/interfaces/photo';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhotoBoardService {

  constructor(public http: HttpClient) { }

  public getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>('http://localhost:3000/photos')
    .pipe(map(photos => {
      return photos.map(photo => {
        return { ...photo, description: photo.description.toUpperCase() };
      });
    }))
    .pipe(delay(2000));
  }

}
