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
                                    <View style={{
                                        backgroundColor: '#776a67b3',
                                        padding: 20,
                                        flex: 3,
                                        opacity: 0.7,
                                        alignItems: 'center'
                                    }}>
                                        <Text style={{color: 'white'}}>{item.quote}</Text>
                                        <Text style={{color: 'white'}}>- {item.author}</Text>
                                        <Text style={{color: 'white'}}>(Swipe up)</Text>
                                    </View>
                                </View>
                            )
                        }}>
                    </Swiper>
                </Container>
            );
        }
        else
            return null;
    }
}

const cards = [
    {
        quote: 'Thank you for your charity. May you earn more and give more!',
        author: '90% of money earned by this app will be put to charity. Please help us reach at least 100 downloads',
        image: require('./images/charity.jpeg')
    },
    {
        quote: 'Charity begins at home, and justice begins next door.',
        author: 'Charles Dickens',
        image: require('./images/charles-dickens.jpeg')
    },
    {
        quote: 'True charity is the desire to be useful to others with no thought of recompense.',
        author: 'Emanuel Swedenborg',
        image: require('./images/Emanuel-Swedenborg.jpeg')
    },
    {
        quote: 'It is justice, not charity, that is wanting in the world.',
        author: 'Mary Wollstonecraft',
        image: require('./images/MaryWollstonecraft.jpg')
    },
    {
        quote: 'No one has ever become poor by giving.',
        author: 'Anne Frank',
        image: require('./images/anne-frank.jpeg')
    },
    {
        quote: 'It\'s not how much we give but how much love we put into giving',
        author: 'Mother Teresa',
        image: require('./images/Mother-Teresa.jpeg')
    },
    {
        quote: 'There is no exercise better for the heart than reaching down and lifting people up.',
        author: 'John Holmes',
        image: require('./images/John-Holmes.jpeg')
    },
    {
        quote: 'In the end, though, maybe we must all give up trying to pay back the people in this world who sustain our lives. In the end, maybe it\'s wiser to surrender before the miraculous scope of human generosity and to just keep saying thank you, forever and sincerely, for as long as we have voices.',
        author: 'Elizabeth Gilbert',
        image: require('./images/Elizabeth-Gilbert.jpeg')
    },
    {
        quote: 'When we give cheerfully and accept gratefully, everyone is blessed.',
        author: 'Maya Angelou',
        image: require('./images/Maya-Angelou.jpeg')
    },
    {
        quote: 'A bone to the dog is not charity. Charity is the bone shared with the dog, when you are just as hungry as the dog.',
        author: 'Jack London',
        image: require('./images/Jack-London.jpg')
    },
    {
        quote: 'You have not lived today until you have done something for someone who can never repay you.',
        author: 'John Bunyan',
        image: require('./images/John-Bunyan.jpg')
    },
    {
        quote: 'While we do our good works let us not forget that the real solution lies in a world in which charity will have become unnecessary.',
        author: 'Chinua Achebe',
        image: require('./images/Chinua-Achebe.jpeg')
    },
    {
        quote: 'Every man must decide whether he will walk in the light of creative altruism or in the darkness of destructive selfishness.',
        author: 'Martin Luther King Jr.',
        image: require('./images/Martin-Luther.jpeg')
    },
    {
        quote: 'The simplest acts of kindness are by far more powerful then a thousand heads bowing in prayer.',
        author: 'Mahatma Gandhi',
        image: require('./images/Mahatma-Gandhi.jpeg')
    }
];
