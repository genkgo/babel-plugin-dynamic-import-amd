define([], function () {
  'use strict';

  function getModule(path) {
    return new Promise(resolve => resolve(require(['test-module'])));
  }

  getModule().then(() => {});
});
