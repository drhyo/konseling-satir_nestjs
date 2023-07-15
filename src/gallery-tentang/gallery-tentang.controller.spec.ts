import { Test, TestingModule } from '@nestjs/testing';
import { GalleryTentangController } from './gallery-tentang.controller';

describe('GalleryTentangController', () => {
  let controller: GalleryTentangController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GalleryTentangController],
    }).compile();

    controller = module.get<GalleryTentangController>(GalleryTentangController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
