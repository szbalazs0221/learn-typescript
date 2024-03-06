"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
const MatchResult_1 = require("../MatchResult");
class WinsAnalysis {
    constructor(team) {
        this.team = team;
    }
    run(matches) {
        let teamWins = 0;
        for (const match of matches) {
            const homeTeam = match[1];
            const awayTeam = match[2];
            const winner = match[5];
            if ((homeTeam === this.team && winner === MatchResult_1.MatchResult.HomeWin) ||
                (awayTeam === this.team && winner === MatchResult_1.MatchResult.AwayWin)) {
                teamWins++;
            }
        }
        return `Team ${this.team} won ${teamWins} games.`;
    }
}
exports.WinsAnalysis = WinsAnalysis;
