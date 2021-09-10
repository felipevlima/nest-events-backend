import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('/events')
export class EventsController {
  @Get()
  findAll() {
    return;
  }

  @Get()
  findOne() {
    return;
  }

  @Post()
  create() {
    return;
  }

  @Put()
  update() {
    return;
  }

  @Delete()
  remove() {
    return;
  }
}
