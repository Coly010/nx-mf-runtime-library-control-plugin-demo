// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import NxWelcome from './nx-welcome';
import { SharedLib } from '@mf-runtime/shared-lib';

export function App() {
  return (
    <div>
      <SharedLib />
      <NxWelcome title="remote1" />
    </div>
  );
}

export default App;
