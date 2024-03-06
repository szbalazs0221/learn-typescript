import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let manUnitedWins = 0;

for (let match of matchReader.matches) {
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
