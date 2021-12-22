import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private repo: Repository<Book>,
  ) {}

  async findAll(): Promise<Book[]> {
    return await this.repo.find();
  }

  create(book: Book, user): Promise<Book> {
    const bookObj = this.repo.create({
      name: book.name,
      price: book.price,
      author: book.author,
      user: user.id,
    });

    return this.repo.save(bookObj);
  }

  async findOne(id: string): Promise<Book> {
    const book = await this.repo.findOne(id);

    if (!book) {
      throw new NotFoundException('Book not found.');
    }

    return book;
  }

  async update(id: string, body: Book): Promise<Book> {
    const book = await this.repo.findOne(id);

    if (!book) {
      throw new NotFoundException('Book not found.');
    }

    Object.assign(book, body);

    return this.repo.save(book);
  }

  async remove(id: string) {
    const book = await this.repo.findOne(id);

    if (!book) {
      throw new NotFoundException('Book not found.');
    }

    return this.repo.remove(book);
  }
}
