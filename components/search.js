import React, { Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import {get Player} from '../store/actions/player';

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
    }
}

}