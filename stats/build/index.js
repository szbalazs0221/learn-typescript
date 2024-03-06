"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const MatchReader_1 = require("./MatchReader");
const MatchResult_1 = require("./MatchResult");
const csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
let manUnitedWins = 0;
for (let match of matchReader.matches) {
    const homeTeam = match[1];
    const awayTeam = match[2];
    const winner = match[5];
    if ((homeTeam === 'Man United' && winner === MatchResult_1.MatchResult.HomeWin) ||
        (awayTeam === 'Man United' && winner === MatchResult_1.MatchResult.AwayWin)) {
        manUnitedWins++;
    }
}
console.log(`Man United won ${manUnitedWins} games`);
