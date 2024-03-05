"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const reader = new CsvFileReader_1.CsvFileReader('football.csv');
reader.read();
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
let manUnitedWins = 0;
for (let match of reader.data) {
    const homeTeam = match[1];
    const awayTeam = match[2];
    const winner = match[5];
    if ((homeTeam === 'Man United' && winner === MatchResult.HomeWin) ||
        (awayTeam === 'Man United' && winner === MatchResult.AwayWin)) {
        manUnitedWins++;
    }
}
console.log(`Man United won ${manUnitedWins} games`);
