/// <reference types="koa-session" />
import { PYIMiddleware, KoaMiddlewareInterface } from 'pyi';
import { Context } from 'koa';
export declare class JWTMiddleware extends PYIMiddleware implements KoaMiddlewareInterface {
    use(ctx: Context, next: () => any): Promise<void>;
}
