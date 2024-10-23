import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Score, ScoresService } from './scores.service';
import { PaginationQueryDto } from '../commons/dto/paginationQueryDto';
import { ScoreDto } from '../commons/dto/score.input';

@Controller('scores')
export class ScoresController {
  constructor(private readonly scoresService: ScoresService) {}

  @Post(':user_id')
  createScore(@Param('user_id') user_id: string, @Body() score: Score) {
    return this.scoresService.createScore(user_id, score);
  }

  @Get('leaderboard')
  getScoresLeaderborad(@Query() paginationQuery: PaginationQueryDto) {
    return this.scoresService.getScoresLeaderborad(paginationQuery);
  }

  @Get(':score_id')
  getScoreById(@Param('score_id') score_id: string) {
    return this.scoresService.getScoreById(score_id);
  }

  @Patch(':score_id')
  updateScoreById(
    @Param('score_id') score_id: string,
    @Body() updateData: ScoreDto,
  ) {
    this.scoresService.updateScoreById(score_id, updateData);
  }

  @Delete(':score_id')
  deleteScoreById(@Param('score_id') score_id: string) {
    return this.scoresService.deleteScoreById(score_id);
  }
}
