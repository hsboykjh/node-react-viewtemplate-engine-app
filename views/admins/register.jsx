var React = require('react');
var DefaultLayout = require('./../layouts/default');

const bodyStyle = {
    marginTop: '40px',
    marginBottom: '40px'
};

class RegisterComponent extends React.Component {

    render() {
        return (
            <DefaultLayout user={this.props.user} locals={this.props.locals}>
                <div style={bodyStyle}>
                    <div className="container">
                        <div className="col-sm-6 col-sm-offset-3">
                            <h1><span className="fa fa-sign-in"></span>Register New Admin</h1>
                            <br/>
                            <br/>
                            <div>
                                <form method="post" action="/admins/register">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input type="text" className="form-control" placeholder="Name" name="name"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control" placeholder="Password" name="password"/>
                                    </div>
                                    <button type="submit" className="btn btn-success">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        );
    }
}

module.exports = RegisterComponent;