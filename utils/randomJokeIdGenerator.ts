type RandomJokeIdGenrator = (
    lowerLimit: number,
    upperLimit: number,
    exclude?: number
) => number;

type RandomNumberWithLimit = (lowerLimit: number, upperLimit: number) => number;

const randomNumberWithLimit: RandomNumberWithLimit = (lowerLimit, upperLimit) =>
    lowerLimit + Math.ceil(Math.random() * upperLimit);

const randomJokeIdGenerator: RandomJokeIdGenrator = function (
    lowerLimit,
    upperLimit,
    exclude
) {
    let randomNumber: number | null = null;
    while (randomNumber === null || randomNumber === exclude) {
        randomNumber = randomNumberWithLimit(lowerLimit, upperLimit);
    }
    return randomNumber;
};

export default randomJokeIdGenerator;
