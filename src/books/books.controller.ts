import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Book } from './book.entity';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BooksController {
  constructor(private bookService: BooksService) {}

  @Get()
  async getAllBooks(): Promise<Book[]> {
    return this.bookService.findAll();
  }

  @Post()
  createBook(@Body() body: CreateBookDto): Promise<Book> {
    const user = {
      id: 'e61bd32d-8e8a-4ae3-a52d-1ca329f855ca',
      email: 'test@gmail.com',
      password: '12345678',
    };

    return this.bookService.create(body, user);
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Book> {
    return await this.bookService.findOne(id);
  }

  @Put(':id')
  async updateBook(
    @Param('id') id: string,
    @Body() body: UpdateBookDto,
  ): Promise<Book> {
    return this.bookService.update(id, body);
  }

  @Delete(':id')
  async deleteBook(@Param('id') id: string) {
    return this.bookService.remove(id);
  }
}
