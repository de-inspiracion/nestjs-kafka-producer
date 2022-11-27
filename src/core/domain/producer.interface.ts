export interface ProducerInterface {
  sendMessage: (message: string, topic: string) => string;
}
