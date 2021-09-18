# TODO

## for this PR specifically

### visuals

- [x] add new close button to oracle previews
- [ ] raster icons
  - [ ] them being ready-to-use tokens (maybe noted as such w/ a hover effect?) that can be dragged onto the VTT
- [ ] make preview sidebar a reflowed version of the same element rather than a duplicate element
  - [ ] do
- [ ] consider alternate legacies arrangement: put "3 pillars" at center stage
  - [ ] quests track + vows display
  - [ ] discoveries track +
- [ ] nicer colored hex buttons: inactive state is just outline?
- [ ] is it possible to use css shapes as backgrounds? hmm
- [x] adjust margin/baseline of star bullet
- [ ] fadein/fadeout on move cards?
- [x] fix margin on oracle header
- [ ] design embedded oracle roll button
- [ ] implement distinct icons for:
  - [ ] oracle roll
  - [ ] oracle category (arrow?)
  - [ ] optional: action roll (d6)?
- [ ] fix undefined roll templates

### other

- FIX ASSET TRACK value storage

- FIX GUNNER BUG (ability input translation?)
- make resource meter component universal/configurable mixin
- pick through everything and restore busted attributes to the same as live
  - or just write the damn worker, ugh
  - asset attrs are really the important thing here
  - the other one is progress/quests, but we haven't touched that yet.
- finish rebuilding all current in-progress components
- finish restoring styling to parity with live version
  - progress tracks
  - buttons
  - ship stuff
  - etc
- ensure colorable background for assets (probably with before + z-index)
- do thorough check of pages to ensure they look and handle right

## For later PRs?

- session moves on group sheet
- toggle: single player view mode / multiplayer view mode
  - MVP: one config gear icon that shows a single option: show/hide supply (crib from BitD sheet?)
  - hides stuff handled by the group sheet:
    - Supply resource
    - Starship tab
    - Connections tab?
    - extra but might just be inconvenient?
      - Progress tab?
      - Session moves?
  - gate behind config button?
  - give players an option?
- investigate alternate means of conveying shared supply, integrity? e.g. initiative tracker
  - investigate API?
  - set attribute for the starship token, sync PC supply/integrity value from that?
- implement _counter_ widget + attribute
- roll button for resource meters
- condition checkboxes for resource meters
- possible to link supply stat w/ group sheet?
- migration worker + standardized attribute names. but, like, one at a time, man
- custom roll parsing on
  - start AtA only as test case
- context sensitive quest marker? hmm

## Notes on shared/synced supply tracks

- see [https://wiki.roll20.net/API:Objects]
- may only be possible w/ API scripts
- journal entries (for characters) of particular interest
- could lookup all characters that have the sheet type set?
- "The API does not have access to the folder hierarchy. API created handouts will be placed at the root level."
- "Note: currently you can create 'graphic', 'text', 'path', 'character', 'ability', 'attribute', 'handout', 'rollabletable', 'tableitem', and 'macro' objects."
