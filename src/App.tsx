import React from 'react';
import logo from './logo.svg';
import './App.css';
import ResultA from './ResultA';
import ResultB from './ResultB';
import { useDispatch } from 'react-redux';
import { increasePropA, increasePropB } from './redux/counter';

function App() {
    const dispath = useDispatch();

    console.log('App');

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>

                <br />

                <ResultA />
                <ResultB />

                <br />

                <button type="button" onClick={() => dispath(increasePropA())}>
                    ADD A
                </button>
                <button type="button" onClick={() => dispath(increasePropB())}>
                    ADD B
                </button>
            </header>
        </div>
    );
}

App.whyDidYouRender = true;

export default App;
