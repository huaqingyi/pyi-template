import { PYIPlugin, AutoPlugin, PYIPluginsAppInstall } from 'pyi';
import { SwaggerInjectService, Swagger } from 'pyi-swagger';

@AutoPlugin
export class SwaggerPlugins extends PYIPlugin implements PYIPluginsAppInstall {
    public async init() {
        SwaggerInjectService.register();
        return await Swagger.build('/swagger.io', this.app, {
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
}
