import { PYIBootstrap, PYIApplication, PYIOnInitApplication } from 'pyi';
import { SwaggerInjectService, Swagger } from 'pyi-swagger';
SwaggerInjectService.register();

@PYIBootstrap
export class Application extends PYIApplication<any, any> implements PYIOnInitApplication {
    public onInitApplication() {
        console.log('onInitApplication ...');
        Swagger.build('/swagger.io', this, {
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
