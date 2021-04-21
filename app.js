console.log('Hi');
// Write a function arabic that converts a Roman number (up to 1000) into an Arabic.
// arabic('CDLXXXIII') should return 483.

function arabic(n) {
  let a, b, c, o, t, h, firstStr = "", secondStr = "", thirdStr = "", oStr = "I", fStr = "V"; tStr = "X", lStr = "L", cStr = "C", dStr = "D", mStr = "M"; finalStr = "";

  o = Math.floor(n % 10);
  t = Math.floor(n / 10) % 10;
  h = Math.floor(n / 100) % 100;

  if (n === 0) {
    console.log("No Roman Numeral");
  }

  if (n === 1000) {
    console.log(mStr);
  }
  // For ones digit //
  if (o < 4) {
    firstStr = firstStr + oStr.repeat(o);
    a = firstStr;
  }
  else if (o === 4) {
    firstStr = firstStr + oStr + fStr;
    a = firstStr;
  }
  else if (o >= 5) {
    firstStr = firstStr + fStr + oStr.repeat(o - 5);
    a = firstStr;
  }

  //  End of ones digit //

  //  Start of tens digit //

  if (t < 4) {
    secondStr = secondStr + tStr.repeat(t);
    b = secondStr;
  }
  else if (t === 4) {
    secondStr = secondStr + tStr + lStr;
    b = secondStr;
  }
  else if (t >= 5 && t < 9) {
    secondStr = secondStr + lStr + tStr.repeat(t - 5);
    b = secondStr;
  }
  else {
    secondStr = secondStr + tStr + cStr;
    b = secondStr;
  }

  // End of tens digit //

  // Start of hundreds digit //
  if (h < 4) {
    thirdStr = thirdStr + cStr.repeat(t);
    c = thirdStr;
  }
  else if (h === 4) {
    thirdStr = thirdStr + cStr + dStr;
    c = thirdStr;
  }
  else if (h >= 5 && t < 9) {
    thirdStr = thirdStr + dStr + cStr.repeat(h - 5);
    c = thirdStr;
  }
  else {
    thirdStr = thirdStr + cStr + mStr;
    c = thirdStr;
  }


  finalStr = c + b + a;
  console.log(finalStr);

}


arabic(150);
// DCCCLXXVIII
// DCCCLXXVIII
// DCCLXXVIII