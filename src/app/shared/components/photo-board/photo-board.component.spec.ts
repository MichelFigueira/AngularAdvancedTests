import { PhotoBoardModule } from './photo-board.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoBoardComponent } from './photo-board.component';
import { Photo } from './interfaces/photo';
import { SimpleChange, SimpleChanges } from '@angular/core';

function buildPhotoList(): Photo[] {
  const photos: Photo[] = [];
  for (let i = 0; i < 8; i++) {
    photos.push({
      id: i + 1,
      url: '',
      description: ''
    });
  }
  return photos;
}

describe(PhotoBoardComponent.name, () => {
  let component: PhotoBoardComponent;
  let fixture: ComponentFixture<PhotoBoardComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [PhotoBoardModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoBoardComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`rows has default value`, () => {
    expect(component.rows).toEqual([]);
  });

  it(`Should display rows and colums when (@Input photos) has value`, () => {
    component.photos = buildPhotoList();
    fixture.detectChanges();
    const change: SimpleChanges = {
      photos: new SimpleChange([], component.photos, true)
    }
    component.ngOnChanges(change);

    expect(component.rows.length)
      .withContext('Number of rows')
      .toBe(2);
    expect(component.rows[0].length)
      .withContext('Number of colums from the first row')
      .toBe(4);
    expect(component.rows[1].length)
      .withContext('Number of colums from the second row')
      .toBe(4);
  });
});
