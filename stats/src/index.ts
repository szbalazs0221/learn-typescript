import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';

const reader = new CsvFileReader('football.csv');
reader.read();

let manUnitedWins = 0;

for (let match of reader.data) {
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
