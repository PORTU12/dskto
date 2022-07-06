import { Injectable } from "@nestjs/common";
import { Book } from "./book.interface";

@Injectable()
export class BooksService {
    findOne(id: number) {
        return this.books;
    }
    private readonly books: Book[] = [];

    create(book: Book) {
        console.log(book)
        this.books.push(book);
    }

    findAll(): Book[] {
        return this.books;
    }
}