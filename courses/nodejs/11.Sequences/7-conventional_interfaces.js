import { toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line
import { node, value, is, toString as htmlToString, map, filter, reduce } from 'hexlet-html-tags'; // eslint-disable-line

import { wc } from './utils'; // eslint-disable-line

// BEGIN (write your solution here)
export const extractHeaders = (elements) => {
  const filtered = filter(item => is('h2', item), elements);
  const result = map(item => node('p', value(item)), filtered);
  return result;
};

export const wordsCountMyFstSolution = (tagName, word, elements) => {
  const func = (item, acc) => (is(tagName, item) ? acc + wc(word, value(item)) : acc);
  return reduce(func, 0, elements);
};

export const wordsCount = (tagName, word, elements) => {
  const filtered = filter(item => is(tagName, item), elements);
  const wordList = map(item => value(item), filtered);
  const func = (item, acc) => acc + wc(word, item);
  return reduce(func, 0, wordList);
};
// END
