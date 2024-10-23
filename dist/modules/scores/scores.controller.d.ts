import { Score, ScoresService } from './scores.service';
import { PaginationQueryDto } from '../commons/dto/paginationQueryDto';
import { ScoreDto } from '../commons/dto/score.input';
export declare class ScoresController {
    private readonly scoresService;
    constructor(scoresService: ScoresService);
    createScore(user_id: string, score: Score): Score;
    getScoresLeaderborad(paginationQuery: PaginationQueryDto): import("./scores.service").Paginator;
    getScoreById(score_id: string): Score;
    updateScoreById(score_id: string, updateData: ScoreDto): void;
    deleteScoreById(score_id: string): void;
}
