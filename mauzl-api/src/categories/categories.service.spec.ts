import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesService } from './categories.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { NotFoundException } from '@nestjs/common';
import { CategoryMapper } from './category.mapper';

type MockRepository<T = any> = Partial<Record<keyof Repository<T>, jest.Mock>>;

describe('CategoriesService', () => {
  let categoryService: CategoriesService;
  let mockCategoryRepository: MockRepository<Category>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoriesService,
        {
          provide: getRepositoryToken(Category),
          useValue: {
            create: jest.fn(),
            save: jest.fn(),
            find: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
          },
        },
      ],
    }).compile();

    categoryService = module.get<CategoriesService>(CategoriesService);
    mockCategoryRepository = module.get(getRepositoryToken(Category));
  });

  describe('create', () => {
    it('should successfully create a category', async () => {
      const createCategoryDto = { name: 'New Category' };
      const savedCategory = { id: 1, ...createCategoryDto };

      mockCategoryRepository.create.mockReturnValue(savedCategory);
      mockCategoryRepository.save.mockResolvedValue(savedCategory);

      expect(await categoryService.create(createCategoryDto)).toEqual(
        savedCategory,
      );
      expect(mockCategoryRepository.create).toHaveBeenCalledWith(
        createCategoryDto,
      );
      expect(mockCategoryRepository.save).toHaveBeenCalledWith(savedCategory);
    });

    it('should handle exceptions', async () => {
      const createCategoryDto = { name: 'New Category' };
      const notFoundException = new NotFoundException(
        'Failed to create category',
      );
      mockCategoryRepository.save.mockRejectedValue(notFoundException);

      await expect(categoryService.create(createCategoryDto)).rejects.toThrow(
        notFoundException,
      );
    });
  });

  describe('findAll', () => {
    it('should return all categories', async () => {
      const categoryArray = [
        { id: 1, name: 'Category1' },
        { id: 2, name: 'Category2' },
      ] as Category[];
      mockCategoryRepository.find.mockResolvedValue(categoryArray);

      const categories = await categoryService.findAll();
      expect(categories).toEqual(CategoryMapper.toDtoArray(categoryArray));
      expect(mockCategoryRepository.find).toHaveBeenCalled();
    });

    it('should handle exceptions when fetching categories', async () => {
      const error = new Error('Database error');
      mockCategoryRepository.find.mockRejectedValue(error);

      await expect(categoryService.findAll()).rejects.toThrow('Database error');
    });
  });

  describe('findOne', () => {
    it('should return a category by ID', async () => {
      const category = { id: 1, name: 'Category1' };
      mockCategoryRepository.findOne.mockResolvedValue(category);

      expect(await categoryService.findOne(1)).toEqual(category);
      expect(mockCategoryRepository.findOne).toHaveBeenCalledWith({
        where: { id: 1 },
      });
    });

    it('should throw a NotFoundException if no category is found', async () => {
      mockCategoryRepository.findOne.mockResolvedValue(null);

      await expect(categoryService.findOne(999)).rejects.toThrow(
        new NotFoundException('Category with ID 999 not found'),
      );
    });
  });

  describe('update', () => {
    it('should successfully update a category', async () => {
      const updateCategoryDto = { name: 'Updated Name' };
      const updatedCategory = { id: 1, name: 'Updated Name' };
      mockCategoryRepository.update.mockResolvedValue({ affected: 1 });
      mockCategoryRepository.findOne.mockResolvedValue(updatedCategory);

      expect(await categoryService.update(1, updateCategoryDto)).toEqual(
        updatedCategory,
      );
      expect(mockCategoryRepository.update).toHaveBeenCalledWith(
        1,
        updateCategoryDto,
      );
      expect(mockCategoryRepository.findOne).toHaveBeenCalledWith({
        where: { id: 1 },
      });
    });

    it('should throw a NotFoundException if no category is found to update', async () => {
      const updateCategoryDto = { name: 'Updated Name' };
      mockCategoryRepository.update.mockResolvedValue({ affected: 0 });

      await expect(
        categoryService.update(999, updateCategoryDto),
      ).rejects.toThrow(
        new NotFoundException('Category with ID 999 not found'),
      );
    });
  });

  describe('remove', () => {
    it('should successfully remove a category', async () => {
      mockCategoryRepository.delete.mockResolvedValue({ affected: 1 });

      await categoryService.remove(1);
      expect(mockCategoryRepository.delete).toHaveBeenCalledWith(1);
    });

    it('should throw a NotFoundException if no category is found to remove', async () => {
      mockCategoryRepository.delete.mockResolvedValue({ affected: 0 });

      await expect(categoryService.remove(999)).rejects.toThrow(
        new NotFoundException('Category with ID 999 not found'),
      );
    });
  });
});
