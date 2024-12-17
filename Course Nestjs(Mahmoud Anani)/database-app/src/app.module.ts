import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { ProductModule } from './product/product.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(), // Configuration env
    TypeOrmModule.forRoot({
      name: 'sql_connection',
      type: process.env.DB_Type as any, // Database type
      host: process.env.DB_Host as any, // Database host
      port: process.env.DB_Port as any, // Default PostgreSQL port
      username: process.env.DB_Username as any, // Your PostgreSQL username
      password: process.env.DB_Password as any, // Your PostgreSQL password
      database: process.env.DB_Database as any, // Your database name
      // entities: [__dirname + '/../**/*.entity.{js,ts}'], // Entity files path
      autoLoadEntities: true,
      synchronize: process.env.DB_Database as any, // Auto-sync the database schema (disable in production)
    }),
    UserModule,
    DatabaseModule,
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
