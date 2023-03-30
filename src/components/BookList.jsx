import { Component } from "react";
import {Row, Col, Form, FormControl} from 'react-bootstrap';
import scifi from "../data/scifi.json";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import SingleBook from "./SingleBook";

class BookList extends Component {
    state = {
        initialValue: null,
        allTheBooks: [
            ...scifi,
            ...fantasy,
            ...history,
            ...horror,
            ...romance
        ]
    }
    handleChange = (event) => {
        this.setState({initialValue: event.target.value});
    }
    render(){
        return(
            <>
            <div className="bg-warning bg-opacity-25 p-5">
            <Form>
                <FormControl 
                    type="text" 
                    placeholder="Select a category (fantasy, history, horror, romance, scifi)" 
                    onChange={this.handleChange} />
            </Form>
            </div>
            

            {this.state.initialValue === 'scifi' && (
            <Row className="bg-warning bg-opacity-50 p-5">
                {scifi.map((scifi) => (
                <Col key={`scifi-book-${scifi.asin}`} className="col-12 col-md-4 col-lg-3 col-xl-2 pb-4">
                    <SingleBook img={scifi.img} title={scifi.title} price={scifi.price}/>
                </Col>
                ))}
            </Row>
            )}

            {this.state.initialValue === 'fantasy' && (
            <Row className="bg-warning bg-opacity-50 p-5">
                {fantasy.map((fantasy) => (
                <Col key={`fantasy-book-${fantasy.asin}`} className="col-12 col-md-4 col-lg-3 col-xl-2 pb-4">
                    <SingleBook img={fantasy.img} title={fantasy.title} price={fantasy.price}/>
                </Col>
                ))}
            </Row>
            )}

            {this.state.initialValue === 'history' && (
            <Row className="bg-warning bg-opacity-50 p-5">
                {history.map((history) => (
                <Col key={`history-book-${history.asin}`} className="col-12 col-md-4 col-lg-3 col-xl-2 pb-4">
                    <SingleBook img={history.img} title={history.title} price={history.price}/>
                </Col>
                ))}
            </Row>
            )}

            {this.state.initialValue === 'horror' && (
            <Row className="bg-warning bg-opacity-50 p-5">
                {horror.map((horror) => (
                <Col key={`horror-book-${horror.asin}`} className="col-12 col-md-4 col-lg-3 col-xl-2 pb-4">
                    <SingleBook img={horror.img} title={horror.title} price={horror.price}/>
                </Col>
                ))}
            </Row>
            )}

            {this.state.initialValue === 'romance' && (
            <Row className="bg-warning bg-opacity-50 p-5">
                {romance.map((romance) => (
                <Col key={`romance-book-${romance.asin}`} className="col-12 col-md-4 col-lg-3 col-xl-2 pb-4">
                    <SingleBook img={romance.img} title={romance.title} price={romance.price}/>
                </Col>
                ))}
            </Row>
            )}
            </>
        )
    }
}

export default BookList;