html-tags.js
Реализуйте и экспортируйте функцию map для библиотеки html-tags. Реализация должна быть построена с использованием итеративного процесса (без циклов, на основе рекурсии). Эта функция подобна той что описывалась в теории для списков, только текущая реализация работает с html-списком. Параметры и их порядок у функций аналогичный. Первый - функция-трансформер, второй - коллекция (в нашем случае список html-тегов).

import { make, append, node, value, is } from 'hexlet-html-tags';

const dom1 = make();
const dom2 = append(dom1, node('h1', 'scheme'));
const dom3 = append(dom2, node('p', 'is a lisp'));

// Отображение в результате которого в html-списке заменяются теги h1 на теги h2
const processedDom = map((element) => {
  if (is('h1', element)) {
    return node('h2', value(element));
  }
  return element;
}, dom3);
Реализуйте и экспортируйте функцию mirror, которая переворачивает содержимое тегов, так чтобы читать его нужно было справа налево, а не слева направо.

import { make, append, node, value, is, toString as htmlToString } from 'hexlet-html-tags';

const dom1 = make();
const dom2 = append(dom1, node('h1', 'scheme'));
const dom3 = append(dom2, node('p', 'is a lisp'));

htmlToString(mirror(dom3));
Экспортируйте все созданные функции.

Примечание
Функцию b2p можно использовать для наглядного сопоставления частного варианта операции отображения с обобщённой реализацией операции отображения (собственно, map).