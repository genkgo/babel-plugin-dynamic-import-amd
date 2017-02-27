define([], function () {
  'use strict';

  const testModule = new Promise(resolve => resolve(require(['test-module'])));
});
