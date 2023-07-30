import { Test, TestingModule } from '@nestjs/testing';
import { KonsultasiPageController } from './konsultasi-page.controller';

describe('KonsultasiPageController', () => {
  let controller: KonsultasiPageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KonsultasiPageController],
    }).compile();

    controller = module.get<KonsultasiPageController>(KonsultasiPageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
