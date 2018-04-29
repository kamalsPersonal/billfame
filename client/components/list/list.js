import React, {Component} from "react";
import {Container, Content, Text} from 'native-base';

export class List extends Component {
    constructor(props) {
        super(props);
        this.state = {loading: true};
    }
    render() {
        return (
            <Container>
                <Content>
                    <Text>List</Text>
                </Content>
            </Container>
        )
    }
}
;
