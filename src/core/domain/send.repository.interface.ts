export interface KafkaRepositotyInterface {
  send(message: string, topic: string): any;
}
