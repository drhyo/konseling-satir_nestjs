import { Test, TestingModule } from '@nestjs/testing';
import { LayananPageController } from './layanan-page.controller';

describe('LayananPageController', () => {
  let controller: LayananPageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LayananPageController],
    }).compile();

    controller = module.get<LayananPageController>(LayananPageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
