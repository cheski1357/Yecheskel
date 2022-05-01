function wrapValue(n) {
    let local = n;
    return () => local;
  }
  
  let wrap1 = wrapValue(1);
  let wrap2 = wrapValue(2);
  console.log(wrap1());
  // → 1
  console.log(wrap2());
  // → 2

  function multiplier(factor) {
    return number => number * factor;
  }

  const quadr =  multiplier(4);
  console.log(quadr(5))

  let doh = "Doh";
console.log(typeof doh.toUpperCase);
// → function
console.log(doh.toUpperCase());
// → DOH