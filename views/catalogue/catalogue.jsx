var React = require('react');
var DefaultLayout = require('./../layouts/default');
var Moment = require('moment');

const tableContainer = {
    paddingTop: '20px',
    paddingBottom: '20px',
    paddingRight: '10px',
    paddingLeft: '10px'
};

class CatalogueComponent extends React.Component {

    render() {
        return (
            <DefaultLayout user={this.props.user}>
                <h1>Catalogues</h1>
                <div style={tableContainer}>
                    <div className="table-responsive">
                        <table className="table table-striped table-hover">
                            <tr>
                                <th>No</th>
                                <th>Status</th>
                                <th>Start</th>
                                <th>End</th>
                                <th>Count Down</th>
                                <th>Created</th>
                            </tr>
                            {
                                this.props.data.map(function(item, i){
                                    {/*console.log('data : ', i, item);*/}
                                    return (
                                        <tr key={i}>
                                            <td>{item.no}</td>
                                            <td>{item.status}</td>
                                            <td>{Moment(item.start_date).format("DD/MM/YYYY")}</td>
                                            <td>{Moment(item.end_date).format("DD/MM/YYYY")}</td>
                                            <td>{Moment(item.end_time).format("DD/MM/YYYY HH:mm:ss")}</td>
                                            <td>{Moment(item.created_at).format("DD/MM/YYYY")}</td>
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

module.exports = CatalogueComponent;