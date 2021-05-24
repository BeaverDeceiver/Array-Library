function ArrayLibrary() {
  // this.array = array;
  this.take = function (array, n) {
    return array.slice(0, n);
  };

  this.skip = function (array, n) {
    return array.slice(n);
  };

  this.map = function (array, callback) {
    return array.map(callback);
  };

  this.reduce = function (array, callback, initialValue) {
    return array.reduce(callback, initialValue);
  };

  this.filter = function (array, callback) {
    return array.filter(callback);
  };

  this.foreach = function (array, callback) {
    return array.forEach(callback);
  };

  this.chain = function (array) {
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
  };

  this.value = function () {
    return this.array;
  };
}

// export ArrayLibrary;
module.exports = {
  ArrayLibrary,
};
