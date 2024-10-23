"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScoresService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
let ScoresService = class ScoresService {
    constructor() {
        this.scores = [];
    }
    getScoresLeaderborad(paginationQuery) {
        const { limit = 10, page = 1 } = paginationQuery;
        const start = (page - 1) * limit;
        const end = start + limit;
        const data = this.scores.slice(start, end);
        const total = this.scores.length;
        const totalPages = Math.ceil(total / limit);
        return {
            data,
            total,
            page,
            limit,
            totalPages,
        };
    }
    createScore(user_id, createScoreDto) {
        const newScore = { id: (0, uuid_1.v4)(), user_id, ...createScoreDto };
        this.scores.push(newScore);
        return newScore;
    }
    getScoreById(id) {
        return this.scores.find((score) => score.id === id);
    }
    updateScoreById(id, updateData) {
        const score = this.getScoreById(id);
        if (score) {
            Object.assign(score, updateData);
        }
    }
    deleteScoreById(id) {
        this.scores = this.scores.filter((score) => score.id !== id);
    }
};
exports.ScoresService = ScoresService;
exports.ScoresService = ScoresService = __decorate([
    (0, common_1.Injectable)()
], ScoresService);
//# sourceMappingURL=scores.service.js.map