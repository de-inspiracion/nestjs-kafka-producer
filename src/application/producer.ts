import { Inject } from '@nestjs/common';
import { ProducerInterface } from 'src/core/domain/producer.interface';
import { KafkaRepositotyInterface } from 'src/core/domain/send.repository.interface';

export class ProducerKafka implements ProducerInterface {
  constructor(
    @Inject('kafkarepository')
    private kafkaRepository: KafkaRepositotyInterface,
  ) {}
  sendMessage(message: string, topic: string) {
    return this.kafkaRepository.send(message, topic);
  }
}
