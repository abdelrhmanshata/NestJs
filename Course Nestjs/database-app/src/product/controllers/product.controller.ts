import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  // ================================================================= //
  // @desc getAllProducts
  // @route GET /products
  // @access Public
  @Get()
  getAllProducts() {
    return this.productService.getAllProducts();
  }
  // ================================================================= //
  // @desc get Product By ID
  // @route GET /products/:productId
  // @access Public
  @Get(':productID')
  getProduct(@Param('productID') productID: string) {
    return this.productService.getProductByID(productID);
  }
  // ================================================================= //
  // @desc create new Product
  // @route Post /products
  // @access Public
  @Post()
  addProduct(
    @Body(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    )
    body: CreateProductDto,
  ) {
    return this.productService.createProduct(body);
  }
  // ================================================================= //
  // @desc Update Product
  // @route Patch /products/:productId
  // @access Public
  @Patch(':productID')
  updateProduct(
    @Param('productID') productID: string,
    @Body(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    )
    body: UpdateProductDto,
  ) {
    return this.productService.updateProduct(productID, body);
  }
  // ================================================================= //
  // @desc Delete Product
  // @route Delete /products/:productId
  // @access Public
  @Delete(':productID')
  deleteProduct(@Param('productID') productID: string) {
    return this.productService.deleteProduct(productID);
  }
}
