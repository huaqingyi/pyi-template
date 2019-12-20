import { PYIBootstrap, PYIApplication, PYIOnInitApplication } from 'pyi';
import { SwaggerInjectService, Swagger } from 'pyi-swagger';
SwaggerInjectService.register();

@PYIBootstrap
export class Application extends PYIApplication<any, any> {
}
