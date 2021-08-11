import React from 'react';
import chroma from 'chroma-js';
import './css/ColorBox.css';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default class ColorBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            copyOverlay: false,
        };
        this.handleCopy = this.handleCopy.bind(this);
    }
    handleCopy() {
        this.setState({ copyOverlay: true }, () => {
            setTimeout(() => this.setState({ copyOverlay: false }), 1500);
        });
    }
    render() {
        const { name, background, moreShadesUrl, showMoreLink } = this.props;
        const isDarkColor = chroma(background).luminance() <= 0.4;
        return (
            <CopyToClipboard text={background} onCopy={this.handleCopy}>
                <div style={{ background }} className="ColorBox">
                    <div
                        style={{ background }}
                        className={`copy-overlay ${
                            this.state.copyOverlay && 'show'
                        }`}
                    />
                    <div
                        className={`copy-msg ${this.state.copyOverlay && 'show'}
                        `}
                    >
                        <h1>Copied!</h1>
                        <p
                            className={`copy-desc ${
                                isDarkColor && 'light-text'
                            }`}
                        >
                            {background}
                        </p>
                    </div>
                    <div className="copy-container">
                        <div className="box-content">
                            <span className={isDarkColor && 'light-text'}>
                                {name}
                            </span>
                        </div>
                        <button
                            className={`copy-button ${
                                isDarkColor && 'light-text'
                            }`}
                        >
                            Copy
                        </button>
                    </div>
                    {showMoreLink && (
                        <Link
                            to={moreShadesUrl}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <span
                                className={`see-more ${
                                    isDarkColor && 'light-text'
                                }`}
                            >
                                More
                            </span>
                        </Link>
                    )}
                </div>
            </CopyToClipboard>
        );
    }
}
