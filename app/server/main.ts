import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from '../component';
import { config } from './config';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
