import { Test, TestingModule } from '@nestjs/testing';
import { SliderSectionInfoController } from './slider-section-info.controller';

describe('SliderSectionInfoController', () => {
  let controller: SliderSectionInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SliderSectionInfoController],
    }).compile();

    controller = module.get<SliderSectionInfoController>(SliderSectionInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
