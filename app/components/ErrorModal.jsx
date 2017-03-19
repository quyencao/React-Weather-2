var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({
    getDefaultProps: function () {
        return {
            title: "Error"
        }
    },
    componentDidMount: function () {
        var {title, message} = this.props;
        var modalMarkup = (
            <div className="tiny reveal text-center" id="error-modal" data-reveal="">
                <h4>{title}</h4>
                <p>{message}</p>
                <p>
                    <button className="button hollow" data-close="">
                        Okay
                    </button>
                </p>
            </div>
        );

        var modal = $(ReactDOMServer.renderToString(modalMarkup));

        $(ReactDOM.findDOMNode(this)).html(modal);

        var modal = new Foundation.Reveal($("#error-modal"));
        modal.open();
    },
    render: function () {

        return (
            <div></div>
        )
    }
});

ErrorModal.propTypes = {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
}

module.exports = ErrorModal;