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
            var firstDeg = 360 - 87 * (this.state.value / 100);
            var secondDeg = 360 - 51 * (this.state.value / 100);
            var thirdDeg = 360 - 36 * (this.state.value / 100);
            var fourthDeg = 360 - 15 * (this.state.value / 100);
            var fifthDeg = 360 - 0 * (this.state.value / 100);
            var sixthDeg = 360 + 15 * (this.state.value / 100);
            var seventhDeg = 360 + 36 * (this.state.value / 100);
            var eightDeg = 360 + 51 * (this.state.value / 100);
            var ningthDeg = 360 + 87 * (this.state.value / 100);
            var tenthDeg = 360 + 87 * (this.state.value / 100);

            var firstLeafCss = {
                transform: 'rotate(' + firstDeg + 'deg)',
                'animation-delay': '0.1s'
            }

            var secondLeafCss = {
                transform: 'rotate(' + secondDeg + 'deg)',
                'animation-delay': '0.1s'
            }
            var thirdLeafCss = {
                transform: 'rotate(' + thirdDeg + 'deg)',
                'animation-delay': '0.15s'
            }
            var fourthLeafCss = {
                transform: 'rotate(' + fourthDeg + 'deg)',
                'animation-delay': '0.1s'
            }
            var fifthLeafCss = {
                transform: 'rotate(' + fifthDeg + 'deg)',
                'animation-delay': '0.1s'
            }
            var sixthLeafCss = {
                transform: 'rotate(' + sixthDeg + 'deg)',
                'animation-delay': '0.1s'
            }
            var seventhLeafCss = {
                transform: 'rotate(' + seventhDeg + 'deg)',
                'animation-delay': '0.1s'
            }
            var eighthLeafCss = {
                transform: 'rotate(' + eightDeg + 'deg)',
                'animation-delay': '0.1s'
            }
            var ninthLeafCss = {
                transform: 'rotate(' + ningthDeg + 'deg)',
                'animation-delay': '0.1s'
            }
            var tenthLeafCss = {
                transform: 'rotate(' + tenthDeg + 'deg)',
                'animation-delay': '0.1s'
            }
            var top = { top: 100 - this.state.value + 7 + "%" };
            myProgress = (<div className="lotus" style={top}>
                <div className="leaf" style={firstLeafCss}></div>
                <div className="leaf" style={secondLeafCss}></div>
                <div className="leaf" style={thirdLeafCss}></div>
                <div className="leaf" style={fourthLeafCss}></div>
                <div className="leaf" style={fifthLeafCss}></div>
                <div className="leaf" style={sixthLeafCss}></div>
                <div className="leaf" style={seventhLeafCss}></div>
                <div className="leaf" style={eighthLeafCss}></div>
                <div className="leaf" style={ninthLeafCss}></div>
                <div className="leaf" style={tenthLeafCss}></div>
                {/*<div className="green-leaf"></div>*/}
            </div >);
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