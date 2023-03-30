import { Component } from "react";
import {Card} from 'react-bootstrap';

class SingleBook extends Component {
    state = {
        selected: false,
    };
    handleChange = () => {
        this.setState({ selected: true});
        if(this.state.selected === true) {
            this.setState({selected: false}) 
    }};
    
    render() {
        const cardClassName = this.state.selected ? "border border-danger" : "";
        return(
            <Card className={cardClassName}>
            <Card.Img 
            src={this.props.img} 
            className="img-fluid contain" 
            onClick={()=>{
                this.handleChange()
            }}/>
            <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text>
                € {this.props.price}
                </Card.Text>
            </Card.Body>
            </Card>
        )
    }
}

export default SingleBook;