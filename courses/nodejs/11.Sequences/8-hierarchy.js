// eslint-disable-next-line
import { l, cons as consList, isList, isEmpty, head, tail, concat, toString as listToString } from 'hexlet-pairs-data';
// eslint-disable-next-line
import { is, toString as htmlToString, hasChildren, children, filter, reduce } from 'hexlet-html-tags';

// BEGIN (write your solution here)
const select = (tagName, html) => {
  const func = (element, acc) => {
    if (!hasChildren(element)) {
      return is(tagName, element) ? concat(acc, l(element)) : acc;
    }
    const list2 = is(tagName, element) ? consList(element, acc) : acc;
    return concat(select(tagName, children(element)), list2);
  };
  return reduce(func, l(), html);
};
export default select;
// END
