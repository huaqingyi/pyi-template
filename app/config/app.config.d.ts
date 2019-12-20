import { PYIAppConfiguration } from 'pyi';
export declare class AppConfiguration extends PYIAppConfiguration {
    development(): Promise<void>;
    production(): Promise<void>;
}
