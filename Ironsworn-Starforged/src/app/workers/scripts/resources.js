const stats = ['health', 'spirit', 'supply', 'momentum'];

stats.forEach((stat) => {
  listenAddAttr(stat);
  listenSubtractAttr(stat);
  listenSetMinMax(stat);
});

// FIXME would it work for wounded etc to set health_max to 0 instead? hmm...

//Cannot increase Health while Wounded
//Health 0 does not automatically mark an Impact in SF
on('change:health', (eventInfo) => {
  getAttrs(['impactWounded'], (values) => {
    if (values.impactWounded == 'on') {
      if (toInt(eventInfo.newValue) > toInt(eventInfo.previousValue)) {
        return setAttrs({ health: eventInfo.previousValue });
      }
    }
  });
  return;
});

//Cannot increase Spirit while Shaken
//Spirit 0 does not automatically mark an Impact in SF
on('change:spirit', (eventInfo) => {
  getAttrs(['impactShaken'], (values) => {
    if (values.impactShaken == 'on') {
      if (toInt(eventInfo.newValue) > toInt(eventInfo.previousValue)) {
        return setAttrs({ spirit: eventInfo.previousValue });
      }
    }
  });
  return;
});

//Cannot increase Supply while Unprepared
//Supply reaching 0 marks Unprepared
on('change:supply', (eventInfo) => {
  getAttrs(['impactUnprepared'], (values) => {
    if (values.unprepared == 'on') {
      if (toInt(eventInfo.newValue) > toInt(eventInfo.previousValue)) {
        return setAttrs({ supply: eventInfo.previousValue });
      }
    }
  });
  if (toInt(eventInfo.newValue) === 0) {
    return setAttrs({ impactUnprepared: 'on' });
  }
  return;
});
