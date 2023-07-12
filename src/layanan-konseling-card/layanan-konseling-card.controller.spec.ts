import { Test, TestingModule } from '@nestjs/testing';
import { LayananKonselingCardController } from './layanan-konseling-card.controller';

describe('LayananKonselingCardController', () => {
  let controller: LayananKonselingCardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LayananKonselingCardController],
    }).compile();

    controller = module.get<LayananKonselingCardController>(LayananKonselingCardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
