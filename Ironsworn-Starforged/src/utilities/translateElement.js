const translation = require("../../translation.json");

function translateElement(content, label, description, placeholder) {
  // set an arg to false to skip it
  // content is the text content of the element
  // label maps to aria-label (and title, if there's no description)
  // description maps to aria-description and title

  const attributes = {};
  if (content) {
    attributes["data-i18n"] = content;
  }
  if (description) {
    attributes["data-i18n-aria-description"] = attributes["data-i18n-title"] = description;
    attributes["aria-description"] = attributes["title"]=translation[description];
  }
  if (label) {
    attributes["data-i18n-aria-label"] = label;
    attributes["aria-label"] = translation[label];
    if (!attributes["title"]) {
      attributes["data-i18n-title"] = label;
      attributes["title"] = translation[label];
    }
  }
  if (placeholder) {
    attributes["data-i18n-placeholder"] = placeholder;
    attributes["placeholder"] = translation[placeholder];
  }
  return attributes;
}


module.exports = translateElement;