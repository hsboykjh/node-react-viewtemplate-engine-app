var React = require('react');
var DefaultLayout = require('./../layouts/default');
var Moment = require('moment');

const tableContainer = {
    paddingTop: '20px',
    paddingBottom: '20px',
    paddingRight: '10px',
    paddingLeft: '10px'
};

class AgencyComponent extends React.Component {

    render() {
        return (
            <DefaultLayout user={this.props.user}>
                <h1>Agency</h1>
                <div style={tableContainer}>
                    <div className="table-responsive">
                        <table className="table table-striped table-hover">
                            <tr>
                                <th>No</th>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                {/*<th>Overview</th>*/}
                                {/*<th>Agent</th>*/}
                                <th>Created</th>
                                {/*<th>Updated</th>*/}
                            </tr>
                            {
                                this.props.data.map(function(agency, i){
                                    {/*console.log('data : ', i, agency);*/}
                                    return (
                                        <tr key={i}>
                                            <td>{i+1}</td>
                                            <td><a href={'/agency/'+agency._id.toString()}>{agency._id.toString()}</a></td>
                                            <td>{agency.name}</td>
                                            <td>{agency.email}</td>
                                            <td>{agency.phone}</td>
                                            {/*<td>{agency.overview}</td>*/}
                                            {/*<td>{agency.agent}</td>*/}
                                            <td>{Moment(agency.created_at).format("DD/MM/YYYY")}</td>
                                            {/*<td>{Moment(agency.updated_at).format("DD/MM/YYYY")}</td>*/}
                                        </tr>
                                    );
                                })
                            }
                        </table>
                    </div>
                </div>
            </DefaultLayout>
        );
    }
}

module.exports = AgencyComponent;