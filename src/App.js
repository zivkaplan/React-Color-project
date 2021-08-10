import React from 'react';
import './App.css';
import seedColors from './seedColors';
import Palette from './components/Palette';
import generatePalette from './colorHelpers';
class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Palette palette={generatePalette(seedColors[4])} />
            </div>
        );
    }
}

export default App;
