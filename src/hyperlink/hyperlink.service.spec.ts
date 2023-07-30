import { Test, TestingModule } from '@nestjs/testing';
import { HyperlinkService } from './hyperlink.service';

describe('HyperlinkService', () => {
  let service: HyperlinkService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HyperlinkService],
    }).compile();

    service = module.get<HyperlinkService>(HyperlinkService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
