import { Test, TestingModule } from '@nestjs/testing';
import { GalleryHomeController } from './gallery-home.controller';

describe('GalleryHomeController', () => {
  let controller: GalleryHomeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GalleryHomeController],
    }).compile();

    controller = module.get<GalleryHomeController>(GalleryHomeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
