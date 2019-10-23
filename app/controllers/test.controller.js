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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var TestController_1;
Object.defineProperty(exports, "__esModule", { value: true });
const pyi_1 = require("pyi");
const test_service_1 = require("../services/test.service");
const test_dto_1 = require("../dto/test.dto");
const pyi_swagger_1 = require("pyi-swagger");
const koa_send_1 = __importDefault(require("koa-send"));
const path_1 = require("path");
const login_validation_1 = require("../validation/login.validation");
const user_info_1 = require("../dto/user.info");
const tag = pyi_swagger_1.tags(['TestController']);
const userSchema = {
    name: { type: 'string', required: true },
    password: { type: 'string', required: true }
};
let TestController = TestController_1 = class TestController extends pyi_1.PYIController {
    async resource(ctx) {
        this.dto = true;
        return await koa_send_1.default(ctx, ctx.path, { root: path_1.join(__dirname, '../') });
    }
    async favicon(ctx) {
        this.dto = true;
        return await koa_send_1.default(ctx, ctx.path, { root: path_1.join(__dirname, '../resource/static') });
    }
    login(loginForm, response, ctx) {
        return pyi_1.PYIExecption(class extends TestController_1 {
            async throws() {
                const result = {
                    id: 1,
                    username: 'test',
                    age: '1',
                    nikename: 'test',
                    email: 'test@email.com'
                };
                const { secret, token } = this.tokenConfig;
                response.append('token', this.token.sign(result, secret, token));
                return await result;
            }
        });
    }
    index() {
        return pyi_1.PYIExecption(class extends TestController_1 {
            async throws() {
                return await 'Hello PYI ...';
            }
        });
    }
    err() {
        return pyi_1.PYIExecption(class extends TestController_1 {
            async throws() {
                this.errno = 1000;
                this.errmsg = 'test error ...';
                throw new Error('test error');
                return await 'Hello PYI ...';
            }
        });
    }
    info(ctx) {
        return pyi_1.PYIExecption(class extends TestController_1 {
            async throws() {
                return ctx.state;
            }
        });
    }
    async test(gets) {
        // console.log(await this.service.findAllUsers());
        return await 'Hello World ...';
    }
};
__decorate([
    pyi_1.autowired,
    __metadata("design:type", test_service_1.TestService)
], TestController.prototype, "service", void 0);
__decorate([
    pyi_1.RequestMapping({
        prefix: '/resource/*'
    }),
    __param(0, pyi_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TestController.prototype, "resource", null);
__decorate([
    pyi_1.RequestMapping({
        prefix: '/favicon.ico'
    }),
    __param(0, pyi_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TestController.prototype, "favicon", null);
__decorate([
    pyi_1.RequestMapping({
        prefix: '/login',
        methods: [pyi_1.RequestMappingMethod.POST]
    }),
    pyi_swagger_1.request(pyi_1.RequestMappingMethod.POST, '/login'),
    pyi_swagger_1.summary('login user auth jwt .'),
    pyi_swagger_1.body(login_validation_1.LoginValidation.swaggerDocument),
    tag,
    __param(0, pyi_1.Body({ validate: true })),
    __param(1, pyi_1.Res()),
    __param(2, pyi_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_validation_1.LoginValidation, Object, Object]),
    __metadata("design:returntype", user_info_1.UserDto)
], TestController.prototype, "login", null);
__decorate([
    pyi_1.RequestMapping({
        prefix: '/'
    }),
    pyi_swagger_1.request(pyi_1.RequestMappingMethod.GET, '/'),
    pyi_swagger_1.summary('test get index'),
    tag,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", test_dto_1.TestDto)
], TestController.prototype, "index", null);
__decorate([
    pyi_1.RequestMapping({
        prefix: '/error'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", test_dto_1.TestDto)
], TestController.prototype, "err", null);
__decorate([
    pyi_1.RequestMapping({
        prefix: '/info',
        methods: [pyi_1.RequestMappingMethod.POST]
    }),
    pyi_swagger_1.request(pyi_1.RequestMappingMethod.POST, '/info'),
    pyi_swagger_1.security([{ api_key: [] }]),
    pyi_swagger_1.summary('test token'),
    tag,
    __param(0, pyi_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", user_info_1.UserDto)
], TestController.prototype, "info", null);
__decorate([
    pyi_1.RequestMapping({
        prefix: '/test',
    }),
    __param(0, pyi_1.QueryParams()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TestController.prototype, "test", null);
TestController = TestController_1 = __decorate([
    pyi_1.Controller
], TestController);
exports.TestController = TestController;

//# sourceMappingURL=../sourcemaps/controllers/test.controller.js.map
