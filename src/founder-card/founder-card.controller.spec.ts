import { Test, TestingModule } from '@nestjs/testing';
import { FounderCardController } from './founder-card.controller';

describe('FounderCardController', () => {
  let controller: FounderCardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FounderCardController],
    }).compile();

    controller = module.get<FounderCardController>(FounderCardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
