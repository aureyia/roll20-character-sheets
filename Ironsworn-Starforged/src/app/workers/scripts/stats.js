//Cannot increase Health while Wounded
//Health 0 does not automatically mark an Impact in SF
on("change:health", function (eventInfo) {
  getAttrs(["impactWounded"], function (values) {
    if (values.impactWounded == "on") {
      if (parseInt(eventInfo.newValue) > parseInt(eventInfo.previousValue)) {
        setAttrs({ health: eventInfo.previousValue });
      }
    }
  });
});

//Cannot increase Spirit while Shaken
//Spirit 0 does not automatically mark an Impact in SF
on("change:spirit", function (eventInfo) {
  getAttrs(["impactShaken"], function (values) {
    if (values.impactShaken == "on") {
      if (parseInt(eventInfo.newValue) > parseInt(eventInfo.previousValue)) {
        setAttrs({ spirit: eventInfo.previousValue });
      }
    }
  });
});

//Cannot increase Supply while Unprepared
//Supply reaching 0 marks Unprepared
on("change:supply", function (eventInfo) {
  getAttrs(["impactUnprepared"], function (values) {
    if (values.unprepared == "on") {
      if (parseInt(eventInfo.newValue) > parseInt(eventInfo.previousValue)) {
        setAttrs({ supply: eventInfo.previousValue });
      }
    }
  });
  if (parseInt(eventInfo.newValue) === 0) setAttrs({ impactUnprepared: "on" });
});
