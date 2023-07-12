import { Test, TestingModule } from '@nestjs/testing';
import { LayananKonselingCardService } from './layanan-konseling-card.service';

describe('LayananKonselingCardService', () => {
  let service: LayananKonselingCardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LayananKonselingCardService],
    }).compile();

    service = module.get<LayananKonselingCardService>(LayananKonselingCardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
