var React = require('react');

const navStyle = {
    padding: '20px',
    backgroundColor: '#2b4775',
    textAlign: 'left'
};

const menuStyle = {
    color: 'white',
    fontSize: '18px',
    marginRight: '20px'
};

const loginStyle = {
    color: 'white',
    fontSize: '14px',
    // marginRight: '10px'
};

class NavbarComponent extends React.Component {

    render() {

        let login = null;
        let admin = null;
        if(this.props.user){
            login = (<div style={loginStyle}>{this.props.user.name} ( {this.props.user.role.toUpperCase()} )  <span><a className="btn btn-sm btn-default" href='/admins/logout'> Logout</a></span></div>);

            if(this.props.user.role == 'admin'){
                admin = (<a style={menuStyle} href='/admins/'>Admins</a>);
            }

        }else{
            login = (
                <div>
                    <a className="btn btn-sm btn-default" href='/admins/login'>Login</a>
                </div>
                )
        }

        return (
            <div style={navStyle}>
                <a style={menuStyle} href='/'>Home</a>
                <a style={menuStyle} href='/users/'>Users</a>
                {admin}
                <a style={menuStyle} href='/auction/'>Auction</a>
                <a style={menuStyle} href='/catalogue/'>Catalogue</a>
                <a style={menuStyle} href='/house/'>House</a>
                <a style={menuStyle} href='/agency/'>Agency</a>
                <div className="pull-right">
                    {login}
                </div>
                <div>

                </div>
            </div>
        );
    }
}

module.exports = NavbarComponent;