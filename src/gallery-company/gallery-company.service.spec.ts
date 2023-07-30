import { Test, TestingModule } from '@nestjs/testing';
import { GalleryCompanyService } from './gallery-company.service';

describe('GalleryCompanyService', () => {
  let service: GalleryCompanyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GalleryCompanyService],
    }).compile();

    service = module.get<GalleryCompanyService>(GalleryCompanyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
