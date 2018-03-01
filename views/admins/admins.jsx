var React = require('react');
var DefaultLayout = require('./../layouts/default');
var Moment = require('moment');

const tableContainer = {
    paddingTop: '20px',
    paddingBottom: '20px',
    paddingRight: '10px',
    paddingLeft: '10px'
};

class AdminsComponent extends React.Component {

    render() {
        return (
            <DefaultLayout user={this.props.user}>
                <h1>Admins</h1>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="pull-right">
                            <a href="register" className="btn btn-primary">Add</a>
                        </div>
                    </div>
                </div>
                <div style={tableContainer}>
                    <div className="table-responsive">
                        <table className="table table-striped table-hover">
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>ID</th>
                                <th>Role</th>
                                <th>Created</th>
                                <th>Updated</th>
                            </tr>
                            {
                                this.props.data.map(function(item, i){
                                    {/*console.log('data : ', i, item);*/}
                                    return (
                                        <tr key={i}>
                                            <td>{i+1}</td>
                                            <td><a href={'/admins/'+item._id.toString()}>{item.name}</a></td>
                                            <td>{item._id.toString()}</td>
                                            <td>{item.role}</td>
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

module.exports = AdminsComponent;