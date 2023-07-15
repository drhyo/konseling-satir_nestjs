import { Test, TestingModule } from '@nestjs/testing';
import { BannerPageController } from './banner-page.controller';

describe('BannerPageController', () => {
  let controller: BannerPageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BannerPageController],
    }).compile();

    controller = module.get<BannerPageController>(BannerPageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
