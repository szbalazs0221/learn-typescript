import fs from 'fs';

const matches = fs
  .readFileSync('football.csv', { encoding: 'utf-8' })
  .split('\n')
  .map((row: string): string[] => {
    return row.split(',');
  });

let manUnitedWins = 0;

for (let match of matches) {
  const homeTeam = match[1];
  const awayTeam = match[2];
  const winner = match[5];
  if (
    (homeTeam === 'Man United' && winner === 'H') ||
    (awayTeam === 'Man United' && winner === 'A')
  ) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
