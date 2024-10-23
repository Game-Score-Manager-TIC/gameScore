"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
let UsersService = class UsersService {
    constructor() {
        this.users = [];
    }
    createUser(createUserDto) {
        const newUser = { id: (0, uuid_1.v4)(), ...createUserDto };
        this.users.push(newUser);
        return newUser;
    }
    findAll() {
        return this.users;
    }
    findById(id) {
        return this.users.find((user) => user.id === id);
    }
    changeUserRole(id, newRole, requestingUser) {
        if (requestingUser.role !== 'admin') {
            throw new common_1.ForbiddenException('Solo los administradores pueden cambiar roles');
        }
        const user = this.findById(id);
        if (user) {
            user.role = newRole;
        }
        return user;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=users.service.js.map