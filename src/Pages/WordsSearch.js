import React from 'react'
import { Form, Button, FormControl, Row} from 'react-bootstrap'
export default class WordsSearch extends React.Component
{
    render()
    {
        return (<Form inline>
            <Row> 
            <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
            <Button type="pattern">Search Words</Button>
            </Row>
            <Row>
            </Row>
          </Form>);
    }
}