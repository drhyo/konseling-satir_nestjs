import { Test, TestingModule } from '@nestjs/testing';
import { KonsultasiCardService } from './konsultasi-card.service';

describe('KonsultasiCardService', () => {
  let service: KonsultasiCardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KonsultasiCardService],
    }).compile();

    service = module.get<KonsultasiCardService>(KonsultasiCardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
