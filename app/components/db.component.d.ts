import { PYIComponent } from 'pyi';
import { Sequelize, SequelizeOptions, ModelCtor } from 'sequelize-typescript';
import { DBConfiguration } from '../config/database.config';
export declare class DBComponent extends PYIComponent<DBConfiguration> {
    props: DBConfiguration;
    db: Sequelize;
    constructor(props: SequelizeOptions);
    instance(): Sequelize;
    table(model: ModelCtor): ModelCtor;
}
