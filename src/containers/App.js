import React, {Component} from 'react';
import './App.css';
import Content from "../components/Content";


class App extends Component {
  render() {
    return (
        <div className="App tc">
            <header className="dib pad3 ma2 grow bw2">
              <h1 className="text-uppercase f1"><strong>Work in progress...</strong></h1>
            </header>
            <section className="flex justify-center">
                <Content />
            </section>
        </div>
    );
  }
}

export default App;
