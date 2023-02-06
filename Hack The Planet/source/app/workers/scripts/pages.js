on('change:character_page_button', function(eventinfo) {
  setAttrs({
    character_page: eventinfo.newValue
  });
});

on('change:crew_page_button', function(eventinfo) {
  setAttrs({
    crew_page: eventinfo.newValue
  });
});

on('change:mode_button', function(eventinfo) {
  setAttrs({
    mode: eventinfo.newValue,
    modes_choice: 'off'
  });
});

on('change:close_changelog', function() {
  setAttrs({
    'changelog_1.0.0': 'on',
  });
});
