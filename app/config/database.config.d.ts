import { PYIConfiguration } from 'pyi';
import { SequelizeOptions } from 'sequelize-typescript';
import { ReplicationOptions, PoolOptions, Dialect } from 'sequelize/types';
export declare class DataBaseConfiguration extends PYIConfiguration implements SequelizeOptions {
    dialect: Dialect;
    replication: ReplicationOptions;
    pool: PoolOptions;
    constructor();
}
