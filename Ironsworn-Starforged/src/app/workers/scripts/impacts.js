// Impacts update Momentum MAX and RESET.

// TODO have this constant generate automatically from game rules json
const impactsAttrs = [
  'impactWounded',
  'impactShaken',
  'impactUnprepared',
  'impactPermanentlyHarmed',
  'impactTraumatized',
  'impactDoomed',
  'impactTormented',
  'impactIndebted',
  'impactBattered',
  'impactCursed',
  'impactOther1',
  'impactOther2',
];

const shipImpactAttrs = ['impactShipBattered', 'impactShipCursed'];

const momentumAttrs = [
  'momentum_max',
  'momentum_reset',
  'onboard_check_ship_button',
];

const baseMomentumReset = 2;

function buildImpactEvents(impacts) {
  return impacts.map((impact) => `change:${impact}`).join(' ');
}

on(
  `${buildImpactEvents(impactsAttrs)} ${buildImpactEvents(
    shipImpactAttrs
  )} change:onboard_check_ship_button`,
  function () {
    let numImpacts = 0;
    getAttrs(
      impactsAttrs.concat(momentumAttrs).concat(shipImpactAttrs),
      function (values) {
        for (let attr in impactsAttrs) {
          if (values[impactsAttrs[attr]] === 'on') {
            numImpacts += 1;
          }
        }
        for (let attr in shipImpactAttrs) {
          if (
            values[shipImpactAttrs[attr]] === 'on' &&
            values['onboard_check_ship_button'] === 'on'
          ) {
            numImpacts += 1;
          }
        }
        setAttrs({
          momentum_max: 10 - numImpacts,
          momentum_reset: Math.max(baseMomentumReset - numImpacts, 0)
        });
      }
    );
  }
);
