import { createMap, Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { Category } from './entities/category.entity';
import { CategoryDto } from './dto/category.dto';

@Injectable()
export class CategoryMapper extends AutomapperProfile {
  constructor(
    @InjectMapper()
    mapper: Mapper,
  ) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, Category, CategoryDto);
      createMap(mapper, CategoryDto, Category);
    };
  }
}
