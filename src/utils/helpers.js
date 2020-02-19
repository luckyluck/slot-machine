export const getAlphabet = () => {
  let i = 10;

  return [...new Array(26)].reduce(result => {
    result.push(i.toString(36));
    i++;
    return result;
  }, []);
};
