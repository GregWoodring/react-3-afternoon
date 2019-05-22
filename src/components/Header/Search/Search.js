import React, { Component } from 'react';

import './Search.css';

import SearchIcon from 'react-icons/lib/md/search';

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *HEADER* COMPONENT

export default class Search extends Component {
  constructor(props){
    super(props);

    this.state = {
      text: ''
    }
  }
  render() {
    return (
      <section className="Search__parent">

        <div className="Search__content">
          <input 
            onChange={(e) => this.props.filterPostsFn(e.target.value)}
            placeholder="Search Your Feed" />

          <SearchIcon id="Search__icon" />
        </div>
        
      </section>
    )
  }
}