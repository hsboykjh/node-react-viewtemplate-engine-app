var React = require('react');
var DefaultLayout = require('./../layouts/default');
var Moment = require('moment');

const tableContainer = {
    paddingTop: '20px',
    paddingBottom: '20px',
    paddingRight: '10px',
    paddingLeft: '10px'
};

class UsersComponent extends React.Component {

    render() {
        return (
            <DefaultLayout user={this.props.user}>
                <h1>Users</h1>
                <div style={tableContainer}>
                    <div className="table-responsive">
                        <table className="table table-striped table-hover">
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>ID</th>
                                <th>Owner ID</th>
                                <th>Created</th>
                                <th>Updated</th>
                            </tr>
                            {
                                this.props.data.map(function(item, i){
                                    {/*console.log('data : ', i, item);*/}
                                    return (
                                        <tr key={i}>
                                            <td>{i+1}</td>
                                            <td><a href={'/users/'+item._id.toString()}>{item.name}</a></td>
                                            <td>{item._id.toString()}</td>
                                            <td>{item.owner_id}</td>
                                            <td>{Moment(item.created_at).format("DD/MM/YYYY")}</td>
                                            <td>{Moment(item.updated_at).format("DD/MM/YYYY")}</td>
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

module.exports = UsersComponent;