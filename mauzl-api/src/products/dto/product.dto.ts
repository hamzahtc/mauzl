import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { CategoryDto } from '~categories/dto/category.dto';

export class ProductDto {
  @AutoMap()
  @ApiProperty()
  id: number;

  @AutoMap()
  @ApiProperty()
  name: string;

  @AutoMap()
  @ApiProperty()
  description: string;

  @AutoMap()
  @ApiProperty()
  price: number;

  @AutoMap()
  @ApiProperty()
  stock: number;

  @AutoMap()
  @ApiProperty()
  category: CategoryDto;

  @AutoMap()
  @ApiProperty()
  images: string[];
}
