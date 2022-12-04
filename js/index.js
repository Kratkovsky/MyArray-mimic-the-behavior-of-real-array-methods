'use strict';
class MyArray {
  constructor() {
    this.length = 0;
  }
  // создаем собственные аналоги методов массива

  push(...elems) {
    // добавляес элементы в конец массива
    for (let i = 0; i < elems.length; i++) {
      this[this.length++] = elems[i];
    }
    //  возвращаем новую длину массива
    return this.length;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }

    const deletedValue = this[this.length - 1];
    delete this[--this.length];
    return deletedValue;
  }

  concat(...items) {
    // 1. Создаем новый массив.
    const newArray = new MyArray();
    // 2. Заполняем новый массив элементами из старого.
    for (let i = 0; i < this.length; i++) {
      // newArray[newArray.length++] = this[i];
      newArray.push(this[i]);
    }
    // 3. Кладем все аргументы, которые нам дали.
    for (let i = 0; i < items.length; i++) {
      // Проверяем является ли элемент экземпляром MyArr.
      if (MyArray.isMyArr(items[i])) {
        // если да, то закидываем содержание этого MyArr.
        for (let j = 0; j < items[i].length; j++) {
          newArray.push(items[i][j]);
        }
      }
      // если нет, то просто его закидываеми,
      else newArray.push(items[i]);
    }
    // 4. Возвращаем массив.
    return newArray;
  }
  // делаем свой аналог итератора
  [Symbol.iterator]() {
    const context = this; // конкретный массив
    let i = 0; // текущий индекс
    return {
      next() {
        return {
          done: i >= context.length, // проверка закончили обход или нет
          value: context[i++], // текущее значение
        };
      },
    };
  }

  static isMyArr(obj) {
    return obj instanceof MyArray;
  }
}

/*
Добавить к имеющимуся классу MyArray следующие методы, имитирующие поведения реальных методов массива:
- unshift
- shift
Bonus task:
добавить один из следующих методов:
- forEach
- map
- filter
- reverse
*/