import { Test, TestingModule } from '@nestjs/testing';
import { PelatihanPageService } from './pelatihan-page.service';

describe('PelatihanPageService', () => {
  let service: PelatihanPageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PelatihanPageService],
    }).compile();

    service = module.get<PelatihanPageService>(PelatihanPageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
