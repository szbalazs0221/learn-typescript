"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const MatchResult_1 = require("./MatchResult");
const reader = new MatchReader_1.MatchReader('football.csv');
reader.read();
let manUnitedWins = 0;
for (let match of reader.data) {
    const homeTeam = match[1];
    const awayTeam = match[2];
    const winner = match[5];
    if ((homeTeam === 'Man United' && winner === MatchResult_1.MatchResult.HomeWin) ||
        (awayTeam === 'Man United' && winner === MatchResult_1.MatchResult.AwayWin)) {
        manUnitedWins++;
    }
}
console.log(`Man United won ${manUnitedWins} games`);
