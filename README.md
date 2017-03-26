# Priority Queue

A very simple priority-queue

### Example Usage

```js
let q = new Queue();
q.enqueue({foo: 'bar'}, 'foo_bar', 10);
q.enqueue({foo: 'bu'}, 'foo_bu', 5);
q.enqueue({foo: 'best'}, 'foo_best', 1);

// q.nodes = [ { key: 'foo_best', value: { foo: 'best' }, priority: 1 },
// { key: 'foo_bu', value: { foo: 'bu' }, priority: 5 },
// { key: 'foo_bar', value: { foo: 'bar' }, priority: 10 } ]

```

## Testing

``
npm test
``



