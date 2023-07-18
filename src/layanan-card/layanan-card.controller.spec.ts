import { Test, TestingModule } from '@nestjs/testing';
import { LayananCardController } from './layanan-card.controller';

describe('LayananCardController', () => {
  let controller: LayananCardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LayananCardController],
    }).compile();

    controller = module.get<LayananCardController>(LayananCardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
