var React = require('react');

const titleStyle = {
    color: '#2b4775',
    textAlign: 'center',
    margin: '30px'
};

class HeaderComponent extends React.Component {
    render() {
        return (
            <div style={titleStyle}>
                <h1>admin prototype webpage</h1>
            </div>
        );
    }
}

module.exports = HeaderComponent;