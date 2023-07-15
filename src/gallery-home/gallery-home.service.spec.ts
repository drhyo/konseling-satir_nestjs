import { Test, TestingModule } from '@nestjs/testing';
import { GalleryHomeService } from './gallery-home.service';

describe('GalleryHomeService', () => {
  let service: GalleryHomeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GalleryHomeService],
    }).compile();

    service = module.get<GalleryHomeService>(GalleryHomeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
