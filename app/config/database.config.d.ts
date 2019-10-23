import { PYIAutoConfiguration } from 'pyi';
import { SequelizeOptions } from 'sequelize-typescript';
import { Dialect, ReplicationOptions, PoolOptions } from 'sequelize/types';
export declare class DBConfiguration extends PYIAutoConfiguration implements SequelizeOptions {
    dialect: Dialect;
    replication: ReplicationOptions;
    pool: PoolOptions;
    constructor();
}
