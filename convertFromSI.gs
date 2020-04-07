/**
 * Converts a number from SI notation
 *
 * @param {string} input value you want to convert
 * @param {string} unit unit the number should is in 
 * @return converted value
 * @customfunction
 */
function convertFromSI(input='', unit=''){
  var multiplicity = 0;
  var prefixes = {
    'G': '9',
    'M': '6',
    'k': '3',
    'm': '-3',
    'μ': '-6',
    'n': '-9',
    'p': '-12',
    'f': '-15'
  }
  input = input.toString();
  input = input.replace(unit,'');
  input = input.replace(',','.');
  if(Number(input)>1&&Number(input)<999){
    return Number(input);
  }
  for (var i = 0; i < input.length; i++) {
    if(input.charAt(i) in prefixes){
      multiplicity = Number(prefixes[input.charAt(i)]);
      input = input.replace(input.charAt(i),'');
    }
  }
  return Number(input)*Math.pow(10,multiplicity);
  //return input;
}
