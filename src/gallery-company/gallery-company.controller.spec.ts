import { Test, TestingModule } from '@nestjs/testing';
import { GalleryCompanyController } from './gallery-company.controller';

describe('GalleryCompanyController', () => {
  let controller: GalleryCompanyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GalleryCompanyController],
    }).compile();

    controller = module.get<GalleryCompanyController>(GalleryCompanyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
