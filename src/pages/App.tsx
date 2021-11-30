import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import routes from '../routes/idnex';

const App: FC = () => (
  <RecoilRoot>
    <Router basename="/">{routes()}</Router>
  </RecoilRoot>
);
export default App;
