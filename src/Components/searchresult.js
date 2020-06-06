import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'

export default class SearchResult extends React.Component
{ 
    constructor(props) {
      super(props);
      this.state = {
        Words:[
          {
            word: 'Senthil' 
          },
          {
            word: 'Divya'
          }
        ]
      };
    }

    render()
    { 
        return (
          <Container>
          {this.props.Result.map(value => (<Row><Col><Card style={{ width: '18rem' }}> 
          <Card.Body>
            <Card.Title>{value.word}</Card.Title>
          </Card.Body>
        </Card></Col></Row>)
        )}</Container>);
    }
}