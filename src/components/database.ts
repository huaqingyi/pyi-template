import { Component, PYIComponent, autoconnect } from 'pyi';
import { Sequelize, ModelCtor } from 'sequelize-typescript';
import { DataBaseConfiguration } from '../config/database.config';

@Component
export class Database extends PYIComponent<DataBaseConfiguration> {

    @autoconnect
    public props!: DataBaseConfiguration;

    public database: Sequelize;

    constructor() {
        super();
        this.database = new Sequelize(this.props);
    }

    public i() {
        return this.database;
    }

    public table(model: ModelCtor): ModelCtor {
        this.database.addModels([model]);
        return this.database.model(model);
    }

    public test() {
        return 'test component ...';
    }
}
