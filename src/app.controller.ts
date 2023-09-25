import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { HateoasIndex } from './core/index-hateoas';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private haeoasIndex: HateoasIndex
  ) {}

  @Get()
  index(){
    return this.haeoasIndex.gerarLinksHateoas;
  }
}
