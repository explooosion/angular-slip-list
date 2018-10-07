import List from '../models/list';

const MockLists: Array<List> = [
  {
    name: 'Robby',
    message: 'Hi! Where are you going now?',
    time: '2m ago',
    select: false,
  },
  {
    name: 'Annie',
    message: 'Hello Dux, how are you today?',
    time: '3m ago',
    select: false,
  },
  {
    name: 'Andy',
    message: 'We have a meeting tonight.',
    time: 'yesterday',
    select: false,
  },
  {
    name: 'Jack',
    message: 'Hi Robby, where are you?',
    time: '2d ago',
    select: false,
  },
  {
    name: 'Peny',
    message: 'I will go to school this weekend, how about you?',
    time: '4d ago',
    select: false,
  },
];

export default MockLists;
