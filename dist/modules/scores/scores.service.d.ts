import { PaginationQueryDto } from '../commons/dto/paginationQueryDto';
import { ScoreDto } from '../commons/dto/score.input';
export interface Score {
    id: string;
    user_id: string;
    game: string;
    score: number;
}
export interface Paginator {
    data: [];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}
export declare class ScoresService {
    private scores;
    getScoresLeaderborad(paginationQuery: PaginationQueryDto): Paginator;
    createScore(user_id: string, createScoreDto: ScoreDto): Score;
    getScoreById(id: string): Score;
    updateScoreById(id: string, updateData: ScoreDto): void;
    deleteScoreById(id: string): void;
}
