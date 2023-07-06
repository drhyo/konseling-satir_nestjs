import { Test, TestingModule } from '@nestjs/testing';
import { SliderSectionInfoService } from './slider-section-info.service';

describe('SliderSectionInfoService', () => {
  let service: SliderSectionInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SliderSectionInfoService],
    }).compile();

    service = module.get<SliderSectionInfoService>(SliderSectionInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
