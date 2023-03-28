import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import Gallery from './Gallery';
// import { connect } from 'react-redux';
// import * as actions from './store/action/index';

export class foods extends Component {
  constructor() {
    super();

    this.state = {
      results: [],
    };
  }
  componentDidMount = () => {
    const path = this.props.location.pathname;
    console.log('this.props.location.pathname', this.props.location.pathname);
    const newpath = path.split('/');
    console.log('newpath', newpath);
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=${newpath}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        console.log('response.data.photos.foods', response.data.photos.photo);
        this.setState({ results: response.data.photos.photo });
      })
      .catch((error) => {
        console.log(
          'Encountered an error with fetching and parsing data',
          error
        );
      });
  };
  // submitHandler = () => {
  //   this.props.foods();
  // };
  render() {
    return (
      <div>
        <body>
          <div id="root">
            <div class="container">
              {/* <div>
                <h1>SnapShot</h1>
                <form class="search-form">
                  <input
                    type="text"
                    name="search"
                    placeholder="Search..."
                    value=""
                  />
                  <button type="submit" class="search-button null"></button>
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
                      <a href="/foodss">foods</a>
                    </li>
                  </ul>
                </nav>
              </div> */}
              <div>
                <h2>foods Pictures</h2>
                <div class="photo-container">
                  <div>
                    <Gallery data={this.state.results} />
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

// const mapDispatchToProps = (dispatch) => {
//   return {
//     foods: (authData) => dispatch(actions.foods(authData)),
//   };
// };
// export default connect(null, mapDispatchToProps)(foods);

export default foods;
