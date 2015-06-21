/* Copyright (c) 2010-2015 Richard Rodger, MIT License */

"use strict";


var assert = require('assert')
var util   = require('util')

var seneca = require('seneca')({
  log:'test'
}).use('../echo.js')


describe('seneca.echo', function() {
  it('happy', function(fin) {
    seneca
      .error(fin)
      .act({role:'echo',foo:'bar'},function(err,out){
        assert.ok(null==err)
        assert.equal( 'bar', out.foo )
        fin()
      })
  })
})
