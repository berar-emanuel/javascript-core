export default function benchmark(sortFunction, data) {
  const startTime = performance.now();
  sortFunction([...data]);
  const endTime = performance.now();
  return endTime - startTime; // return execution time
}
