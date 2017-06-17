firstApp.progressBar = React.createClass({
    propTypes: {
        value: React.PropTypes.number,
        displayType: React.PropTypes.string,
        ctrlCssClass: React.PropTypes.string,
        theme: React.PropTypes.string
    },
    getDefaultProps: function () {
        return {
            displayType: "vertical",
            value: 0,
            ctrlCssClass: "",
            theme: "default"
        }
    },
    getInitialState: function () {
        return {
            value: this.props.value
        }
    },
    componentDidMount: function () {
        // this.setValue();
    },
    componentDidUpdate: function () {
        //  this.setValue();
    },
    componentWillUnMount: function () {
    },
    render() {
        var displayTypeCss = "progress-bar ";
        var lotusThemeEles = [];
        var myProgress = (<div className="my-progress" ref="progressBarChildDiv">
        </div>);
        if (this.props.displayType == "horizontal") {
            displayTypeCss = displayTypeCss + "horizontal";
        }
        else {
            displayTypeCss = displayTypeCss + "vertical";
        }
        if (this.props.theme == "lotus") {
            lotusThemeEles.push(<div className="bubbles x x1">  </div>);
            lotusThemeEles.push(<div className="bubbles x x2">  </div>);
            lotusThemeEles.push(<div className="bubbles x x3">  </div>);
            lotusThemeEles.push(<div className="bubbles x x4">  </div>);
            lotusThemeEles.push(<div className="bubbles x x5">  </div>);
            lotusThemeEles.push(<div className="bubbles x x6">  </div>);
            lotusThemeEles.push(<div className="bubbles x x7">  </div>);
            lotusThemeEles.push(<div className="bubbles x x8">  </div>);
            lotusThemeEles.push(<div className="bubbles x x9">  </div>);
            lotusThemeEles.push(<div className="bubbles x x10">  </div>);

            var firstLeafCss = {
                transform: 'rotate(360deg)',
                'animation-delay': '0.1s'
            }

             var secondLeafCss = {
                transform: 'rotate(252deg)',
                'animation-delay': '0.2s'
            }
               var thirdLeafCss = {
                transform: 'rotate(288deg)',
                'animation-delay': '0.3s'
            }
               var fourthLeafCss = {
                transform: 'rotate(324deg)',
                'animation-delay': '0.4s'
            }
               var fifthLeafCss = {
                transform: 'rotate(360deg)',
                'animation-delay': '0.5s'
            }
               var sixthLeafCss = {
                transform: 'rotate(396deg)',
                'animation-delay': '0.6s'
            }
               var seventhLeafCss = {
                transform: 'rotate(432deg)',
                'animation-delay': '0.7s'
            }
               var eighthLeafCss = {
                transform: 'rotate(468deg)',
                'animation-delay': '0.8s'
            }
               var ninthLeafCss = {
                transform: 'rotate(504deg)',
                'animation-delay': '0.9s'
            }
               var tenthLeafCss = {
                transform: 'rotate(540deg)',
                'animation-delay': '1s'
            }

            myProgress = (<div className="lotus">
                <div className="leaf" style = {firstLeafCss}></div>
                <div className="leaf" style={secondLeafCss}></div>
                <div className="leaf" style={thirdLeafCss}></div>
                <div className="leaf" style={fourthLeafCss}></div>
                <div className="leaf" style={fifthLeafCss}></div>
                <div className="leaf" style={sixthLeafCss}></div>
                <div className="leaf" style={seventhLeafCss}></div>
                <div className="leaf" style={eighthLeafCss}></div>
                <div className="leaf" style={ninthLeafCss}></div>
                <div className="leaf" style={tenthLeafCss}></div>
            </div>);
        }
        return (<div className={displayTypeCss + " " + this.props.ctrlCssClass}>
            {lotusThemeEles}
            {myProgress}
            <div className="loadbg"></div>
        </div>)

    },
    update: function (updatedValue) {
        this.setState({
            value: updatedValue
        });
    },

    setValue: function () {
        if (this.props.displayType == "vertical") {
            this.refs.progressBarChildDiv.style.height = this.state.value + "%";
        } else {
            this.refs.progressBarChildDiv.style.width = this.state.value + "%";
        }
    }
});