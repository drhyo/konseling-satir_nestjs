import { Test, TestingModule } from '@nestjs/testing';
import { PelatihanCardService } from './pelatihan-card.service';

describe('PelatihanCardService', () => {
  let service: PelatihanCardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PelatihanCardService],
    }).compile();

    service = module.get<PelatihanCardService>(PelatihanCardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
