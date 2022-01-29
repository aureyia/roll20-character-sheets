$20('label.map-hex').on('click', async (event) => {
  const selector = event.htmlAttributes.id
  setAttrs({
    highlightedHex: selector
  });
});

on('change:highlightedHex', (eventInfo) => {
  $20(`.${eventInfo.previousValue}`).removeClass('highlighted');
  $20(`#${eventInfo.previousValue}`).removeClass('highlighted');
  $20(`.${eventInfo.newValue}`).addClass('highlighted');
  $20(`#${eventInfo.newValue}`).addClass('highlighted');
})

on('change:currentHex', (eventInfo) => {
  $20(`.${eventInfo.previousValue}`).removeClass('current');
  $20(`#${eventInfo.previousValue}`).removeClass('current');
  $20(`.${eventInfo.newValue}`).addClass('current');
  $20(`#${eventInfo.newValue}`).addClass('current');
})

const allTravelHexes = new Array(140).fill(0).map((_, i) => `travelled_hex-${i + 1}`);
const eventFormatHexes = allTravelHexes.map((hex) => `change:${hex}`).join(' ');

on(eventFormatHexes, (eventInfo) => {
  const mapHex = eventInfo.sourceAttribute.replace('travelled_', '');
  if(eventInfo.newValue === 'on') {
    $20(`#${mapHex}`).addClass('travelled');
  } else {
    $20(`#${mapHex}`).removeClass('travelled');
  }
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