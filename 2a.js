const monthConverter = (function() {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return function(monthNumber) {
        if (isNaN(monthNumber)) {
            return "Bad Number";
        }
        const num = Math.floor(Number(monthNumber));
        if (num < 1 || num > 12) {
            return "Bad Number";
        }
        return months[num - 1];
    };
})();
console.log(monthConverter(1));        // "January"
console.log(monthConverter(12));       // "December"
console.log(monthConverter(5.7));      // "May" (decimal stripped)
console.log(monthConverter(0));        // "Bad Number"
console.log(monthConverter(13));       // "Bad Number"
console.log(monthConverter("abc"));     // "Bad Number"
console.log(monthConverter(-5));       // "Bad Number"
console.log(monthConverter(8.9));      // "August"
