import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import seedColors from './seedColors';
import generatePalette from './colorHelpers';
import Palette from './components/Palette';
import SingleColorPalette from './components/SingleColorPalette';
import PaletteList from './components/PaletteList';
import NewPaletteForm from './components/NewPaletteForm';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            palettes: seedColors,
        };
        this.savePalette = this.savePalette.bind(this);
        this.findPalette = this.findPalette.bind(this);
    }

    findPalette(id) {
        return this.state.palettes.find((palette) => palette.id === id);
    }

    savePalette(newPalette) {
        this.setState({ palettes: [...this.state.palettes, newPalette] });
    }
    render() {
        return (
            <Switch>
                <Route
                    exact
                    path="/"
                    render={(routeProps) => (
                        <PaletteList
                            palettes={this.state.palettes}
                            {...routeProps}
                        />
                    )}
                />
                <Route
                    exact
                    path="/palette/create"
                    render={(routeProps) => (
                        <NewPaletteForm
                            savePalette={this.savePalette}
                            {...routeProps}
                            palettes={this.state.palettes}
                        />
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
