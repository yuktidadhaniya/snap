import React, { Component } from 'react';
import '../App.css';
import * as actions from './store/action/index';
import { connect } from 'react-redux';
import axios from 'axios';
import Gallery from './Gallery';
export class mountains extends Component {
  constructor() {
    super();

    this.state = {
      results: [],
    };
  }

  componentDidMount = () => {
    const path = this.props.location.pathname;
    console.log('path', path);
    const newpath = path.split('/');
    console.log('newpath', newpath);
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=${newpath}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        console.log('response.data.photos.photo', response.data.photos.photo);
        this.setState({ results: response.data.photos.photo });
      })
      .catch((error) => {
        console.log(
          'Encountered an error with fetching and parsing data',
          error
        );
      });
  };

  render() {
    return (
      <div>
        <body>
          <div id="root">
            <div class="container">
              <div>
                <h1>SnapShot</h1>
                <form class="search-form">
                  <input
                    type="text"
                    name="search"
                    placeholder="Search..."
                    value=""
                  />
                  <button type="submit" class="search-button null" disabled="">
                    <svg height="32" width="32">
                      <path
                        d="M19.427 21.427a8.5 8.5 0 1 1 2-2l5.585 5.585c.55.55.546 1.43 0 1.976l-.024.024a1.399 1.399 0 0 1-1.976 0l-5.585-5.585zM14.5 21a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z"
                        fill="#ffffff"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </form>
                <nav class="main-nav">
                  <ul>
                    <li>
                      <a href="/mountains" aria-current="page" class="active">
                        mountains
                      </a>
                    </li>
                    <li>
                      <a href="/beaches">Beaches</a>
                    </li>
                    <li>
                      <a href="/bird">bird</a>
                    </li>
                    <li>
                      <a href="/foods">foods</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div>
                <h2>mountains Pictures</h2>

                <div class="photo-container">
                  <div>
                    <ul>
                      <Gallery data={this.state.results} />
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    mountains: (authData) => dispatch(actions.mountains(authData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(mountains);
