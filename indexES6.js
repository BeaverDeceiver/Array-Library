class ArrayLibrary {
  constructor() {}

  take(array, n) {
    return array.slice(0, n);
  }

  skip(array, n) {
    return array.slice(n);
  }

  map(array, callback) {
    return array.map(callback);
  }

  reduce(array, callback, initialValue) {
    return array.reduce(callback, initialValue);
  }

  filter(array, callback) {
    return array.filter(callback);
  }

  foreach(array, callback) {
    return array.forEach(callback);
  }

  chain(array) {
    const ctx = this;
    return {
      array: array,
      take: function (n) {
        array = ctx.take(array, n);
        return this;
      },
      skip: function (n) {
        array = ctx.skip(array, n);
        return this;
      },
      map: function (callback) {
        array = ctx.map(array, callback);
        return this;
      },
      reduce: function (callback, initialValue) {
        // ?
        array = ctx.reduce(array, callback, initialValue);
        return this;
      },
      filter: function (callback) {
        array = ctx.filter(array, callback);
        return this;
      },
      foreach: function (callback) {
        ctx.forEach(array, callback);
        return this;
      },
      value: function () {
        return array;
      },
    };
    // return new ArrayLibrary(array);
  }

  value() {
    return this.array;
  }
}
// export ArrayLibrary;
module.exports = {
  ArrayLibrary,
};
