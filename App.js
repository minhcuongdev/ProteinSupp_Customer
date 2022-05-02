import MainApp from './src';
import useCachedResources from 'src/hooks/useCachedResources';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if(!isLoadingComplete) {
    return null
  } else {
    return (
        <MainApp/>
    );
  }
}


