import { Test, TestingModule } from '@nestjs/testing';
import { KonsultasiCardController } from './konsultasi-card.controller';

describe('KonsultasiCardController', () => {
  let controller: KonsultasiCardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KonsultasiCardController],
    }).compile();

    controller = module.get<KonsultasiCardController>(KonsultasiCardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
