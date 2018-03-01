var React = require('react');
var DefaultLayout = require('./layouts/default');

const bodyStyle = {
    margin: '40px'
};

class IndexComponent extends React.Component {

    render() {

        return (
            <DefaultLayout user={this.props.user} locals={this.props.locals}>
                <div style={bodyStyle}>
                    <div>
                        <h3>This is Sample Admin WebSite</h3>
                    </div>
                </div>
            </DefaultLayout>
        );
    }
}

module.exports = IndexComponent;