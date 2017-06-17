firstApp.App = React.createClass({
    componentDidMount: function () {
        var progressBar = this.refs.progressBar1;
        var value = 0;
        setInterval(function () {
            if (value <= 100) {
                progressBar.update(value);
                value++;
            }

        }, 100)
    },
    render() {
        return (<div><firstApp.progressBar ref="progressBar1" theme={"lotus"} value={60} displayType={"vertical"} ctrlCssClass={"lotus-theme"} /></div>)

    }
});
ReactDOM.render(<firstApp.App />, document.getElementById("react-app"));
