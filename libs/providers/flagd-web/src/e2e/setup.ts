import assert from 'assert';
import { FlagdWebProvider } from '../lib/flagd-web-provider';
import { OpenFeature } from '@openfeature/web-sdk';

const FLAGD_WEB_NAME = 'flagd-web';

// register the flagd provider before the tests.
console.log('Setting flagd web provider...');
OpenFeature.setProvider(new FlagdWebProvider({
  host: 'localhost',
  port: 8013,
  tls: false,
  maxRetries: -1,
}));
assert(
  OpenFeature.providerMetadata.name === FLAGD_WEB_NAME,
  new Error(`Expected ${FLAGD_WEB_NAME} provider to be configured, instead got: ${OpenFeature.providerMetadata.name}`)
);
console.log('flagd web provider configured!');
