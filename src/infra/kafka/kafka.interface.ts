import { Observable } from 'rxjs';

export interface KafkaInterface {
  send: (message: string, topic: string) => Observable<any>;
}
