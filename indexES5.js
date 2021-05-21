function ArrayLibrary(array) {
  this.array = array;
  this.take = function (array, n) {
    if (n === undefined) {
      [array, n] = [this.array, array];
      array.slice(0, n);
      return this;
    }
    return array.slice(0, n);
  };

  this.skip = function (array, n) {
    if (n === undefined) {
      [array, n] = [this.array, array];
      array.slice(n);
      return this;
    }
    return array.slice(n);
  };

  this.map = function (array, callback) {
    if (callback === undefined) {
      [array, callback] = [this.array, array];
      array.map(callback);
      return this;
    }
    return array.map(callback);
  };

  this.reduce = function (array, callback, initialValue) {
    if (callback === undefined) {
      [array, callback, initialValue] = [this.array, array, callback];
      array.reduce(callback, initialValue);
      return this;
    }
    return array.reduce(callback, initialValue);
  };

  this.filter = function (array, callback) {
    if (callback === undefined) {
      [array, callback] = [this.array, array];
      array.filter(callback);
      return this;
    }
    return array.filter(callback);
  };

  this.foreach = function (array, callback) {
    if (callback === undefined) {
      [array, callback] = [this.array, array];
      array.forEach(callback);
      return this;
    }
    return array.forEach(callback);
  };

  this.chain = function (array) {
    this.array = array;
    return new ArrayLibrary(array);
  };

  this.value = function () {
    return this.array;
  };
}

// export ArrayLibrary;
module.exports = {
  ArrayLibrary,
};
