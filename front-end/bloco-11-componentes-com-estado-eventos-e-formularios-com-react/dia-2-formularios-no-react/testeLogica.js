function square_digit_chains(n) {
    const numbers = [];

    const arr = Array.from(String(n), Number);
    const squares = arr.map((number) => number ** 2);
    const sum = squares.reduce((acc, current) => acc + current)
    console.log(sum);
}

square_digit_chains(44)