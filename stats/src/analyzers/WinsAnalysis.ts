import { MatchData } from '../MatchData';
import { MatchResult } from '../MatchResult';
import { Analyzer } from '../Summary';

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let teamWins = 0;
    for (const match of matches) {
      const homeTeam = match[1];
      const awayTeam = match[2];
      const winner = match[5];
      if (
        (homeTeam === this.team && winner === MatchResult.HomeWin) ||
        (awayTeam === this.team && winner === MatchResult.AwayWin)
      ) {
        teamWins++;
      }
    }
    return `Team ${this.team} won ${teamWins} games.`;
  }
}
