import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ProducerKafka } from './application/producer';

@Controller('topics')
export class AppController {
  ACCU = 1;
  constructor(
    private readonly appService: AppService,
    private producerKafka: ProducerKafka,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('test1')
  async sendMessageController() {
    const message = JSON.stringify({
      numero: this.ACCU,
    });
    this.ACCU++;
    return this.producerKafka.sendMessage(message, 'test1');
  }

  @Post('test2')
  async sendMessageController2() {
    const message = JSON.stringify({
      numero: this.ACCU,
    });
    this.ACCU++;
    return this.producerKafka.sendMessage(message, 'test2');
  }
}
