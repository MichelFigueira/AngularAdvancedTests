import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PhotoBoardService } from './photo-board.service';

describe(PhotoBoardService.name, () => {
  let service: PhotoBoardService;
  let httpController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PhotoBoardService]
    }).compileComponents();
    service = TestBed.inject(PhotoBoardService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('getPhotos', () => {
    it('makes expected calls', () => {!
      service.getPhotos().subscribe(res => {
        expect(res).toEqual([]);
      });
      const req = httpController.expectOne(
        'http://localhost:3000/photos'
      );
      expect(req.request.method).toEqual('GET');
      req.flush([]);
      httpController.verify();
    });
  });
});
