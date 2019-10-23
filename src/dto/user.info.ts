import { Dto, PYIDto } from 'pyi';

export interface UserInfo {
    id: number;
    username: string;
    age: string;
    nikename: string;
    email: string;
}

@Dto
export class UserDto extends PYIDto {
    public err!: boolean;
    public data!: UserInfo;
}
