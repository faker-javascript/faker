import {expectType} from 'tsd';
import faker from './index.js';

expectType<boolean>(faker.boolean());
expectType<number>(faker.age());
expectType<string>(faker.animal());
expectType<string>(faker.gender());
expectType<string>(faker.string());
expectType<string>(faker.letter());
expectType<string>(faker.profession());
expectType<string>(faker.ip());
expectType<string>(faker.superhero());
expectType<number>(faker.integer());
expectType<number>(faker.float());
expectType<string>(faker.word());
expectType<string>(faker.sentence());
expectType<string>(faker.paragraph());
