import React from 'react'
import { ListGroup } from 'react-bootstrap'

export default function VerticalMenu() {
    return (
        <div>
            <ListGroup className='verticalMenu'>
                <ListGroup.Item action>Cras justo odio</ListGroup.Item>
                <ListGroup.Item action>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item action>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item action>Porta ac consectetur ac</ListGroup.Item>
            </ListGroup>
        </div>
    )
}
