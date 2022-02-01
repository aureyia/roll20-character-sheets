$20('label.map-hex').on('click', async (event) => {
  const selector = event.htmlAttributes.id
  setAttrs({ highlightedHex: selector });
});

on('change:currentHex change:highlightedHex', (eventInfo) => {
  const classToAdd = eventInfo.sourceAttribute.toLowerCase().replace('hex', '');
  updateClasses(eventInfo.previousValue, eventInfo.newValue, classToAdd);
})

function updateClasses (previousValue, newValue, cssClass) {
  getElementByClassName(previousValue).removeClass(cssClass);
  getElementByIdName(previousValue).removeClass(cssClass);
  getElementByClassName(newValue).addClass(cssClass);
  getElementByIdName(newValue).addClass(cssClass);
}

const allTravelHexes = new Array(140).fill(0).map((_, index) => `travelled_hex-${index + 1}`);
const eventFormatHexes = allTravelHexes.map((hex) => `change:${hex}`).join(' ');

on(eventFormatHexes, (eventInfo) => {
  const mapHex = $20(`#${eventInfo.sourceAttribute.replace('travelled_', '')}`);
  eventInfo.newValue === 'on' ? mapHex.addClass('travelled') : mapHex.removeClass('travelled');
})

on('sheet:opened', () => {
  getAttrs(allTravelHexes, (values) => {
    const travelledHexes = allTravelHexes.filter(hex => values[hex] === 'on');
    for(const hex of travelledHexes) {
      const mapHex = hex.replace('travelled_', '');
      $20(`#${mapHex}`).addClass('travelled');
    }
  })
  getAttrs(['currentHex'], (values) => {
    const currentHex = values.currentHex;
    if(currentHex) {
      $20(`#${currentHex}`).addClass('current');
    }
  })
})