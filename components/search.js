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
        <form onSubmit={this.searchPlayer}>
            <SearchWrapper>
                <SearchBar type = "text" value{searchTerm} onChange={this.handleChange} />
                <SearchButton type ="submit"></SearchButton>
            </SearchWrapper>
            {error && <Error>{error}</Error>}
        </form>
    )

}
}

export default connect(null, {getPlayer})(Search);

const SearchWrapper = styled.div`

display: flex;
flex-direction: row;
width: 80%;
width:600px;
margin: 20px auto;
`

const SearchBar = styled.input`
padding: 13px 20px;
border: 1.2px solid white;
color: gray;
font-size: 17px;
width: 260px;
border-radius: 7px 0px 0px 5px;
flex: 6;
`
const SearchButton = styled.button`
background-color: #2F5EE5;
padding:14px 20px;
border:none;
border-radius:0px 5px 5px 0px;
cursor: pointer;
flex: 2;
`

const Error = styled.span`
    color: red;
    padding:4px;
    display:block;
    font-size 11px;`
