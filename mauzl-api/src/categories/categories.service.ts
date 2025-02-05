import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryMapper } from './category.mapper';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {
    this.logger = new Logger('CategoryService');
  }

  private readonly logger: Logger;

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    try {
      const category = this.categoryRepository.create(createCategoryDto);
      const savedCategory = await this.categoryRepository.save(category);
      this.logger.log(
        `Category created successfully with ID: ${savedCategory.id}`,
      );
      return savedCategory;
    } catch (error) {
      this.logger.error(`Failed to create category: ${error.message}`);
      throw error;
    }
  }

  async findAll() {
    try {
      const categories = await this.categoryRepository.find();
      this.logger.log(`Fetched all categories, count: ${categories.length}`);
      return CategoryMapper.toDtoArray(categories);
    } catch (error) {
      this.logger.error(`Failed to fetch categories: ${error.message}`);
      throw error;
    }
  }

  async findOne(id: number): Promise<Category> {
    try {
      const category = await this.categoryRepository.findOne({ where: { id } });
      if (!category) {
        this.logger.warn(`Category with ID ${id} not found`);
        throw new NotFoundException(`Category with ID ${id} not found`);
      }
      this.logger.log(`Found category with ID: ${id}`);
      return category;
    } catch (error) {
      this.logger.error(
        `Error finding category with ID ${id}: ${error.message}`,
      );
      throw error;
    }
  }

  async update(
    id: number,
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<Category> {
    try {
      const result = await this.categoryRepository.update(
        id,
        updateCategoryDto,
      );
      if (result.affected === 0) {
        this.logger.warn(`No category found with ID ${id}, nothing to update`);
        throw new NotFoundException(`Category with ID ${id} not found`);
      }
      this.logger.log(`Category updated successfully with ID: ${id}`);
      return this.findOne(id);
    } catch (error) {
      this.logger.error(
        `Failed to update category with ID ${id}: ${error.message}`,
      );
      throw error;
    }
  }

  async remove(id: number): Promise<void> {
    try {
      const result = await this.categoryRepository.delete(id);
      if (result.affected === 0) {
        this.logger.warn(`No category found with ID ${id}, nothing to remove`);
        throw new NotFoundException(`Category with ID ${id} not found`);
      }
      this.logger.log(`Category removed with ID: ${id}`);
    } catch (error) {
      this.logger.error(
        `Failed to remove category with ID ${id}: ${error.message}`,
      );
      throw error;
    }
  }
}
