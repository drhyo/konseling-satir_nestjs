import { Test, TestingModule } from '@nestjs/testing';
import { WebinarPageService } from './webinar-page.service';

describe('WebinarPageService', () => {
  let service: WebinarPageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WebinarPageService],
    }).compile();

    service = module.get<WebinarPageService>(WebinarPageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
