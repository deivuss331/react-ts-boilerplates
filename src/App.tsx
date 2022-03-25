import AppProviders from 'providers/AppProviders';
import UnauthenticatedApp from 'views/UnauthenticatedApp';

function App(): JSX.Element {
  return (
    <AppProviders>
      <UnauthenticatedApp />
    </AppProviders>
  );
}

export default App;
