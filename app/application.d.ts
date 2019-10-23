import { PYIApplication, PYIApplicationImpl } from 'pyi';
import { ScheduleComponent } from './components/schedule.component';
export declare class Application extends PYIApplication implements PYIApplicationImpl {
    schedule: ScheduleComponent;
    constructor();
    onInit(): Promise<void>;
    didLoad(): Promise<void>;
    onInitComponent(): Promise<void>;
    didInitComponent(): Promise<void>;
    didMakeConfig(): Promise<void>;
    didRuntime(): Promise<void>;
}
