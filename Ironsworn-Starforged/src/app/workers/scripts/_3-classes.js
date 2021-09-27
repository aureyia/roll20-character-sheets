// "Do not use action button names that include underscores, otherwise they will fail to trigger as a detectable event for sheetworkers.""

// logs things, serves as parent class for listeners
class Listener {
start(trigger) {
on(trigger, (eventInfo) => {
log(this.name, trigger, "activated.", eventInfo);
});
}
constructor(trigger, name) {
log("Adding listener for", name, trigger);
this.trigger = trigger;
this.name = name;
this.start(trigger);
}
};

class IncrementAttrListener extends Listener {
constructor(attr) {
let trigger = `click:increment-${attr}`;
super(trigger, "IncrementAttrListener");
on(trigger, (eventInfo) =>{
log(eventInfo);
getAttrs([attr], attributes => {
let increment = parseInt(getBtnValue(eventInfo));
let previousValue = parseInt(attributes[attr]);
return setAttr({
[attr]: previousValue + increment
});
}
)});
}
};
