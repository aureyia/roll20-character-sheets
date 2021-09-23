const _ = require('lodash');

module.exports = function toStylusObject(options) {
  const objectArray = options.object;
  const nameKey = options.nameKey;
  const blacklist = [...(options.blacklist || []), nameKey];
  const output = _.mapValues(
    _.keyBy(objectArray, (arrItem) => {
      return arrItem[nameKey];
    }),
    (item) => {
      return _.omit(item, blacklist);
    }
  );
  // console.log(output);
  return output;
}