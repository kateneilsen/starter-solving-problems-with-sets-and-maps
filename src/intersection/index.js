function intersection(a, b) {
  // initialize a new map
  const map = new Map();
  //initialize a new set
  const results = new Set();

  //for each element e of a do:
  for (let e of a) {
    //add e to the map
    map.set(e, e);
  }
  //for each element e of b do:
  for (let e of b) {
    //if e is the map then:
    if (map.has(e)) {
      //add e to the set
      results.add(e);
    }
  }
  //convert the set to an array and return
  return Array.from(results);
}

module.exports = intersection;
