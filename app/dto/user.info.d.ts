import { PYIDto } from 'pyi';
export interface UserInfo {
    id: number;
    username: string;
    age: string;
    nikename: string;
    email: string;
}
export declare class UserDto extends PYIDto {
    err: boolean;
    data: UserInfo;
}
