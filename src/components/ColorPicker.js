import { Component } from 'react';
import { Colors } from './Colors';

export class ColorPicker extends Component {

    constructor(props) {
        super(props);
        this.state = {bool: false};
        this.boxstyle = {backgroundColor:"", backgroundImage:""};
    }

    ColorPickerCallBack = (colorSelect) => {
        this.setState({
            bool: !this.state.bool
        })
        document.getElementById("box-pos").classList.remove("bg-light");
        this.boxstyle = {
            backgroundColor: colorSelect,
            backgroundImage: "linear-gradient(to right,rgb(186, 152, 193),"+colorSelect+", rgb(186, 152, 193))"
        }
    }

    handleClick = () => {
        this.setState({
            bool: !this.state.bool
        });
    }

    render() {
        return (
            <div className="main-pos" style={{backgroundImage:this.boxstyle.backgroundImage}}>
                <div className="text-center h3 py-3 fw-bold">Color Picker</div>
                <div className="d-flex flex-column bg-light mx-auto rounded-4" id="box-pos" style={{backgroundColor:this.boxstyle.backgroundColor}}>
                    {this.state.bool?  <Colors getBgColor = {this.ColorPickerCallBack} colors={this.props.colors}/> : <div className="col-pos"></div>}
                    <div className="text-center pt-2"><button className="btn btn-success rounded-0" onClick={this.handleClick}>Pick a Color</button></div>
                </div>
            </div>
        )
    }
}