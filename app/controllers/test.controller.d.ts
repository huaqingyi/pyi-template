import { PYIController } from 'pyi';
import { TestService } from '../services/test.service';
import { LoginDao } from '../dao/test/login.dao';
import { ResponseDto } from '../dto/response.dto';
export declare class TestController extends PYIController {
    service: TestService;
    test(): Promise<number>;
    error(): ResponseDto;
    login(login: LoginDao): ResponseDto;
}
