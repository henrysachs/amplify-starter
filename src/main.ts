import 'hammerjs';
import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';

import {Auth} from 'aws-amplify';
import amplify from './aws-exports';

Auth.configure({
  userPoolId: amplify.aws_user_pools_id,
  userPoolWebClientId: amplify.aws_user_pools_web_client_id,
  identityPoolId: amplify.aws_user_pools_web_client_id,
  region: amplify.aws_project_region
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
