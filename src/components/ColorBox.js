import React from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { withStyles } from '@material-ui/core/styles';
import styles from './jss/ColorBoxStyles';

class ColorBox extends React.Component {
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
        const { classes, name, background, moreShadesUrl, showingFullPalette } =
            this.props;
        return (
            <CopyToClipboard text={background} onCopy={this.handleCopy}>
                <div style={{ background }} className={classes.ColorBox}>
                    <div
                        style={{ background }}
                        className={`${classes.copyOverlay} ${
                            this.state.copyOverlay && classes.showOverlay
                        }`}
                    />
                    <div
                        className={`${classes.copyMsg} ${
                            this.state.copyOverlay && classes.showCopyMsg
                        }
                        `}
                    >
                        <h1>Copied!</h1>
                        <p className={classes.autoTextColor}>{background}</p>
                    </div>
                    <div>
                        <div className={classes.boxContent}>
                            <span className={classes.autoTextColor}>
                                {name}
                            </span>
                        </div>
                        <button
                            className={`${classes.copyButton} ${classes.autoTextColor}`}
                        >
                            Copy
                        </button>
                    </div>
                    {showingFullPalette && (
                        <Link
                            to={moreShadesUrl}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <span
                                className={`${classes.seeMore} ${classes.autoTextColor}`}
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

export default withStyles(styles)(ColorBox);
