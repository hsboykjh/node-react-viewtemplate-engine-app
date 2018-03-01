var React = require('react');
var DefaultLayout = require('./../layouts/default');
var Moment = require('moment');

const tableContainer = {
    paddingTop: '20px',
    paddingBottom: '20px',
    paddingRight: '10px',
    paddingLeft: '10px'
};

class AdminDetailComponent extends React.Component {

    render() {
        var adminInfo = this.props.data;
        
        return (
            <DefaultLayout user={this.props.user}>
                <h2>Admin Detail</h2>

                {/*<div>{adminInfo._id.toString()}</div>*/}
                <div>ID : {adminInfo._id.toString()}</div>
                <div>Name : {adminInfo.name}</div>
                <div>Password : {adminInfo.password}</div>
                <div>Role : {adminInfo.role}</div>
                <div>Created : {Moment(adminInfo.created_at).format("MM/DD/YYYY")}</div>
                <div>Updated : {Moment(adminInfo.updated_at).format("MM/DD/YYYY")}</div>
            </DefaultLayout>
        );
    }
}

module.exports = AdminDetailComponent;