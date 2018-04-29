import React, {Component} from 'react';
import {Image, StyleSheet, View, Dimensions} from 'react-native';
import Swiper from 'react-native-deck-swiper';
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
    DeckSwiper,
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
        var {height, width} = Dimensions.get('window');
        if (!this.state.loading) {
            return (
                <Container>
                    <Swiper
                        cards={cards}
                        horizontalSwipe={false}
                        infinite={true}
                        stackAnimationTension={100}
                        showSecondCard={false}
                        goBackToPreviousCardOnSwipeBottom={true}
                        cardVerticalMargin={0}
                        cardHorizontalMargin={0}
                        backgroundColor="white"
                        renderCard={(item) => {
                            return (
                                <View transparent style={{flex: 1, justifyContent: 'center'}}>
                                    <View cardBody style={{flex: 5}}>
                                        <Image source={item.image} style={{height: height, width: width}}/>
                                    </View>
                                    <View style={{backgroundColor: '#463d3d', padding: 20, flex: 1, opacity: 0.7, alignItems: 'center'}}>
                                        <H1 style={{color: 'white'}}>{item.name} <Text style={{color: 'white'}}>
                                            ({item.country})</Text></H1>
                                    </View>
                                    <View style={{backgroundColor: '#463d3d', padding: 20, flex: 1, opacity: 0.7, alignItems: 'center'}}>
                                        <H3 style={{color: 'white'}}>Global Rank: {item.globalRank}th {"\n"}National
                                            Rank: {item.nationalRank}th</H3>
                                    </View>
                                    <View style={{backgroundColor: '#463d3d', padding: 20, flex: 1, opacity: 0.7, alignItems: 'center'}}>
                                        <H3 style={{color: 'white'}}>Total worth: {item.totalWorth} USD</H3>
                                    </View>
                                    <View style={{backgroundColor: '#776a67b3', padding: 20, flex: 1, opacity: 0.7, alignItems: 'center'}}>
                                        <Text style={{color: 'white'}}>"{item.quote}"</Text>
                                    </View>
                                </View>
                            )
                        }}>
                    </Swiper>


                   {/* <Fab active={this.state.active}
                         style={{backgroundColor: '#E65100'}}
                         position="bottomRight"
                         onPress={() => this.setState({active: !this.state.active})}>
                        <Icon name="add"/>
                    </Fab>*/}
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

const cards = [
    {
        name: 'Bill Gates',
        country: 'United States of America',
        nationalRank: 4,
        globalRank: 20,
        totalWorth: '91 Billions',
        quote: 'If you\'re born poor, it\'s not your mistake. But if you die poor, it\'s your mistake!',
        image: require('./images/bill_gates.jpg')
    },
    {
        name: 'Jeff Bezos',
        country: 'United States of America',
        nationalRank: 7,
        globalRank: 14,
        totalWorth: '119.4 Billions',
        quote: 'If you can\'t tolerate critics, don\'t do anything new or interesting',
        image: require('./images/bezos.jpg')
    },
    {
        name: 'Jack Ma',
        country: 'China',
        nationalRank: 2,
        globalRank: 9,
        totalWorth: '39.1 Billions',
        quote: 'Today is hard, tomorrow will be worse, but the day after tomorrow will be sunshine',
        image: require('./images/jack-ma.jpeg')
    },
    {
        name: 'You can be here too',
        country: 'Represent your country',
        nationalRank: 10,
        globalRank: 10,
        totalWorth: '200 Billions',
        quote: 'You can contact all these billionaires and millionaires through this app. Wait for it!',
        image: require('./images/you.jpg')
    }
];
