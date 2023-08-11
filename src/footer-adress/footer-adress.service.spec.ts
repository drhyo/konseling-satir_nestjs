import { Test, TestingModule } from '@nestjs/testing';
import { FooterAdressService } from './footer-adress.service';

describe('FooterAdressService', () => {
  let service: FooterAdressService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FooterAdressService],
    }).compile();

    service = module.get<FooterAdressService>(FooterAdressService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
