// Generated by CoffeeScript 1.3.1
/*
Copyright (c) 2012 [DeftJS Framework Contributors](http://deftjs.org)
Open source under the [MIT License](http://en.wikipedia.org/wiki/MIT_License).
*/

/*
Jasmine test suite for Deft.mixin.Injectable
*/

describe('Deft.mixin.Injectable', function() {
  return it('should trigger injection before the target class constructor is executed', function() {
    var exampleInstance;
    Ext.define('ExampleClass', {
      mixins: ['Deft.mixin.Injectable'],
      inject: ['identifier'],
      constructor: function() {
        expect(Deft.Injector.inject).toHaveBeenCalledWith(this.inject, this, false);
        return this;
      }
    });
    spyOn(Deft.Injector, 'inject').andCallFake(function() {});
    return exampleInstance = Ext.create('ExampleClass');
  });
});
