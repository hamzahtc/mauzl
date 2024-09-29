import { PartialType } from '@nestjs/mapped-types';
import { CreateWishListDto } from './create-wish-list.dto';

export class UpdateWishListDto extends PartialType(CreateWishListDto) {}
