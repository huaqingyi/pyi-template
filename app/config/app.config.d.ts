import { PYIAutoAppConfiguration } from 'pyi';
export declare class AppConfiguration extends PYIAutoAppConfiguration<any> {
    port: number;
    constructor(props: any);
    development(): Promise<void>;
    production(): Promise<void>;
}
