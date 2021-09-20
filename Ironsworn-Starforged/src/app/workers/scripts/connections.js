on("change:repeating_connection:details_button", function (eventInfo) {
  setAttrs({
    repeating_connection_details: btnValue(eventInfo),
  });
});
