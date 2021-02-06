import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Input from '@c/UI/Input';
import DarkMode from '@c/Layout/DarkMode';

import icon from '../assets/icon.svg';
import './styles/index.global.sass';

const Hello = () => {
  return (
    <div className="page">
      <div className="page__content">
        <DarkMode />
        <div className="container">
          <img width="50px" alt="icon" src={icon} />

          <h1>Paste API Token</h1>

          <Input placeholder="Введите токен" allowClear />
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
