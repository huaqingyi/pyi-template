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
const pyi_1 = require("pyi");
const test_service_1 = require("../services/test.service");
const login_dao_1 = require("../dao/test/login.dao");
const response_dto_1 = require("../dto/response.dto");
const pyi_swagger_1 = require("pyi-swagger");
const tag = pyi_swagger_1.tags(['TestController']);
let TestController = class TestController extends pyi_1.PYIController {
    async test() {
        this.logger.error(1111);
        console.log(111);
        console.log(await this.service.findAll());
        throw new Error('测试');
        return 111;
    }
    error() {
        return pyi_1.PYIExecption(class extends pyi_1.PYIThrows {
            async throws() {
                console.log(await this.service.test());
                return 'test ...';
            }
        });
    }
    login(login) {
        return pyi_1.PYIExecption(class extends pyi_1.PYIThrows {
            async throws() {
                return 'test ...';
            }
        });
    }
};
__decorate([
    pyi_1.autoconnect,
    __metadata("design:type", test_service_1.TestService)
], TestController.prototype, "service", void 0);
__decorate([
    pyi_1.RequestMapping({
        prefix: '/test',
        methods: [pyi_1.RequestMappingMethod.GET]
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TestController.prototype, "test", null);
__decorate([
    pyi_1.RequestMapping({
        prefix: '/error'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", response_dto_1.ResponseDto)
], TestController.prototype, "error", null);
__decorate([
    pyi_1.RequestMapping({
        prefix: '/login',
        methods: [pyi_1.RequestMappingMethod.POST]
    }),
    pyi_swagger_1.request(pyi_1.RequestMappingMethod.POST, '/login'),
    pyi_swagger_1.summary('login user auth jwt .'),
    pyi_swagger_1.body(login_dao_1.LoginDao.swaggerDocument),
    tag,
    __param(0, pyi_1.Body({ validate: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dao_1.LoginDao]),
    __metadata("design:returntype", response_dto_1.ResponseDto)
], TestController.prototype, "login", null);
TestController = __decorate([
    pyi_1.Controller
], TestController);
exports.TestController = TestController;

//# sourceMappingURL=../sourcemaps/controllers/test.controller.js.map
