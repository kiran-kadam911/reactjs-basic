import React from 'react';
import { BrowserRouter, Route, browserHistory, Switch } from 'react-router-dom';

import { Header } from './Header';
import { Home } from './Home';
import { HomeContent } from './HomeContent';
import { About } from './About';
import { Contact } from './Contact';
import { Error } from './Error';

export class App extends React.Component {
  render() {
    return (
    	<BrowserRouter>
    		<div>
    		<Header />
    			<Switch>
                {/*Now, if we’re at /about, <Switch> will start looking for a matching <Route>. 
                <Route path="/about"/> will match and <Switch> will stop looking for matches and render <About>. 
                Similarly, if we’re at /michael then <User> will render.*/}
			    	<Route path="/" component={HomeContent} exact />
		    		<Route path="/about" component={About} />
		    		<Route path="/contact" component={Contact} />
		    		<Route component={Error} />
	    		</Switch>
    		</div>
    	</BrowserRouter>
    );
  }
}