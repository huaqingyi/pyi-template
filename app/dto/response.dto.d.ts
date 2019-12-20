import { PYIDto } from 'pyi';
export declare class ResponseDto extends PYIDto {
    data: any;
    success: boolean;
    errcode?: number;
    errmsg?: string;
    constructor(data: any);
    throws(errors: Error): this;
}
