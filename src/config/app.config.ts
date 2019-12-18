import { Configuration, PYIAppConfiguration, PYIRoutingConfiguration } from 'pyi';

@Configuration
export class AppConfiguration extends PYIAppConfiguration {
    public async development() {
        this.port = 4001;
    }
    public async production() {
        this.port = 4002;
    }
}
