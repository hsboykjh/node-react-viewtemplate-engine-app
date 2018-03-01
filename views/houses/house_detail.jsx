var React = require('react');
var DefaultLayout = require('./../layouts/default');
var Moment = require('moment');

const tableContainer = {
    paddingTop: '20px',
    paddingBottom: '20px',
    paddingRight: '10px',
    paddingLeft: '10px'
};

class HouseComponent extends React.Component {

    render() {

        var houseInfo = this.props.data;

        return (
            <DefaultLayout user={this.props.user}>
                <h2>House detail</h2>

                {/*<div>{houseInfo._id.toString()}</div>*/}
                <div>Bedrooms : {houseInfo.bed}</div>
                <div>Bathrooms : {houseInfo.bath}</div>
                <div>Carpark : {houseInfo.car}</div>
                <div>Location : {houseInfo.loc}</div>
                <div>Owner : {houseInfo.owner_id}</div>
                <div>Created : {Moment(houseInfo.created_at).format("MM/DD/YYYY")}</div>
                <div>Updated : {Moment(houseInfo.updated_at).format("MM/DD/YYYY")}</div>


            </DefaultLayout>
        );
    }
}

module.exports = HouseComponent;