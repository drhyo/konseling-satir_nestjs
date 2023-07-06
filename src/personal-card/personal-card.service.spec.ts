import { Test, TestingModule } from '@nestjs/testing';
import { PersonalCardService } from './personal-card.service';

describe('PersonalCardService', () => {
  let service: PersonalCardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonalCardService],
    }).compile();

    service = module.get<PersonalCardService>(PersonalCardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
