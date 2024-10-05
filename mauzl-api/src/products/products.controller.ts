import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  UseInterceptors,
  UploadedFiles,
  Query,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { BufferedFile } from '~minio-client/file.model';
import { ProductDto } from './dto/product.dto';
import { ApiExtraModels, ApiOkResponse, ApiQuery } from '@nestjs/swagger';
import { PaginatedProductDto } from './dto/products.dto';
import { ProductFilterDto, SortType } from './dto/product-filter.dto';

@Controller('products')
@ApiExtraModels(ProductDto)
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @UseInterceptors(FilesInterceptor('images'))
  create(
    @Body() createProductDto: CreateProductDto,
    @UploadedFiles() files: BufferedFile[],
  ) {
    return this.productsService.create(createProductDto, files);
  }

  @Get()
  @ApiOkResponse({ type: PaginatedProductDto })
  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'limit', required: false })
  @ApiQuery({ name: 'name', required: false })
  @ApiQuery({ name: 'minPrice', required: false, type: Number })
  @ApiQuery({ name: 'maxPrice', required: false, type: Number })
  @ApiQuery({ name: 'categoryId', required: false, type: Number })
  @ApiQuery({ name: 'sortBy', required: false })
  @ApiQuery({ name: 'statuses', required: false })
  findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
    @Query('name') name?: string,
    @Query('minPrice') minPrice?: number,
    @Query('maxPrice') maxPrice?: number,
    @Query('categoryId') categoryId?: number,
    @Query('sortBy') sortBy?: SortType,
    @Query('statuses') statuses?: string,
  ) {
    const filters: ProductFilterDto = {
      name,
      minPrice,
      maxPrice,
      categoryId,
      sortBy,
      statuses,
    };
    return this.productsService.findAll(page, limit, filters);
  }

  @Get(':id')
  @ApiOkResponse({ type: ProductDto })
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
