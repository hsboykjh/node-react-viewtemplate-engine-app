var React = require('react');
var DefaultLayout = require('./../layouts/default');
var Moment = require('moment');

const tableContainer = {
    paddingTop: '20px',
    paddingBottom: '20px',
    paddingRight: '10px',
    paddingLeft: '10px'
};

class UserDetailComponent extends React.Component {

    render() {
        var userInfo = this.props.data;
        
        return (
            <DefaultLayout user={this.props.user}>
                <h2>User Detail</h2>

                {/*<div>{userInfo._id.toString()}</div>*/}
                <div>ID : {userInfo._id.toString()}</div>
                <div>Name : {userInfo.name}</div>
                <div>Password : {userInfo.password}</div>
                <div>Owner : {userInfo.owner_id}</div>
                <div>Created : {Moment(userInfo.created_at).format("MM/DD/YYYY")}</div>
                <div>Updated : {Moment(userInfo.updated_at).format("MM/DD/YYYY")}</div>
            </DefaultLayout>
        );
    }
}

module.exports = UserDetailComponent;