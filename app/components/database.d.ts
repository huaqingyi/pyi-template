import { PYIComponent } from 'pyi';
import { Sequelize, ModelCtor } from 'sequelize-typescript';
import { DataBaseConfiguration } from '../config/database.config';
export declare class Database extends PYIComponent<DataBaseConfiguration> {
    props: DataBaseConfiguration;
    database: Sequelize;
    constructor();
    i(): Sequelize;
    table(model: ModelCtor): ModelCtor;
    test(): string;
}
