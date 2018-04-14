import React, {Component} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {
    Container,
    Header,
    Content,
    Text,
    Card,
    CardItem,
    Button,
    Icon,
    Fab,
    Left,
    Body,
    Right,
    Title,
    Footer,
    FooterTab,
    H1, H2, H3,
    Col, Row, Grid
} from 'native-base';

console.disableYellowBox = true;
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
                    <Card transparent>
                        <CardItem cardBody>
                            <Image source={require('./images/bill_gates.jpg')}/>
                        </CardItem>
                        <CardItem style={{backgroundColor: '#463d3d'}}>
                            <H1 style={{color: 'white'}}>Bill Gates<Text style={{color: 'white'}}> (United
                                States of
                                America)</Text></H1>

                        </CardItem>
                        <CardItem style={{backgroundColor: '#776a67'}}>
                            <H3 style={{color: 'white'}}>Global Rank: 6th {"\n"}National Rank: 6th</H3>
                        </CardItem>
                        <CardItem style={{backgroundColor: '#776a67'}}>
                            <H3 style={{color: 'white'}}>Total worth: 456,004,249 USD</H3>
                        </CardItem>
                        <CardItem style={{backgroundColor: '#776a67b3', flexGrow: 1}}>
                            <Text style={{color: 'white'}}>"If you're born poor, it's not your mistake. But if you die
                                poor, it's your mistake!"</Text>
                        </CardItem>
                    </Card>
                    <Fab active={this.state.active}
                         style={{backgroundColor: '#E65100'}}
                         position="bottomRight"
                         onPress={() => this.setState({active: !this.state.active})}>
                        <Icon name="add"/>
                    </Fab>
                </Container>
            );
        }
        else
            return null;
    }
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    }
});
