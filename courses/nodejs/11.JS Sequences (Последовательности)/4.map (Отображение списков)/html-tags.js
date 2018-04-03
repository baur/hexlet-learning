import { l, isEmpty, head, tail, cons, reverse, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line
import { name, value, node, is, toString as htmlToString } from 'hexlet-html-tags'; // eslint-disable-line
import { reverse as reverseStr } from './strings'; // eslint-disable-line

// BEGIN (write your solution here)
export const map = (func, elements) => {
  const mapIter = (items, acc) => {
    if (isEmpty(items)) {
      return reverse(acc);
    }
    const newElement = func(head(items));
    return mapIter(tail(items), cons(newElement, acc));
  };
  return mapIter(elements, l());
};

export const mirror = elements => map(e => node(name(e), reverseStr(value(e))), elements);
// END

export const b2p = (elements) => {
  if (isEmpty(elements)) {
    return l();
  }

  let newElement;
  const element = head(elements);
  if (is('blockquote', element)) {
    newElement = node('p', value(element));
  } else {
    newElement = element;
  }

  return cons(newElement, b2p(tail(elements)));
};