import { Test, TestingModule } from '@nestjs/testing';
import { LayananPageService } from './layanan-page.service';

describe('LayananPageService', () => {
  let service: LayananPageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LayananPageService],
    }).compile();

    service = module.get<LayananPageService>(LayananPageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
