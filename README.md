# turf-multipoint

[![build status](https://secure.travis-ci.org/Turfjs/turf-multipoint.png)](http://travis-ci.org/Turfjs/turf-multipoint)

turf multipoint module


### `turf.multipoint(coordinates, properties)`

Creates a Feature based on a
coordinate array. Properties can be added optionally.


### Parameters

| parameter     | type                         | description                                                   |
| ------------- | ---------------------------- | ------------------------------------------------------------- |
| `coordinates` | Array\.\<Array\.\<Number\>\> | an array of Positions                                         |
| `properties`  | Object                       | _optional:_ an Object of key-value pairs to add as properties |


### Example

```js
var multiPt = turf.multipoint([[0,0],[10,10]]);

//=multiPt
```


**Returns** `Feature.<MultiPoint>`, a MultiPoint feature

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-multipoint
```

## Tests

```sh
$ npm test
```


