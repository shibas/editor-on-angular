import * as Quill from 'quill';
import { CounterModule } from './counter.module';

Quill.register(
  'modules/counter', CounterModule
);

export default Quill;
