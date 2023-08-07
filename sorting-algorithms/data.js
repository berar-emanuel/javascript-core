const smallDataSet = Array.from({ length: 100 }, () =>
  Math.floor(Math.random() * 100)
);
const mediumDataSet = Array.from({ length: 1000 }, () =>
  Math.floor(Math.random() * 100)
);
const largeDataSet = Array.from({ length: 10000 }, () =>
  Math.floor(Math.random() * 100)
);

export { largeDataSet, mediumDataSet, smallDataSet };
