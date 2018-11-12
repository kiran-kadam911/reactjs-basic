import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, browserHistory } from 'react-router-dom';

import { App } from './components/App';

render(<App/>, document.getElementById('reactapp'));