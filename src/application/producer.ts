import { Inject } from '@nestjs/common';
import { ProducerInterface } from 'src/core/domain/producer.interface';
import { MessageInterface } from 'src/core/domain/message.interface';

export class ProducerKafka implements ProducerInterface {
  constructor(
    @Inject('kafkarepository')
    private kafkaRepository: MessageInterface,
  ) {}
  sendMessage(message: string, topic: string) {
    return this.kafkaRepository.send(message, topic);
  }
}
