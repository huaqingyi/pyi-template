import { SwaggerInjectService } from 'pyi-swagger';
import { PYIBootstrap, PYIApplication } from 'pyi';

SwaggerInjectService.register();

@PYIBootstrap
export class Application extends PYIApplication<any, any> {
}
