import { Service, PYIService, autoconnect } from 'pyi';
import { Database } from '../components/database';
import { User } from '../models/user';

@Service
export class TestService extends PYIService {

    @autoconnect
    public db!: Database;

    public async findAll() {
        return this.db.table(User).findAll({ raw: true });
    }

    public async test() {
        throw new Error('测试 Service Error ...');
        return await { name: 'Hello World ...' };
    }
}
