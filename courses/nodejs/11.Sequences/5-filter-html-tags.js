import { l, isEmpty, head, tail, cons, reverse, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line
import { make, append, node, value, is, toString as htmlToString, map } from 'hexlet-html-tags'; // eslint-disable-line

// BEGIN (write your solution here)
export const filter1 = (func, elements) => {
  if (isEmpty(elements)) {
    return l();
  }

  const current = head(elements);
  const tailElements = tail(elements);
  if (func(current)) {
    return cons(current, filter1(func, tailElements));
  }
  return filter1(func, tailElements);
};

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

export const quotes = elements => map(item => value(item), filter(item => is('blockquote', item), elements));

// END

export const removeHeaders = (elements) => {
  if (isEmpty(elements)) {
    return l();
  }

  const element = head(elements);
  const tailElements = tail(elements);
  if (is('h1', element)) {
    return removeHeaders(tailElements);
  }
  return cons(element, removeHeaders(tailElements));
};
