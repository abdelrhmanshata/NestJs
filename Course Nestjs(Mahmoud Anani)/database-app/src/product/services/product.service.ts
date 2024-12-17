import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { Product } from '../interfaces/product.interface';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCT_MODEL')
    private productModel: Model<Product>,
  ) {}

  async createProduct(product: CreateProductDto): Promise<Product> {
    const newProduct = await this.productModel.create(product);
    return newProduct;
  }

  async getAllProducts(): Promise<{ products: Product[]; count: number }> {
    const allProducts = await this.productModel.find({});
    return {
      products: allProducts,
      count: allProducts.length,
    };
  }

  async getProductByID(productID: string): Promise<Product> {
    const product = await this.productModel
      .findById(productID)
      .select('-_id name category count');
    if (!product) throw new NotFoundException();
    return product;
  }

  async updateProduct(
    productID: string,
    product: UpdateProductDto,
  ): Promise<Product> {
    const updatedProduct = await this.productModel
      .findByIdAndUpdate(productID, product, { new: true })
      .select('-_id name category count');
    if (!updatedProduct) throw new NotFoundException();
    return updatedProduct;
  }

  async deleteProduct(productID: string): Promise<{ message: string }> {
    const deletedProduct = await this.productModel.findByIdAndDelete(productID);
    if (!deletedProduct) throw new NotFoundException();
    return {
      message: 'Delete product Successfully',
    };
  }
}
