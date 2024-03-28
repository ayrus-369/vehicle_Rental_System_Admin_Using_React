import React from 'react';
import AppLayout from './components/AppLayout';
import { DataProvider } from './context/DataContext';

const App = () => {
  return (
    <div>
      <DataProvider>
      <AppLayout />
      </DataProvider>
    </div>
  );
};

export default App;
