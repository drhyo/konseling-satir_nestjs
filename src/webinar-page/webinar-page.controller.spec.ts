import { Test, TestingModule } from '@nestjs/testing';
import { WebinarPageController } from './webinar-page.controller';

describe('WebinarPageController', () => {
  let controller: WebinarPageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WebinarPageController],
    }).compile();

    controller = module.get<WebinarPageController>(WebinarPageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
