import { PYIApplication, PYIOnInitApplication, PYIOnInit, PYIOnScanInit, PYIOnScanChange, PYIOnScanAfter, PYIOnConfigurationInit, PYIOnConfigurationAfter, PYIOnPluginApplication, PYIAppConfiguration } from 'pyi';
export declare class Application extends PYIApplication<any, any> implements PYIOnInit, PYIOnScanInit, PYIOnScanChange, PYIOnScanAfter, PYIOnConfigurationInit, PYIOnConfigurationAfter, PYIOnInitApplication, PYIOnPluginApplication {
    constructor();
    onInit(): Promise<void>;
    onScanInit(): Promise<void>;
    onScanChange(): Promise<void>;
    onScanAfter(): Promise<void>;
    onConfigurationInit(): Promise<void>;
    onConfigurationAfter(config: PYIAppConfiguration): Promise<void>;
    onInitApplication(): Promise<void>;
    onPluginApplication(): Promise<void>;
}
