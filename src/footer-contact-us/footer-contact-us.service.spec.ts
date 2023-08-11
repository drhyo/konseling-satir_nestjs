import { Test, TestingModule } from '@nestjs/testing';
import { FooterContactUsService } from './footer-contact-us.service';

describe('FooterContactUsService', () => {
  let service: FooterContactUsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FooterContactUsService],
    }).compile();

    service = module.get<FooterContactUsService>(FooterContactUsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
