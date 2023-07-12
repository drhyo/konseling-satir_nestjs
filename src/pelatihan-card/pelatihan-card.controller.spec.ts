import { Test, TestingModule } from '@nestjs/testing';
import { PelatihanCardController } from './pelatihan-card.controller';

describe('PelatihanCardController', () => {
  let controller: PelatihanCardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PelatihanCardController],
    }).compile();

    controller = module.get<PelatihanCardController>(PelatihanCardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
