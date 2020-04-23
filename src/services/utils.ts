const getRndIntegers = (min: number, max: number, length: number) => {
  const nums: number[] = [];
  for (let i = 0; i < length; i++) {
    nums.push(getRndInteger(min, max));
  }
  return nums;
};

const getRndInteger = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export { getRndIntegers };
