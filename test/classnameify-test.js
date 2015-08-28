'use strict';
var test = require('ava');
var classnameify = require('../src');

test('changes a component\'s CSS selector to the generated classname', function (assert) {
  var comps = {
    myButton: {
      fontSize: '10px',
      color: '#FFF',
      backgroundColor: '#CCC'
    }
  };
  assert.same(classnameify(comps)['._c66d44ad'], comps.myButton, 'The selector should have been switched');
  assert.end();
});

test('handles an array of declarations', function (assert) {
  var comps = [
    {
      myButton: {
        fontSize: '10px',
        color: '#FFF',
        backgroundColor: '#CCC'
      }
    },
    {
      component2: {
        'color': 'white',
        ':hover': {
          fontWeight: 'bold'
        }
      }
    }
  ];
  var classnameified = classnameify(comps);
  assert.false(Array.isArray(classnameified), 'The result should not be an array anymore');
  assert.same(classnameified['._c66d44ad'], comps[0].myButton, 'The first component\'s selector should be switched');
  assert.same(classnameified['._fd7f8823'], comps[1].component2, 'The second component\'s selector should be switched');
  assert.end();
});
