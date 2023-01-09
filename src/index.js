module.exports = function toReadable (num) {
    let a = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let c = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let result = '';
    num = String(num);
    num == 0 ? result += 'zero' :
        num.length == 1 ? result += a[num] : 
        num.length == 2 & num.slice(0, 1) == 1 ? result += c[num.slice(-1)] :
        num.length == 2 & num.slice(-1) == 0 ? result += b[num.slice(0, 1)] :
        num.length == 2 & num.slice(0, 1) !== 1 & num.slice(-1) !== 0? result += b[num.slice(0, 1)] + ' ' + a[num.slice(-1)] : 
        num.length == 3 & num.slice(1, 2) == 1 ? result += a[num.slice(0, 1)] + ' hundred' + ' ' + c[num.slice(-1)] :
        num.length == 3 & num.slice(1, 2) == 0 & num.slice(-1) == 0 ? result += a[num.slice(0, 1)] + ' hundred' :
        num.length == 3 & num.slice(1, 2) == 0 & num.slice(-1) !== 0 ? result += a[num.slice(0, 1)] + ' hundred' + ' ' + a[num.slice(-1)]:
        result += a[num.slice(0, 1)] + ' hundred' + ' ' + b[num.slice(1, 2)] + ' ' + a[num.slice(-1)];
    return result.trim();
}
