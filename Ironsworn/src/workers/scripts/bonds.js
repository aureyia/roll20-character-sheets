on('change:repeating_bonds:details_button', function(eventinfo) {
  setAttrs({
    repeating_bonds_details: eventinfo.newValue,
  });
});

on('change:repeating_bonds:links_button', function(eventinfo) {
  setAttrs({
    repeating_bonds_links: eventinfo.newValue,
  });
});
