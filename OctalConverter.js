// Could be done with .toString(8), left as algo as an example
function decToOctal(num) {
  if (num == 0)
    return 0

  var oct = ''
  while (num != 0) {
    oct = num % 8 + oct;
    num = Math.floor(num / 8);
  }
  return parseInt(oct);
}

module.exports = { decToOctal }