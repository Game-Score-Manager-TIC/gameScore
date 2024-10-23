import { Injectable } from '@nestjs/common';
import { PaginationQueryDto } from '../commons/dto/paginationQueryDto';
import { ScoreDto } from '../commons/dto/score.input';
import { v4 as uuidv4 } from 'uuid';

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

@Injectable()
export class ScoresService {
  private scores: Score[] = [];

  getScoresLeaderborad(paginationQuery: PaginationQueryDto): Paginator {
    const { limit = 10, page = 1 } = paginationQuery;
    const start = (page - 1) * limit;
    const end = start + limit;

    const data = this.scores.slice(start, end);
    const total = this.scores.length;
    const totalPages = Math.ceil(total / limit);

    return <Paginator>{
      data,
      total,
      page,
      limit,
      totalPages,
    };
  }

  createScore(user_id: string, createScoreDto: ScoreDto): Score {
    const newScore = { id: uuidv4(), user_id, ...createScoreDto };
    this.scores.push(newScore);
    return newScore;
  }

  getScoreById(id: string): Score {
    return this.scores.find((score) => score.id === id);
  }

  updateScoreById(id: string, updateData: ScoreDto) {
    const score = this.getScoreById(id);
    if (score) {
      Object.assign(score, updateData);
    }
  }

  deleteScoreById(id: string) {
    this.scores = this.scores.filter((score) => score.id !== id);
  }
}
