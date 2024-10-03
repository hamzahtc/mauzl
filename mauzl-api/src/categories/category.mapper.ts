import { plainToInstance } from 'class-transformer';
import { Category } from './entities/category.entity';
import { CategoryDto } from './dto/category.dto';

export class CategoryMapper {
  static toDto(category: Category): CategoryDto {
    return plainToInstance(CategoryDto, category, {
      excludeExtraneousValues: true,
    });
  }

  static toEntity(categoryDto: CategoryDto): Category {
    return plainToInstance(Category, categoryDto, {
      excludeExtraneousValues: true,
    });
  }

  static toDtoArray(categories: Category[]): CategoryDto[] {
    return categories.map((category) => this.toDto(category));
  }

  static toEntityArray(categoryDtos: CategoryDto[]): Category[] {
    return categoryDtos.map((categoryDto) => this.toEntity(categoryDto));
  }
}
