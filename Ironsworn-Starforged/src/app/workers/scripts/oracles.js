on('change:oracle_starforged_button', function(eventinfo) {
  setAttrs({
    selected_oracle: eventinfo.newValue,
  });
});

on('change:oracle_page_button', function(eventinfo) {
  setAttrs({
    oracle_page: eventinfo.newValue,
  });
});

on('change:selected_oracle', function(eventinfo) {
  if (eventinfo.newValue !== 'none') {
    setAttrs({
      view_mode_oracle: '2',
      oracle_preview: eventinfo.newValue,
    });
  }
});

on('change:preview_close_oracle', function() {
  setAttrs({
    view_mode_oracle: '1',
    selected_oracle: 'none',
  });
});
