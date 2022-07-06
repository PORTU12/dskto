import { Controller, Get, Req, Res, Post, Param, HttpCode, Header } from "@nestjs/common";
import {Request} from 'express'

@Controller('abc')
export class ABCController {
    @Get()
    findAll(): string {
        return 'This action returns data from ABC Controller';
    }

    @Get('/library-approach')
    findUsingLibrary(@Res() response): string {
        return response.status(200).send('This action returns data from ABC Controller Library Approach')
    }
    @Get('/request-examples')
    requestExample(@Req() request: Request) {
        console.log('This shows the request example');
    }
@Get('/employees/:id')
findOne(@Param() params): string {
    console.log(params.id);
    return `This action returns a #${params.id} employee`;
}
@Get('/employ*es/:id')
findOneUsingToken(@Param('id') id: string): string {
    console.log(id);
    return `This action returns a #${id} employee`;
}
@Post('/post-example')
@HttpCode(204)
@Header('Cache-Control', 'none')
postExample(): string {
   return 'This response is coming from POST Method'
}
    
}
