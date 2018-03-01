var React = require('react');
var DefaultLayout = require('./../layouts/default');
var Moment = require('moment');

const tableContainer = {
    paddingTop: '20px',
    paddingBottom: '20px',
    paddingRight: '10px',
    paddingLeft: '10px'
};

class AgencyDetailComponent extends React.Component {

    render() {

        var agencyInfo = this.props.data;

        return (
            <DefaultLayout user={this.props.user}>
                <h2>Agency detail</h2>
                <br/><br/>

                {/*<div>{agencyInfo._id.toString()}</div>*/}
                <div><h4>Name : {agencyInfo.name}</h4></div>
                <div><h4>Email : {agencyInfo.email}</h4></div>
                <div><h4>Phone : {agencyInfo.phone}</h4></div>
                <div><h4>Overview : {agencyInfo.overview}</h4></div>
                <br/>
                <div><h4>Agent List</h4></div>
                <div className="table-responsive">
                    <table className="table table-striped table-hover">
                        <tr>
                            <th>No</th>
                            <th>Agent Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Created</th>
                        </tr>
                        {
                            agencyInfo.agent.map(function(item, i){
                                return (
                                    <tr key={i}>
                                        <td>{i+1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>{Moment(item.created_at).format("DD/MM/YYYY")}</td>
                                    </tr>
                                );
                            })
                        }
                    </table>
                </div>
                <div><h4>Created : {Moment(agencyInfo.created_at).format("MM/DD/YYYY")}</h4></div>
                <div><h4>Updated : {Moment(agencyInfo.updated_at).format("MM/DD/YYYY")}</h4></div>


            </DefaultLayout>
        );
    }
}

module.exports = AgencyDetailComponent;