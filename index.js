import express from 'express';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MapPanel from './src/components/MapPanel';
import AdvertisementForm from './src/components/AdvertisementForm';
import AuctionComponent from './src/components/AuctionComponent';

const app = express();
const port = process.env.PORT || 3000;

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/map-panel" component={MapPanel} />
          <Route path="/advertisement-form" component={AdvertisementForm} />
          <Route path="/auction" component={AuctionComponent} />
          {/* Ajoutez d'autres routes au besoin */}
        </Switch>
      </div>
    </Router>
  );
};

app.listen(port, () => {
  console.log(`Le serveur écoute sur le port ${port}`);
});

export default App;
