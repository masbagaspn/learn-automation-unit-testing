import { MuiMode } from './components/mui/MuiMode';
import { AppProviders } from './providers/AppProviders';

export function App() {
  return (
    <AppProviders>
      <div>
        <MuiMode />
      </div>
    </AppProviders>
  );
}
