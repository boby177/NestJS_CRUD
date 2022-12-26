import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  //   Post Product API
  @Post()
  addProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ): any {
    const generatedId = this.productsService.insertProduct(
      prodTitle,
      prodDesc,
      prodPrice,
    );
    return { id: generatedId };
  }

  //   Get All Products API
  @Get()
  getAllProducts() {
    return this.productsService.getProducts();
  }

  //   Get Product API
  @Get(':id')
  getProduct(@Param('id') prodId: string) {
    return this.productsService.getSingleProduct(prodId);
  }

  //   Update Product API
  @Patch(':id')
  updateProduct(
    @Param('id') prodId: string,
    @Body('title') prodTitle: string,
    @Body('description') prodDescription: string,
    @Body('price') prodPrice: number,
  ) {
    this.productsService.updateProduct(
      prodId,
      prodTitle,
      prodDescription,
      prodPrice,
    );
    return null;
  }

  //   Delete Product API
  @Delete()
  removeProduct(@Param('id') prodId: string) {
    this.productsService.deleteProduct(prodId);
    return null;
  }
}
