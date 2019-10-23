import { Model } from 'sequelize-typescript';
export declare class User extends Model<User> {
    id: number;
    name: string;
    readonly created_at: Date;
    readonly updated_at: Date;
}
