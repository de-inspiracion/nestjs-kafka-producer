import { Module } from '@nestjs/common';
import { ClientKafka, ClientsModule, Transport } from '@nestjs/microservices';
import { ProducerKafka } from 'src/application/producer';
import { KafkaRepositoty } from './kafka.repository';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'KAFKA_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'test',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'test-consumer',
          },
        },
      },
    ]),
    KafkaModule,
  ],
  providers: [
    ProducerKafka,
    ClientKafka,
    { provide: 'kafkarepository', useClass: KafkaRepositoty },
  ],
  exports: [ProducerKafka],
})
export class KafkaModule {}
