import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { KafkaInterface } from './kafka.interface';

@Injectable()
export class KafkaRepositoty implements KafkaInterface {
  constructor(
    @Inject('KAFKA_SERVICE') private readonly clientKafka: ClientKafka,
  ) {}
  send(message, topic) {
    return this.clientKafka.emit(topic, message);
  }
}
