function createHierarchylib (execlib) {
  'use strict';

  var lib = execlib.lib;

  return require ('allex_hierarchymixinslowlevellib')(lib.inherit, lib.DList, lib.Gettable, lib.Settable);
}

module.exports = createHierarchylib;
