var React = require('react');
var AuctionLayout = require('./../layouts/default_firebase_client');

class AuctionComponent extends React.Component {

    render() {
        return (
            <AuctionLayout user={this.props.user}>
            </AuctionLayout>
        );
    }
}

module.exports = AuctionComponent;