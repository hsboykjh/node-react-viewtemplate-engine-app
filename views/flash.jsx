var React = require('react');

class FlashComponent extends React.Component {


    render() {

        var messages = null;
        if(this.props.locals && this.props.locals.messages){
            messages = this.props.locals.messages
        }

        var success_msg = null;
        var error_msg = null;
        var error = null;

        // console.log("locals : ",this.props.locals);

        if(messages){
            if(messages.success_msg){
                success_msg = <div className="alert alert-success">{messages.success_msg}</div>
            }

            if(messages.error_msg){
                error_msg = <div className="alert alert-danger">{messages.error_msg}</div>
            }

            if(messages.error){
                error = <div className="alert alert-danger">{messages.error + ". ( If you have problems, please contact to email@gmail.com )"}</div>
            }
        }

        return (
            <div className="row">
                <div className="col-lg-12">
                    {success_msg}
                    {error_msg}
                    {error}
                </div>
            </div>
        );
    }
}

module.exports = FlashComponent;