var test = require('tape');
var multipoint = require('./')

test('point', function(t){
  t.deepEqual(multipoint([[0,0],[10,10]]), {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "MultiPoint",
      "coordinates": [
        [0,0],
        [10,10]
      ]
    }
  }, 'takes coordinates');

  t.deepEqual(multipoint([[0,0],[10,10]], {test: 23}), {
    "type": "Feature",
    "properties": {
      test: 23
    },
    "geometry": {
      "type": "MultiPoint",
      "coordinates": [
        [0,0],
        [10,10]
      ]
    }
  }, 'takes properties');


  t.throws(function(err){
    multipoint();
  }, 'throws error with no coordinates');

  t.end();
});
