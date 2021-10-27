


let watchedAttrs = ["-ability-1", "-ability-2", "-ability-3", "-meter-", "-counter-", "-textinput-", "-select-"];


let genericAttrs = ["meter-health", "meter-integrity", "ability-1", "ability-2", "ability-3"];

let attrRegExp = new RegExp(`(${watchedAttrs.join("|")})`, "");

function purgeAssetAttrs(localAssetId, asObject = false) {
  //- removes any pc attributes associated with the repeating element
  const newValues = {};
  let globalAssetId = "asset-" + localAssetId;
  let assetAttrs = indexAssets[globalAssetId] ? indexAssets[globalAssetId].map(item => item.replace(localAssetId+"-", "")) : [];
  newValues[globalAssetId] = "";
  const attrSuffixes = [...assetAttrs, ...genericAttrs];
  attrSuffixes.forEach(item => newValues[globalAssetId+"-"+item] = "");
  if (asObject == true) {
    return newValues;
  }
  else  {
    return setAttrs(newValues);
  }
}

function initializeAsset(localAssetId, repId, previousAssetId=false) {

    // initialize attributes from repeating sections as regular attributes
    // TODO: include this w/ migration
  let repPrefix = "repeating_assets_" + repId ? repId+"_" : "";
  let globalAssetId = "asset-"+localAssetId;
  let assetAttrs = indexAssets[globalAssetId] ? indexAssets[globalAssetId].map(item => item.replace(localAssetId+"-", "")) : [];
  const attrSuffixes = [...assetAttrs, ...genericAttrs];
  let repAttrs = attrSuffixes.map(item => `${repPrefix}${localAssetId}-${item}`);
  getAttrs([repAttrs], function(attrData) {
    let newValues = {
      [globalAssetId]: "on"
    };
    if (previousAssetId) {
    //- cleans up previous asset values, if any
      Object.assign(newValues, purgeAssetAttrs(localAssetId, true));
    };
    for (const key in attrData) {
      const currentValue = attrData[key];
      if (key.match(repPrefix) ) {
        let newKey = key.replace(repPrefix, "asset-");
        newValues[newKey] = currentValue;
      }
    };
    setAttrs(newValues);
  });
}


on("change:repeating_assets", function (eventInfo) {
  log(eventInfo);
  let repId = eventInfo.triggerName;
  if (eventInfo.sourceAttribute.match(/_asset$/)) {

    initializeAsset(eventInfo.newValue, repId, eventInfo.oldValue);
  }
  if (eventInfo.sourceAttribute.match(attrRegExp)) {
    let attr = "asset-" + eventInfo.sourceAttribute.replace(repId + "_", "");
    setAttrs({
      [attr]: eventInfo.newValue
    });
  }
});

