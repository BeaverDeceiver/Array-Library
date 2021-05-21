class ArrayLibrary {
  constructor(array) {
    this.array = array;
  }

  take(array, n) {
    if (n === undefined) {
      [array, n] = [this.array, array];
      array.slice(0, n);
      return this;
    }
    return array.slice(0, n);
  }

  skip(array, n) {
    if (n === undefined) {
      [array, n] = [this.array, array];
      array.slice(n);
      return this;
    }
    return array.slice(n);
  }

  map(array, callback) {
    if (callback === undefined) {
      [array, callback] = [this.array, array];
      array.map(callback);
      return this;
    }
    return array.map(callback);
  }

  reduce(array, callback, initialValue) {
    if (callback === undefined) {
      [array, callback, initialValue] = [this.array, array, callback];
      array.reduce(callback, initialValue);
      return this;
    }
    return array.reduce(callback, initialValue);
  }

  filter(array, callback) {
    if (callback === undefined) {
      [array, callback] = [this.array, array];
      array.filter(callback);
      return this;
    }
    return array.filter(callback);
  }

  foreach(array, callback) {
    if (callback === undefined) {
      [array, callback] = [this.array, array];
      array.forEach(callback);
      return this;
    }
    return array.forEach(callback);
  }

  chain(array) {
    this.array = array;
    return new ArrayLibrary(array);
  }

  value() {
    return this.array;
  }
}
// export ArrayLibrary;
module.exports = {
  ArrayLibrary,
};
