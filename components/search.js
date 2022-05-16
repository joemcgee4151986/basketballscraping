import React, { Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import {getPlayer} from '../store/actions/player';

class Search extends Component {

    state = {
        searchTerm: '',
        error: ''
    }
searchPlayer = (e) => {
    const playerName = this.searchPlayer.searchTerm.split(' ');
    const firstName = playerName[0];
    const lastName = playerName[1];
    e.preventDefault();
    if (firstName && lastName) {
        // get the players first and last name
        this.props.getPlayer(firstName, lastName);
    } else{
        this.setState({error: 'Search requires a first and last name'});
    }
}
handleChange = (e) => {
    this.setState({searchTerm: e.target.value})
}
render(){
    const {seachTerm, error} = this.state;
    return (
        <form onSubmit={this.searchPlayer}></form>
    )
}
}