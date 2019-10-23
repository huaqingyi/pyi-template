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
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = require("class-validator");
const pyi_1 = require("pyi");
const koa_swagger_decorator_1 = require("koa-swagger-decorator");
let LoginValidation = class LoginValidation extends pyi_1.PYIValidation {
};
__decorate([
    class_validator_1.IsString({ message: '请传入字符串 .' }),
    class_validator_1.IsNotEmpty({ message: '用户名不能为空 .' }),
    class_validator_1.MinLength(4, { message: '用户名最小长度大于4.' }),
    class_validator_1.MaxLength(10, { message: '用户名最大长度10.' }),
    koa_swagger_decorator_1.swaggerProperty({
        type: 'string',
        required: true,
        example: '1234',
        description: '用户名'
    }),
    __metadata("design:type", String)
], LoginValidation.prototype, "username", void 0);
__decorate([
    class_validator_1.IsString({ message: '请传入字符串 .' }),
    class_validator_1.IsNotEmpty({ message: '密码不能为空 .' }),
    class_validator_1.MinLength(6, { message: '密码最小长度大于6.' }),
    class_validator_1.MaxLength(20, { message: '密码最大长度20.' }),
    koa_swagger_decorator_1.swaggerProperty({
        type: 'string',
        required: true,
        example: '123123',
        description: '密码'
    }),
    __metadata("design:type", String)
], LoginValidation.prototype, "password", void 0);
LoginValidation = __decorate([
    pyi_1.Validation,
    koa_swagger_decorator_1.swaggerClass()
], LoginValidation);
exports.LoginValidation = LoginValidation;

//# sourceMappingURL=../sourcemaps/validation/login.validation.js.map
