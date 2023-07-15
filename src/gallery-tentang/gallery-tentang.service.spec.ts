import { Test, TestingModule } from '@nestjs/testing';
import { GalleryTentangService } from './gallery-tentang.service';

describe('GalleryTentangService', () => {
  let service: GalleryTentangService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GalleryTentangService],
    }).compile();

    service = module.get<GalleryTentangService>(GalleryTentangService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
