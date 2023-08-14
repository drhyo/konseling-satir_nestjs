import { Test, TestingModule } from '@nestjs/testing';
import { ContactInformationController } from './contact-information.controller';

describe('ContactInformationController', () => {
  let controller: ContactInformationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContactInformationController],
    }).compile();

    controller = module.get<ContactInformationController>(ContactInformationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
