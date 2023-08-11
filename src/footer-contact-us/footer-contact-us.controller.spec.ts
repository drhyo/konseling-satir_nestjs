import { Test, TestingModule } from '@nestjs/testing';
import { FooterContactUsController } from './footer-contact-us.controller';

describe('FooterContactUsController', () => {
  let controller: FooterContactUsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FooterContactUsController],
    }).compile();

    controller = module.get<FooterContactUsController>(FooterContactUsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
