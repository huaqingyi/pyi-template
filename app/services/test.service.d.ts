import { PYIService } from 'pyi';
import { DBComponent } from '../components/db.component';
export declare class TestService extends PYIService {
    db: DBComponent;
    findAllUsers(): Promise<any>;
    findUser(): Promise<any>;
}
