const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
];

function findMutantByPower(mutants, power) {
  let numMutants = [];

  for (let mutant of mutants) {
    if (mutant.power === power) {
      numMutants.push(mutant.name);
    }
  }

  if (numMutants.length > 0) {
    return "Mutantes con el poder '" + power + "': " + numMutants.join(", ");
  } else {
    return "No se encontraron mutantes con el poder '" + power;
  }
}
