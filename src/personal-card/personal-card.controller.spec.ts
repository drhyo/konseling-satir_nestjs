import { Test, TestingModule } from '@nestjs/testing';
import { PersonalCardController } from './personal-card.controller';

describe('PersonalCardController', () => {
  let controller: PersonalCardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonalCardController],
    }).compile();

    controller = module.get<PersonalCardController>(PersonalCardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
