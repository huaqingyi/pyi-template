/// <reference types="koa-session" />
import { PYIController } from 'pyi';
import { TestService } from '../services/test.service';
import { TestDto } from '../dto/test.dto';
import { Response, Context } from 'koa';
import { LoginValidation } from '../validation/login.validation';
import { UserDto } from '../dto/user.info';
export declare class TestController extends PYIController {
    service: TestService;
    resource(ctx: Context): Promise<string>;
    favicon(ctx: Context): Promise<string>;
    login(loginForm: LoginValidation, response: Response, ctx: Context): UserDto;
    index(): TestDto;
    err(): TestDto;
    info(ctx: Context): UserDto;
    test(gets: any): Promise<string>;
}
