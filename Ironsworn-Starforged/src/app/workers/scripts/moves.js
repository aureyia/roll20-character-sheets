on('change:selected_move', function(eventinfo) {
  if (eventinfo.newValue !== 'none') {
    setAttrs({
      view_mode_move: '2',
      move_preview: eventinfo.newValue,
    });
  }
  console.log(`change:selected_move`, eventinfo);
});
// TODO: devise a worker to handle all similar preview close functions!
on('change:preview_close_move', function() {
  setAttrs({
    view_mode_move: '1',
    selected_move: 'none',
  });
});
