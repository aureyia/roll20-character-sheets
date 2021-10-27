function countDuplicateValues(json) {
  let uniqueStrings = Array.from(new Set(Object.values(json)));
  uniqueStrings.forEach(string => {
    let duplicateKeys = [];
    for (const key in json) {
      const value = json[key];
      if (string == value) {
        duplicateKeys.push(key);
      }
    };
    if (duplicateKeys.length > 1) {
      console.log(`String repeated ${duplicateKeys.length} times by:`, duplicateKeys);
    }
  });
}
countDuplicateValues(require("../../translation.json"));

module.exports = countDuplicateValues;