# Changelog

## [1.2.0]

### Added

## [1.1.0] - 2021-09-06

### Added

- Changelog
- Add movement penalty field to Armor and associated Spd calculator
- Add `Dodge: Underwater`, saves vs `Despair` and `Telepathic Probe`
- Add Range `Damage: Single` and `Damage: Pulse/Burst` fields
- Add multipliers for lift/carry weight and duration
- Add left border to Modifier Picker
- Move Initiative outside of Ancient section
- Add Initiative roll to tracker
- Roll templates inside roll queries for certain saving throws (Despair, Illusion, Mind Control, Pain, Possession, Telepathic Probe) (https://app.roll20.net/forum/post/10326105/roll-template-inside-roll-query/?pageforid=10361844#post-10361844). Player is prompted for the type of attack - Magic, Psionic, or Other - and the selected bonus is added to the roll.
- Add migration script for attribute changes
- Factor in Critical value when rolling Strike/Body Flip
- Add optional modifier to all skill rolls (including ability skill percentages)
- Add Options tab and `useroptions` in `sheet.json`
  - Add PP bonus to Disarm and Entangle
  - Add IQ bonus to Perception as per Rifter 13, p.16
  - Apply PS damage to each hand in Paired attack
  - Apply Hand to Hand critical (19-20, 18-20) to modern weapons as well
- Add Damage: Paired, Main Hand, and Off Hand to modifiers.
- Add WP: Bayonet

### Changed

- Sort Saving Throws alphabetically
- Fix issue with default level not behaving correctly when first increased (https://app.roll20.net/forum/post/10351259/first-time-the-value-is-changed-previousvalue-and-newvalue-are-the-same)
- Use ordered section IDs on export
- Make armor and equipment export/importable
- Replace debug class with checkbox. Rename `Imp/Exp` tab to `Options`
- Replace logo with github link
- Fix bad HTML on Perception Check emoji
- Separate Trust/Intimidate into Trust and Intimidate
- Make The Trouble With Credits link a button
- Better (more accurate, more efficient) Skill calculations

### Removed

- Remove Charm/Impress and Perception roll button from Core tab
