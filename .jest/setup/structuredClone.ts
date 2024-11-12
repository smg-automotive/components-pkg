Object.defineProperty(global, 'structuredClone', {
  writable: true,
  value: (val: unknown) => JSON.parse(JSON.stringify(val)),
});
