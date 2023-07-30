import { Test, TestingModule } from '@nestjs/testing';
import { PelatihanPageController } from './pelatihan-page.controller';

describe('PelatihanPageController', () => {
  let controller: PelatihanPageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PelatihanPageController],
    }).compile();

    controller = module.get<PelatihanPageController>(PelatihanPageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
