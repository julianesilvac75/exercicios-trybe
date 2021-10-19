// callback

const checker = (number, lotteryNumber) => {
    if (number === lotteryNumber) {
        return 'Parabéns, você ganhou!';
    }

    return 'Tente novamente';
}

// HOF

const lottery = (number, callback) => {
    const lotteryNumber = Math.round(Math.random() * (5 - 1) + 1);

    return callback(number, lotteryNumber);
}

console.log(lottery(4, checker));