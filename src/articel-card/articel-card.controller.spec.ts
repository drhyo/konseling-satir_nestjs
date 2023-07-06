import { Test, TestingModule } from '@nestjs/testing';
import { ArticelCardController } from './articel-card.controller';

describe('ArticelCardController', () => {
  let controller: ArticelCardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticelCardController],
    }).compile();

    controller = module.get<ArticelCardController>(ArticelCardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
