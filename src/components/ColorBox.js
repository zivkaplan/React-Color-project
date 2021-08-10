import React from 'react';
import './css/ColorBox.css';
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
        const { name, background } = this.props;
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
                        <p>{background}</p>
                    </div>
                    <div className="copy-container">
                        <div className="box-content">
                            <span>{name}</span>
                        </div>
                        <button className="copy-button">Copy </button>
                    </div>
                    <span className="see-more">More</span>
                </div>
            </CopyToClipboard>
        );
    }
}
