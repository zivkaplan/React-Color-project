import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import seedColors from './seedColors';
import Palette from './components/Palette';
import PaletteList from './components/PaletteList';
import generatePalette from './colorHelpers';
class App extends React.Component {
    findPalette(id) {
        return seedColors.find((palette) => palette.id === id);
    }
    render() {
        return (
            <Switch>
                <Route
                    exact
                    path="/"
                    render={(routeProps) => (
                        <PaletteList palettes={seedColors} {...routeProps} />
                    )}
                />
                <Route
                    exact
                    path="/palette/:id"
                    render={(routeProps) => (
                        <Palette
                            palette={generatePalette(
                                this.findPalette(routeProps.match.params.id)
                            )}
                        />
                    )}
                />
            </Switch>
            // <div className="App">
            //     <Palette palette={generatePalette(seedColors[4])} />
            // </div>
        );
    }
}

export default App;
