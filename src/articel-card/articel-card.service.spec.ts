import { Test, TestingModule } from '@nestjs/testing';
import { ArticelCardService } from './articel-card.service';

describe('ArticelCardService', () => {
  let service: ArticelCardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArticelCardService],
    }).compile();

    service = module.get<ArticelCardService>(ArticelCardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
