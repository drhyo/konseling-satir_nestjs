import { Test, TestingModule } from '@nestjs/testing';
import { HyperlinkController } from './hyperlink.controller';

describe('HyperlinkController', () => {
  let controller: HyperlinkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HyperlinkController],
    }).compile();

    controller = module.get<HyperlinkController>(HyperlinkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
