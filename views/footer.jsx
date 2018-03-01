var React = require('react');

const footerStyle = {
    textAlign: 'center',
    marginTop: '100px',
    marginBottom: '100px'
};

class FooterComponent extends React.Component {
    render() {
        return (
            <div style={footerStyle}>
                <h4>Copyright © 2018. All rights reserved.</h4>
            </div>
        );
    }
}

module.exports = FooterComponent;