function equalObject(x, y) {
  let in1 = x instanceof Object;
  let in2 = y instanceof Object;
  if (!in1 || !in2) {
    return x === y;
  }
  if (Object.keys(x).length !== Object.keys(y).length) {
    return false;
  }
  for (let p in x) {
    let a = x[p] instanceof Object;
    let b = y[p] instanceof Object;
    if (a && b) {
      return equalObject(x[p], y[p]);
    } else if (x[p] !== y[p]) {
      return false;
    }
  }
  return true;
}
