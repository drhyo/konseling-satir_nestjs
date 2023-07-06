import { Test, TestingModule } from '@nestjs/testing';
import { FounderCardService } from './founder-card.service';

describe('FounderCardService', () => {
  let service: FounderCardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FounderCardService],
    }).compile();

    service = module.get<FounderCardService>(FounderCardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
