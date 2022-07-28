/**
 * Return an array of pairs of numbers that sum to N
 * @param {Array} A an array of numbers
 * @param {Number} N an integer value
 */
function sumPairs(A, N) {
  // initialize a new Map named numbers
  const numbers = new Map();
  // initialize a new Map named solution
  const solution = new Map();

  // for each element e in A do:
  for (let e of A) {
    //    add e to numbers
    numbers.set(e, e);
  }

  // for each element e in A do;
  for (let e of A) {
    //   calculate diff = N - e
    let diff = N - e;
    //   if diff is not equal to e then  (1)
    if (diff !== e) {
      //      look up diff in numbers
      //      if diff is in numbers then
      if (numbers.has(diff)) {
        //        add [e, diff] to solution (2)
        solution.set(Math.min(e, diff), Math.max(e, diff));
      }
    }
  }
  // convert solution to an array and return it
  return Array.from(solution);
}

module.exports = sumPairs;
