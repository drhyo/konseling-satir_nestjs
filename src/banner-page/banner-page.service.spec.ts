import { Test, TestingModule } from '@nestjs/testing';
import { BannerPageService } from './banner-page.service';

describe('BannerPageService', () => {
  let service: BannerPageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BannerPageService],
    }).compile();

    service = module.get<BannerPageService>(BannerPageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
