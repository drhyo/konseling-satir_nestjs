import { Test, TestingModule } from '@nestjs/testing';
import { FooterAdressController } from './footer-adress.controller';

describe('FooterAdressController', () => {
  let controller: FooterAdressController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FooterAdressController],
    }).compile();

    controller = module.get<FooterAdressController>(FooterAdressController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
