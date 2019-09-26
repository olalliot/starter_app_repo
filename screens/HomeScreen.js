import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Button,
  Dimensions,
  Keyboard
} from 'react-native';

import { MonoText } from '../components/StyledText';
import { thisExpression } from '@babel/types';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      newPostText: '',
    }
    this.makeNewPost = this.makeNewPost.bind(this);
  }

  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    fetch('http:/192.168.1.37:8000/')
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then((data) => {
        this.setState({
          posts: data.posts,
        });
      })
      .catch(error => console.log(error));
  }

  makeNewPost() {
    const input = this.state.newPostText;
    fetch('http://192.168.1.37:8000/', {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({ text: input }),
      credentials: 'same-origin',
    })
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then((data) => {
        this.setState({ posts: data.posts, newPostText: '' });
      })
      .catch(error => console.log(error));
  }

  render() {
    return(
      <View>
        <View style={{ height: Dimensions.get('window').height * 0.1 }} />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View>
            <TextInput
              placeholder="Enter New Post Text Here"
              title={this.state.newPostText}
              onChangeText={(text) => this.setState({ newPostText: text })}
              style={{ marginLeft: 20 }}
            />
          </View>
        </TouchableWithoutFeedback>
        <View style={{ height: Dimensions.get('window').height * 0.05 }} />
        <Button
          onPress={() => this.makeNewPost()}
          title="New Post"
        />
        <View style={{ height: Dimensions.get('window').height * 0.1 }} />
        <ScrollView style={{ marginBottom: Dimensions.get('window').height * 0.1}}>
        {this.state.posts.map(p => (
          <View key={p.id}>
            <Text style={{
              fontWeight: '700',
              fontSize: 20,
              marginLeft: 20
            }}
            > 
              {p.text}
            </Text>
            <View style={{ height: Dimensions.get('window').height * 0.05 }} />
          </View>
       ))}
        </ScrollView>
      </View>
    )
  }
}
