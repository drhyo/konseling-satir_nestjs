import { Test, TestingModule } from '@nestjs/testing';
import { LayananCardService } from './layanan-card.service';

describe('LayananCardService', () => {
  let service: LayananCardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LayananCardService],
    }).compile();

    service = module.get<LayananCardService>(LayananCardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
