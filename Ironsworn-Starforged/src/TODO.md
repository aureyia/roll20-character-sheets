# TODO

## for this PR specifically

### to fix

- starship tab
- sheet header
  - [ ] fonts, borders, consistency/ back to flexbox?
  - [ ] momentum widget
    - [ ] spacing
    - [ ] font/border consistency
    - [ ] restructure the object from genericized asset resource meter? hmm...
    - [ ] differentiate max 10, reset 2
- asset ability, asset track changes
- [ ] fadein/fadeout on move cards?
- [ ] move oracle icons to header; insert line break before subcategory to get a 2 level headline (not unlike)
- [ ] progress button borders
- [ ] rank toggle hover

- [x] adjust margin/baseline of star bullet
- [x] fix margin on oracle header
- [x] fix undefined roll templates

### visuals

- [ ] mouseover (title="...") info widget to clear some repetitive description clutter

- [x] add new close button to oracle previews
- [x] raster icons
  - [ ] them being ready-to-use tokens (maybe noted as such w/ a hover effect?) that can be dragged onto the VTT
- [ ] make preview sidebar a reflowed version of the same element rather than a duplicate element
  - [ ] do
- [ ] consider alternate legacies arrangement: put "3 pillars" at center stage
  - [ ] quests track + vows display
  - [ ] discoveries track +
- [ ] nicer colored hex buttons: inactive state is just outline?
- [ ] is it possible to use css shapes as backgrounds? hmm

- [ ] design embedded oracle roll button
- [ ] implement distinct icons for:
  - [ ] oracle roll
  - [ ] oracle category (arrow?)
  - [ ] optional: action roll (d6)?

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

## revised tabs

in general - sure is a lotta stuff consuming vertical height on desktop. might be better to move towards sidebars or a more flexible layout
momentum bar takes up a lot of space maybe it'd be better with a prominently-marked but still compact meter

### header and/or summary

- resource meters
  - health
  - supply (synced if possible)
  - integrity (synced if possible)
- very brief vessel summary?
- stats with roll buttons
  - setting happens, like, once. this could be safely backgrounded behind a config icon, imo
    - alternately: right click once jquery's on the table?
- AtA buttons for easy access
- maybe core oracles too?
- summary of asset abilities (that the pc \*actually has), in a nice lil list with icons (perhaps incorporated as a background or cropped or zoomed in)
- xp total

- some of the header content could probably be compressed when not on the summary page...

### Summary

- generalist progress tracks? idk
- moves: adventure

### Starship

- should still have a dedicated tab - it's important
- should sync to sheet, though... or maybe it's time to make it being its own char the default?
- space + starship oracles?

### Bonds

- legacy: bonds
- progress tracks: npc bond
- oracles: npc oracles
- moves: connection moves
- details: npcs
- companions _maybe_?

### Discoveries

- legacy: discoveries
- progress tracks: expedition
- moves: exploration
- oracle shortcuts:
  - planet
  - space?
  - derelict?
  - precursor vault?

### Quests

- legacy: quests
- moves: quests
- progress tracks: vows

### Combat

- moves: combat
- progress tracks: combat

### Oracles

- add management of oracle arrays? hmm...
  - maybe with a modal/wizard to be like "i'm at this location, filter it for me!"

##
