function getRandomNumber(num1, num2) {
    let max = Math.max(num1, num2);
    let min = Math.min(num1, num2);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// export this method to be used in other files
module.exports.getRandomNumber = getRandomNumber;