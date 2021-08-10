import React from 'react';
import './App.css';
import seedColors from './seedColors';
import Palette from './components/Palette';
import generatePalette from './colorHelpers';
class App extends React.Component {
    render() {
        console.log(generatePalette(seedColors[0]));
        return (
            <div className="App">
                <Palette {...seedColors[4]} />
            </div>
        );
    }
}

export default App;
