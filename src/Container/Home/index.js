import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CardMoviesComponents from '../../Components/CardMovies';

const HomeContainer = () => {
    // data will store in this state
    const [content, setContent] = useState([]);
    //page no state
    const [pageno, setPageno] = useState(1);
    // for pagination state
    const [paginationno, setPaginationno] = useState(0);
    const API_KEY = process.env.REACT_APP_NOT_SECRET_CODE;
    const GetDataTrending = async ()=>{
        const {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=${pageno}`);
        //set data
        setContent(data.results);
        setPaginationno(data.total_pages);
        // console.log(content.lenght)
          console.log('data',data);
    }
 
// When  we will update any data through GetDataTrending funcation  useEffect will we call 

    useEffect(()=>{
GetDataTrending ()
    },[])
    return (
        <main className='homePage'>
        <Container>
            <Row>
                <Col className='col-12'>
                <section>
                        <h1 className="txtCenter" >Top Trending</h1>
                            <h3 className="txtCenter">Tv and Movie For You</h3>
                    </section>
                </Col>
                {
                    content && content.length > 0 ? content.map((item)=>{
                        return(
                            <CardMoviesComponents  key={item.id} data={item} mediaType="TV" />
                        )
                    }) : 'Loding Content ....' 
                }
            </Row>


        </Container>
            
        </main>
    );
};

export default HomeContainer;