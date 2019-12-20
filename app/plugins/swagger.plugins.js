"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const pyi_1 = require("pyi");
const pyi_swagger_1 = require("pyi-swagger");
let SwaggerPlugins = class SwaggerPlugins extends pyi_1.PYIPlugin {
    async init() {
        console.log('plugins swagger ...');
        pyi_swagger_1.SwaggerInjectService.register();
        return await pyi_swagger_1.Swagger.build('/swagger.io', this.app, {
            info: {
                description: 'PYI Swagger 测试用例',
                title: 'PYI Swagger 测试用例'
            },
            securityDefinitions: {
                api_key: {
                    type: 'apiKey',
                    name: 'authorization',
                    in: 'header'
                }
            }
        });
    }
};
SwaggerPlugins = __decorate([
    pyi_1.AutoPlugin
], SwaggerPlugins);
exports.SwaggerPlugins = SwaggerPlugins;

//# sourceMappingURL=../sourcemaps/plugins/swagger.plugins.js.map
