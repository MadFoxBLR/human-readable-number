module.exports = function toReadable (number) {
    
module.exports = function toReadable (number) {
    const str = String(number);

    let digits = new Map();
    digits.set(1, 'one').set(2, 'two').set(3, 'three').set(4, 'four').set(5, 'five').set(6, 'six').set(7, 'seven').
    set(8, 'eight').set(9, 'nine');
    let tens = new Map();
    tens.set(10, 'ten').set(11, 'eleven').set(12, 'twelve').set(13, 'thirteen').set(14, 'fourteen').set(15, 'fifteen').
    set(16, 'sixteen').set(17, 'seventeen').set(18, 'eighteen').set(19, 'nineteen');
    let decimals = new Map();
    decimals.set(20, 'twenty').set(30, 'thirty').set(40, 'forty').set(50, 'fifty').
    set(60, 'sixty').set(70, 'seventy').set(80, 'eighty').set(90, 'ninety');
    if (number === 0) return 'zero';
    if (str.length === 1 && str[0] !== 0) return digits.get(number);
    if (str.length === 2 && str[0] === '1') return tens.get(number);
    if (str.length === 2 && str[0] !== '1' && str[1] !== '0') return decimals.get(+(str[0] + 0)) + ' ' + digits.get(+str[1]);
    if (str.length === 2 && str[0] !== '1' && str[1] === '0') return decimals.get(number);
    if (str.length === 3 && str[1] !== '1' && str[1] !== '0' && str[2] !== '0') return digits.get(+str[0]) + ' ' + 'hundred' + ' ' + decimals.get(+(str[1] + 0)) + ' ' + digits.get(+str[2]);
    if (str.length === 3 && str[1] === '0' && str[2] !== '0') return digits.get(+str[0]) + ' ' + 'hundred' + ' ' + digits.get(+str[2]);
    if (str.length === 3 && str[1] === '1') return digits.get(+str[0]) + ' ' + 'hundred' + ' ' + tens.get(+(str[1] + str[2]));
    if (str.length === 3 && str[1] !== '0' && str[1] !== '1' && str[2] === '0') return digits.get(+str[0]) + ' ' + 'hundred' + ' ' + decimals.get(+(str[1] + 0));
    if (str.length === 3 && str[1] === '0' && str[2] === '0') return digits.get(+str[0]) + ' ' + 'hundred';
}

}
