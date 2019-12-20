import { PYIService } from 'pyi';
import { Database } from '../components/database';
export declare class TestService extends PYIService {
    db: Database;
    findAll(): Promise<import("sequelize-typescript").Model<unknown, unknown>[]>;
    test(): Promise<{
        name: string;
    }>;
}
