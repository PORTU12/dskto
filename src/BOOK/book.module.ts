import { Module } from "@nestjs/common";
import { LoggingModule } from "src/logg/logg.module";
import { BookController } from "./book.controller";
import { BooksService } from "./book.service";


@Module({
    controllers: [BookController],
    providers: [BooksService]
})
export class BooksModule {

}