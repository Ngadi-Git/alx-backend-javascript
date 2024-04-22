export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  for (const employee of reportWithIterator) {
    result += employee.name + '|';
  }
  // Remove the last '|' character
  result = result.slice(0, -1);
  return result;
}
