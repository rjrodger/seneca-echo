/* Copyright (c) 2010-2014 Richard Rodger */

"use strict";


var assert = require('assert')
var util   = require('util')

var seneca = require('seneca')({log:'silent'})
      .use('../echo.js')


describe('seneca.echo', function() {
  it('happy', function(fin) {
    seneca.act({role:'echo',foo:'bar'},function(err,out){
      assert.ok(null==err)
      assert.equal( 'bar', out.foo )
      fin()
    })
  })
})
