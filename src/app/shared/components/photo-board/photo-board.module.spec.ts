import { TestBed } from '@angular/core/testing';
import { PhotoBoardModule } from './photo-board.module';

describe('PhotoBoardModule', () => {
  let pipe: PhotoBoardModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [PhotoBoardModule] });
    pipe = TestBed.inject(PhotoBoardModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
