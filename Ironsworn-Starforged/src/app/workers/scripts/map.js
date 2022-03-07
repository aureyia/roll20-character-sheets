$20('label.map-hex').on('click', async (event) => {
  const selector = event.htmlAttributes.id
  setAttrs({ highlightedHex: selector });
});

on('change:highlightedHex', (eventInfo) => {
  const classToAdd = eventInfo.sourceAttribute.toLowerCase().replace('hex', '');
  updateMapHex(eventInfo.previousValue, eventInfo.newValue, classToAdd);
})

on('change:currentHex_button', (eventInfo) => {
  updateMapHex(eventInfo.previousValue, eventInfo.newValue, 'current');
  updateTravelledHex(eventInfo.newValue)
})

function updateMapHex (previousValue, newValue, cssClass) {
  getElementByClass(previousValue).removeClass(cssClass);
  getElementById(previousValue).removeClass(cssClass);
  getElementByClass(newValue).addClass(cssClass);
  getElementById(newValue).addClass(cssClass);
}

function updateTravelledHex (hex) {
  getElementById(hex).addClass('travelled');
  setAttrs({ [`travelled_${hex}_button`]: 'on' });
}

function cleanUpHexAttr (hex) {
  return hex.replace('travelled_', '').replace('_button', '');
}

const allTravelHexes = new Array(140).fill(0).map((_, index) => `travelled_hex-${index + 1}_button`);
const eventFormatHexes = allTravelHexes.map((hex) => `change:${hex}`).join(' ');

on(eventFormatHexes, (eventInfo) => {
  const mapHex = getElementById(cleanUpHexAttr(eventInfo.sourceAttribute));
  eventInfo.newValue === 'on' ? mapHex.addClass('travelled') : mapHex.removeClass('travelled');
})

on('sheet:opened', () => {
  getAttrs(allTravelHexes, (values) => {
    const travelledHexes = allTravelHexes.filter(hex => values[hex] === 'on');
    for(const hex of travelledHexes) {
      const mapHex = cleanUpHexAttr(hex);
      getElementById(mapHex).addClass('travelled');
    }
  })
  getAttrs(['highlightedHex', 'currentHex_button'], (values) => {
    for(const value in values) {
      const summary = getElementByClass(values[value])
      const hex = getElementById(values[value])
      if (value === 'highlightedHex') {
        hex.addClass('highlighted');
        summary.addClass('highlighted');
      } else if (value === 'currentHex_button') { 
        hex.addClass('current');
      }
    }
  })
})
