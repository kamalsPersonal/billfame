import React, {Component} from 'react';
import {
    Container,
    Header,
    Content,
    Text,
    Button,
    Icon,
    Left,
    Body,
    Right,
    Title,
    Footer,
    FooterTab
} from 'native-base';


export default class AnatomyExample extends Component {

    constructor(props) {
        super(props);
        this.state = {loading: true};
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });
        this.setState({loading: false});
    }


    render() {

        if (!this.state.loading) {
            return (
                <Container>
                    <Header>
                        <Left>
                            <Button transparent>
                                <Icon name='menu'/>
                            </Button>
                        </Left>
                        <Body>
                        <Title>Header</Title>
                        </Body>
                        <Right />
                    </Header>
                    <Content>
                        <Text>
                            This is Content Section
                        </Text>
                    </Content>
                    <Footer>
                        <FooterTab>
                            <Button full>
                                <Text>Footer</Text>
                            </Button>
                        </FooterTab>
                    </Footer>
                </Container>
            );
        }
        else
            return null;
    }
}
