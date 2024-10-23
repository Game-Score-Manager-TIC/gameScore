"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScoresController = void 0;
const common_1 = require("@nestjs/common");
const scores_service_1 = require("./scores.service");
const paginationQueryDto_1 = require("../commons/dto/paginationQueryDto");
const score_input_1 = require("../commons/dto/score.input");
let ScoresController = class ScoresController {
    constructor(scoresService) {
        this.scoresService = scoresService;
    }
    createScore(user_id, score) {
        return this.scoresService.createScore(user_id, score);
    }
    getScoresLeaderborad(paginationQuery) {
        return this.scoresService.getScoresLeaderborad(paginationQuery);
    }
    getScoreById(score_id) {
        return this.scoresService.getScoreById(score_id);
    }
    updateScoreById(score_id, updateData) {
        this.scoresService.updateScoreById(score_id, updateData);
    }
    deleteScoreById(score_id) {
        return this.scoresService.deleteScoreById(score_id);
    }
};
exports.ScoresController = ScoresController;
__decorate([
    (0, common_1.Post)(':user_id'),
    __param(0, (0, common_1.Param)('user_id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ScoresController.prototype, "createScore", null);
__decorate([
    (0, common_1.Get)('leaderboard'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [paginationQueryDto_1.PaginationQueryDto]),
    __metadata("design:returntype", void 0)
], ScoresController.prototype, "getScoresLeaderborad", null);
__decorate([
    (0, common_1.Get)(':score_id'),
    __param(0, (0, common_1.Param)('score_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ScoresController.prototype, "getScoreById", null);
__decorate([
    (0, common_1.Patch)(':score_id'),
    __param(0, (0, common_1.Param)('score_id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, score_input_1.ScoreDto]),
    __metadata("design:returntype", void 0)
], ScoresController.prototype, "updateScoreById", null);
__decorate([
    (0, common_1.Delete)(':score_id'),
    __param(0, (0, common_1.Param)('score_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ScoresController.prototype, "deleteScoreById", null);
exports.ScoresController = ScoresController = __decorate([
    (0, common_1.Controller)('scores'),
    __metadata("design:paramtypes", [scores_service_1.ScoresService])
], ScoresController);
//# sourceMappingURL=scores.controller.js.map