/**
 * Creates a {@link MultiPoint} based on a
 * coordinate array. Properties can be added optionally.
 *
 * @module turf/multipoint
 * @category helper
 * @param {Array<Array<Number>>} coordinates an array of Positions
 * @param {Object=} properties an Object of key-value pairs to add as properties
 * @returns {Feature<LineString>} a LineString feature
 * @throws {Error} if no coordinates are passed
 * @example
 * var multiPt = turf.multipoint([[0,0],[10,10]]);
 *
 * //=multiPt
 *
 */
module.exports = function(coordinates, properties) {
  if (!coordinates) {
    throw new Error('No coordinates passed');
  }
  return {
    "type": "Feature",
    "geometry": {
      "type": "MultiPoint",
      "coordinates": coordinates
    },
    "properties": properties || {}
  };
};