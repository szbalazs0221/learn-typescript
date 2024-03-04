import fs from 'fs';

const matches = fs
  .readFileSync('football.csv', { encoding: 'utf-8' })
  .split('\n')
  .map((row: string): string[] => {
    return row.split(',');
  });

enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

let manUnitedWins = 0;

for (let match of matches) {
  const homeTeam = match[1];
  const awayTeam = match[2];
  const winner = match[5];
  if (
    (homeTeam === 'Man United' && winner === MatchResult.HomeWin) ||
    (awayTeam === 'Man United' && winner === MatchResult.AwayWin)
  ) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
