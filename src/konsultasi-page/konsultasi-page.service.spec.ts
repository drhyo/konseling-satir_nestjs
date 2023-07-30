import { Test, TestingModule } from '@nestjs/testing';
import { KonsultasiPageService } from './konsultasi-page.service';

describe('KonsultasiPageService', () => {
  let service: KonsultasiPageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KonsultasiPageService],
    }).compile();

    service = module.get<KonsultasiPageService>(KonsultasiPageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
