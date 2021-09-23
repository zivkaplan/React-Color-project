import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Page from './components/Page';
import Palette from './components/Palette';
import SingleColorPalette from './components/SingleColorPalette';
import PaletteList from './components/PaletteList';
import NewPaletteForm from './components/NewPaletteForm';
import seedColors from './seedColors';
import generatePalette from './colorHelpers';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            palettes:
                JSON.parse(window.localStorage.getItem('palettes')) ||
                seedColors,
        };
        this.savePalette = this.savePalette.bind(this);
        this.findPalette = this.findPalette.bind(this);
        this.deletePalette = this.deletePalette.bind(this);
        this.syncLocalStorage = this.syncLocalStorage.bind(this);
    }

    findPalette(id) {
        return this.state.palettes.find((palette) => palette.id === id);
    }

    savePalette(newPalette) {
        this.setState(
            { palettes: [...this.state.palettes, newPalette] },
            this.syncLocalStorage
        );
    }
    deletePalette(id) {
        this.setState(
            (st) => ({
                palettes: this.state.palettes.filter(
                    (palette) => palette.id !== id
                ),
            }),
            this.syncLocalStorage
        );
    }
    syncLocalStorage() {
        window.localStorage.setItem(
            'palettes',
            JSON.stringify(this.state.palettes)
        );
    }
    render() {
        const paletteListPage = (routeProps) => (
            <Page>
                <PaletteList
                    palettes={this.state.palettes}
                    {...routeProps}
                    deletePalette={this.deletePalette}
                />
            </Page>
        );
        return (
            <Route
                render={({ location }) => (
                    <TransitionGroup>
                        <CSSTransition
                            key={location.key}
                            classNames="fade"
                            timeout={500}
                        >
                            <Switch location={location}>
                                <Route
                                    exact
                                    path="/"
                                    render={paletteListPage}
                                />
                                <Route
                                    exact
                                    path="/palette/create"
                                    render={(routeProps) => (
                                        <Page>
                                            <NewPaletteForm
                                                savePalette={this.savePalette}
                                                {...routeProps}
                                                palettes={this.state.palettes}
                                            />
                                        </Page>
                                    )}
                                />
                                <Route
                                    exact
                                    path="/palette/:paletteId"
                                    render={(routeProps) => (
                                        <Page>
                                            <Palette
                                                palette={generatePalette(
                                                    this.findPalette(
                                                        routeProps.match.params
                                                            .paletteId
                                                    )
                                                )}
                                            />
                                        </Page>
                                    )}
                                />
                                <Route
                                    exact
                                    path="/palette/:paletteId/:colorId"
                                    render={(routeProps) => (
                                        <Page>
                                            <SingleColorPalette
                                                colorId={
                                                    routeProps.match.params
                                                        .colorId
                                                }
                                                palette={generatePalette(
                                                    this.findPalette(
                                                        routeProps.match.params
                                                            .paletteId
                                                    )
                                                )}
                                            />
                                        </Page>
                                    )}
                                />
                                <Route render={paletteListPage} />
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                )}
            />
        );
    }
}

export default App;
