export const sum = (a: number, b: number) => a + b;


export const mult = (a: number, b: number) => a * b;


export const splitIntoWords = (sentense: string) => {
  return sentense
    .toLowerCase()
    .split(' ')
    .map(w => w.replace('!', '').replace('-', ''))
    .filter(w => w !== '')
};