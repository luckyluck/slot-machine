export const getAlphabet = () => {
  let i = 10;

  return [...new Array(26)].reduce(result => {
    result.push(i.toString(36));
    i++;
    return result;
  }, []);
};

export const isNumberOrLetter = el => new RegExp(/([a-z\d])/, 'gi').test(el);
