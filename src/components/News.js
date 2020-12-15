import React, { Component } from 'react';

import Brand from './Brands';
import axios from 'axios';

const api = axios.create({
    baseURL: `http://localhost:5041/`
})


class News extends Component {


    state = {
        news: [],
    }
    
    constructor() {
        super();
        this.getNews();
    }

    getNews = async () => {
        try {
            let data = await api.get('/news').then(({ data }) => data);
            this.setState({ news: data })
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    }



    render() {
        return (
            <section>
                <div className="logos">
                    <Brand />
                </div>
                <main class="news__main">

                {this.state.news.map(temp_news =>
                  <section class="news" key={temp_news._id}>
                  <h4>{temp_news.title}</h4>
                  <i>{temp_news.created} </i>

                  <p className="margin-top-10">
                      {temp_news.bodytext} 
                      <br />
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