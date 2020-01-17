const { observable, autorun } = require('mobx');

const a = {
  p1: 'v1',
  p2: [
    { id: 1 },
    { id: 2 },
    { id: 3 },
  ]
};

const b = observable(a);

const c = {
  get p2() { return b.p2.map(x => ({ ...x, id2: x.id * 2 })); }
};

const d = {
  get id() { return c.p2[1].id; },
  get id2() { return c.p2[1].id2; }
}

autorun(() => {
  console.log(d.id);
  console.log(d.id2);
});

b.p2[1].id = '4';
b.p2[1].id = '5';

setTimeout(() => null, 3000);
