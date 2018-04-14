export const filter = (func, elements) => {
  const filterIter = (items, acc) => {
    if (isEmpty(items)) {
      return reverse(acc);
    }

    const current = head(items);
    const tailElements = tail(items);
    if (func(current)) {
      return filterIter(tailElements, cons(current, acc));
    }
    return filterIter(tailElements, acc);
  };

  return filterIter(elements, l());
};


export const reduce = (func, initAcc, elements) => {
  const iter = (items, acc) => {
    if (isEmpty(items)) {
      return acc;
    }
    const item = head(items);
    return iter(tail(items), func(item, acc));
  };
  return iter(elements, initAcc);
};

export const emptyTagsCount = (tagName, elements) => {
  const counter = (item, acc) => (is(tagName, item) ? acc + 1 : acc);
  return reduce(counter, 0, filter(e => value(e) === '', elements));
};
