import { createMap, forMember, mapFrom, Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { ProductDto } from './dto/product.dto';

@Injectable()
export class ProductMapper extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(
        mapper,
        Product,
        ProductDto,
        forMember(
          (productDto) => productDto.category,
          mapFrom((product) => product.category),
        ),
        forMember(
          (productDto) => productDto.images,
          mapFrom((product) => product.images.map((image) => image.name)),
        ),
      );
      createMap(mapper, ProductDto, Product);
    };
  }
}
