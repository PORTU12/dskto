import { Controller, Get, Body, HttpCode, Post, Param } from "@nestjs/common";
import { LoggingService } from "src/logg/logg.service";
import { Book } from "./book.interface";
import { BooksService } from "./book.service";


@Controller('books')
export class BookController {
    constructor(private booksService: BooksService,
        private loggingService: LoggingService) { }

    @Get()
    @HttpCode(200)
    async findAll(): Promise<Book[]> {
        this.loggingService.logToConsole("Fetch All Request Received")
        return this.booksService.findAll()
    }


    @Post()
    @HttpCode(201)
    async create(@Body() book: Book) {
        this.loggingService.logToConsole("Create New Book Request Received: " + book)
        this.booksService.create(book);
    }
    @Get(':id')
    findOne(@Param() params): string {
        console.log(params.id);
        return `This action returns a #${params.id} cat`;
    }

}