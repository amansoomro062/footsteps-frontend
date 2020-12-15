import React, { Component } from 'react';

import Brand from './Brands';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal'

import Button from 'react-bootstrap/Button'
const api = axios.create({
    baseURL: `http://localhost:5041/`
})


class News extends Component {


    state = {
        news: [],
        show: false,
        title: '',
        bodytext: ''
    }

    constructor() {
        super();
        this.getNews();
        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);
    }

    handleHide() {
        console.log("okay");
        this.setState({ show: false });
    }
    handleShow(temp) {

        this.setState({ title: temp.title });
        this.setState({ bodytext: temp.bodytext });
        this.setState({ show: true });
    }


    getNews = async () => {
        try {
            let data = await api.get('/news').then(({ data }) => data);
            this.setState({ news: data })
            console.log(data[0].bodytext);
        } catch (err) {
            console.log(err);
        }
    }



    render() {
        return (
            <section>
                <Modal show={this.state.show} onHide={this.handleHide}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.state.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{this.state.bodytext}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleHide}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

                <div className="logos">
                    <Brand />
                </div>
                <main class="news__main">

                    {this.state.news.map(temp_news =>
                        <section class="news pointer" key={temp_news._id} onClick={() => this.handleShow(temp_news)}>
                            <h4>{temp_news.title}</h4>
                            <i>{temp_news.created} </i>

                            <p className="margin-top-10">
                                {/* {temp_news.bodytext} */}
                                {temp_news.teaser}
                            </p>
                        </section>




                    )}


                </main>

            </section>

        );
    }
}
export default News;