var MessageDisplay = React.createClass({

    render: function() {
        return (
            <div className={this.props.className}>
                {this.props.children}
            </div>
        );
    }
});

React.render((
    <MessageDisplay className="foo">
        <MessageDisplay className="bar">
            This component is nested
        </MessageDisplay>
    </MessageDisplay>
), document.getElementById('example'));

