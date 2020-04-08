export const getAlphabet = () => {
  let i = 10;

  return [...new Array(26)].reduce(result => {
    result.push(i.toString(36));
    i++;
    return result;
  }, []);
};

export const isNumberOrLetter = el => new RegExp(/([a-z\d])/, 'gi').test(el);

export const getAdjustedAlphabet = (list, item) => {
  const index = list.indexOf(item.toLowerCase());
  if (index !== list.length - 1) {
    const beforeItem = list.slice(0, index);
    const afterItem = list.slice(index + 1);
    return [item, ...afterItem, ...beforeItem, item];
  } else {
    return [item, ... list];
  }
};
