import React, { useState } from 'react'
import { Form, FormControl, Row, Container, Col, Button } from 'react-bootstrap'
import SearResult from '../Components/searchresult'
import Axios from 'axios';
export default function WordsSearch(props) {
    const [searchText, setSearchText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [searchResult, setSearchResult] = useState([]);
    const handleSearch = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        try{
            const queryString =  `https://api.datamuse.com/words?sp=${searchText}`;
            const wordsResponse = await Axios.get(
                queryString
            ) 
            setSearchResult(wordsResponse.data);
            setIsLoading(false);
        }
        catch(err){
            setIsLoading(false);
        }

        // alert(searchText)
        
        // event.stopPropagation();
    };

    function validateForm() {
        return searchText.length > 0;
    }

    return (<Container>
        <Row>
            <Col>
                <Form inline onSubmit={handleSearch}>
                    <Row>
                        <FormControl type="text" placeholder="Search" className=" mr-sm-2" value={searchText} onChange={ e => setSearchText(e.target.value)} required />
                        
                        <Button type="submit"  disabled={!validateForm()}>
                            {isLoading ? 'Searching' : 'Search'}
                        </Button>
                    </Row>
                </Form>
            </Col>
        </Row>
        <Row>
            <Col>
            </Col>
        </Row>
        <Row>
            <Col>
                <SearResult Result={searchResult}></SearResult>
            </Col>
        </Row>
    </Container>
    );

}