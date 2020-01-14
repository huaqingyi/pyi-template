import {
    PYIBootstrap, PYIApplication, PYIOnInitApplication,
    PYIOnInit, PYIOnScanInit, PYIOnScanChange, PYIOnScanAfter,
    PYIOnConfigurationInit, PYIOnConfigurationAfter,
    PYIOnPluginApplication,
    PYIAppConfiguration
} from 'pyi';
import { SwaggerInjectService } from 'pyi-swagger';

@PYIBootstrap
export class Application extends PYIApplication<any, any> implements
    PYIOnInit,
    PYIOnScanInit,
    PYIOnScanChange,
    PYIOnScanAfter,
    PYIOnConfigurationInit,
    PYIOnConfigurationAfter,
    PYIOnInitApplication,
    PYIOnPluginApplication {

    constructor() {
        super();
    }

    public async onInit() {
        await SwaggerInjectService.register();
        console.log('onInit ...');
    }

    public async onScanInit() {
        console.log('onScanInit ...');
    }

    public async onScanChange() {
        console.log('onScanChange ...');
    }

    public async onScanAfter() {
        console.log('onScanAfter ...');
    }

    public async onConfigurationInit() {
        console.log('onConfigurationInit ...');
    }

    public async onConfigurationAfter(config: PYIAppConfiguration) {
        console.log('onConfigurationAfter ...');
    }

    public async onInitApplication() {
        console.log('onInitApplication ...');
    }

    public async onPluginApplication() {
        console.log('onPluginApplication ...');
    }
}
