import './App.css';
import { useState, useEffect } from 'react';

import Section01 from './Components/Section01';
import Section02 from './Components/Section02';
import Section03 from './Components/Section03';
import Section04 from './Components/Section04';
import Section05 from './Components/Section05';
import Section06 from './Components/Section06';
import Section07 from './Components/Section07';
import Section08 from './Components/Section08';
import Section09 from './Components/Section09';
import Section10 from './Components/Preloader';
import Cursor from './Components/cursor';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Show preloader for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Section10 />;
  }

  return (
    <>
          <Cursor />

      <Section01 />
      <Section02 />
      <Section03 />
      <Section04 />
      <Section05 />
      <Section06 />
      <Section07 />
      <Section08 />
      <Section09 />
    </>
  );
}

export default App;
