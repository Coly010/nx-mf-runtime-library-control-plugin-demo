import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote2',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
  useNxLibraryControlPlugin: false
};

export default config;
