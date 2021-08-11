import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import seedColors from './seedColors';
import Palette from './components/Palette';
import SingleColorPalette from './components/SingleColorPalette';
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
                    path="/palette/:palleteId"
                    render={(routeProps) => (
                        <Palette
                            palette={generatePalette(
                                this.findPalette(
                                    routeProps.match.params.palleteId
                                )
                            )}
                        />
                    )}
                />
                <Route
                    exact
                    path="/palette/:palleteId/:colorId"
                    render={(routeProps) => (
                        <SingleColorPalette
                            colorId={routeProps.match.params.colorId}
                            palette={generatePalette(
                                this.findPalette(
                                    routeProps.match.params.palleteId
                                )
                            )}
                        />
                    )}
                />
            </Switch>
        );
    }
}

export default App;
