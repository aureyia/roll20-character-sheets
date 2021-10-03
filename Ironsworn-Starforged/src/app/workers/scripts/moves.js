on("clicked:action-roll", function (eventInfo) {
  let templateData = eventValue(eventInfo);
  // let i18n_key = eventTitle(eventInfo);
  // let templateData2 = `&{template:starforged_moves} {{header=@{character_name}}} {{action=[[{d6+${moveData.stat}+(?{Modifier|0}),{10}}kl1]]}} {{negate1=[[1+${moveData.repeat_stat}+(?{Modifier|0})]]}} {{negate2=[[2+${moveData.repeat_stat}+(?{Modifier|0})]]}} {{negate3=[[3+${moveData.repeat_stat}+(?{Modifier|0})]]}} {{negate4=[[4+${moveData.repeat_stat}+(?{Modifier|0})]]}} {{negate5=[[5+${moveData.repeat_stat}+(?{Modifier|0})]]}} {{negate6=[[6+${moveData.repeat_stat}+(?{Modifier|0})]]}} {{challenge1=[[d10]]}} {{challenge2=[[d10]]}} {{momentum=[[@{momentum}]]}} {{modifiers=[[${moveData.repeat_stat}+(?{Modifier|0})]]}} {{add=[[(?{Modifier|0})]]}} {{stat=[[${moveData.repeat_stat}]]}} {{name=^{${i18n_key}}}} {{burn_strong=^{momentum-burn-strong-hit}}} {{burn_weak=^{momentum-burn-weak-hit}}}`

  startRoll(templateData, data => {
    finishRoll(data.rollId);
  });
});
on("clicked:progress-roll", function (eventInfo) {
  const progressFallback = `[[?{Filled Progress|0}]]`;
  const progressAmount = eventValue(eventInfo)||`[[?{Filled Progress|0}]]`;
  const progressTitle = eventTitle(eventInfo);
  let templateData = `&{template:starforged_progress} {{header=@{character_name}}} {{progress_name=${progressTitle}}} {{progress=${progressAmount}}} {{challenge1=[[d10]]}} {{challenge2=[[d10]]}}`;
  startRoll(templateData, data => {
    finishRoll(data.rollId);
  });
});
