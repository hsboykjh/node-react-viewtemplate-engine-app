var React = require('react');
var HeaderComponent = require('../header');
var FooterComponent = require('../footer');
var NavbarComponent = require('../navbar');
var FlashComponent = require('../flash');

class DefaultLayout extends React.Component {

    render() {
        return (
            <html>
            <head>
                <title>Admin</title>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
            </head>
            <body>
            <div className="container">
                {/*<HeaderComponent></HeaderComponent>*/}
                <NavbarComponent user={this.props.user}></NavbarComponent>
                <FlashComponent locals={this.props.locals}></FlashComponent>
                {this.props.children}
                <FooterComponent></FooterComponent>
            </div>
            </body>
            </html>
        );
    }
}

module.exports = DefaultLayout;