import { PYIMiddleware, Middleware, KoaMiddlewareInterface } from 'pyi';
import { Context } from 'koa';

@Middleware({ type: 'before', priority: 0 })
export class JWTMiddleware extends PYIMiddleware implements KoaMiddlewareInterface {
    public async use(ctx: Context, next: () => any) {
        await next();
    }
}
