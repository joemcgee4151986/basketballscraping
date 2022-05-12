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
}

}