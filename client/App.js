import React, {Component} from 'react';

import {Root, Icon} from 'native-base';
import {Home} from './components/home/home';
import {Profile} from './components/profile/profile';
import {List} from './components/list/list';
import {TabNavigator} from 'react-navigation';

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
                <Root>
                    <TabsNavigator/>
                </Root>
            );
        }
        else
            return null;
    }
}
const TabsNavigator = TabNavigator(
    {
        profile: {
            screen: Profile,
            navigationOptions: {
                tabBarIcon: ({tintColor, focused}) => (
                    <Icon
                        name={focused ? 'ios-contact' : 'ios-contact-outline'}
                        style={{color: tintColor}}
                    />
                )
            }
        },
        home: {
            screen: Home,
            navigationOptions: {
                tabBarIcon: ({tintColor, focused}) => (
                    <Icon
                        name={focused ? 'ios-home' : 'ios-home-outline'}
                        style={{color: tintColor}}
                    />
                )
            }
        },
        list: {
            screen: List,
            navigationOptions: {
                tabBarIcon: ({tintColor, focused}) => (
                    <Icon
                        name={focused ? 'ios-list' : 'ios-list-outline'}
                        style={{color: tintColor}}
                    />
                )
            }
        }
    },
    {
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        animationEnabled: true,
        initialRouteName: 'home',
        tabBarOptions: {
            showIcon: true,
            showLabel: false,
            activeTintColor: '#616161',
            inactiveTintColor: '#BDBDBD',
            pressColor: '#9E9E9E',
            indicatorStyle: {
              backgroundColor: '#616161'
            },
            style: {
                backgroundColor: '#FAFAFA'
            }
        }
    }
);
