import React, { Component } from 'react';
import { FlatList, View, StyleSheet, Text, ActivityIndicator, TouchableOpacity } from 'react-native';


//fetch data common funtion
import { makeRemoteRequest } from '../actions/RemoteRequest'

import { connect } from 'react-redux';
class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            preLoader: false
        }
    }
    _makeApiCall = async (keyword) => {
        this.setState({ preLoader: true })

        await this.props.makeRemoteRequest('Deal/searchSuggestion', 'get', {}, 'searching', false)
        this.setState({ preLoader: false })



    }

    async UNSAFE_componentWillMount() {
        await this._makeApiCall()

    }

    _renderItems = (item) => {
        return (
            <TouchableOpacity style={styles.searchItems} >
                <Text style={styles.searchContent}> Name : {item.name} </Text>
                <Text style={styles.searchContent}> age : {item.age} </Text>
                <Text style={styles.searchContent}> gender : {item.gender} </Text>
                <Text style={styles.searchContent}> email : {item.email} </Text>
                <Text style={styles.searchContent}> Phone No : {item.phoneNo} </Text>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={styles.container}>



                {(this.state.preLoader) &&
                    <ActivityIndicator size="large" color="red" />
                }
                <FlatList
                    data={(typeof this.props.data.searching != 'undefined') ? this.props.data.searching : []}
                    renderItem={({ item }) => this._renderItems(item)}
                    keyExtractor={item => item.id}
                />
            </View>
        );
    }
}
const mapStateToProps = state => {

    const { data } = state.ApiRequest
    return { data }

}

export default connect(mapStateToProps, { makeRemoteRequest })(HomeScreen);

const styles = StyleSheet.create({
    searchItems :{
        marginVertical:'2%',
        borderWidth:2,
        borderColor:'gray',
        padding:'5%'
    }
});

