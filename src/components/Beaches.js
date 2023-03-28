import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import Gallery from './Gallery';
// import { connect } from 'react-redux';
// import * as actions from './store/action/index';
export class Beaches extends Component {
  constructor() {
    super();

    this.state = {
      results: [],
    };
  }
  componentDidMount = () => {
    const path = this.props.location.pathname;

    const newpath = path.split('/');
    console.log('newpath', newpath);
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=${newpath}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        console.log('response.data.photos.beaches', response.data.photos.photo);
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
                <div class="search-form">
                  <input
                    type="text"
                    name="search"
                    placeholder="Search..."
                    value=""
                  />
                  <button
                    type="submit"
                    class="search-button null"
                    disabled=""
                  ></button>
                </div>
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
                <h2>beach Pictures</h2>
                <div class="photo-container">
                  <div>
                    <Gallery data={this.state.results} />
                    {/* <ul>
                      <li>
                        <img src="https://farm66.staticflickr.com/65535/52763113425_4e64f8e4d9_m.jpg" />
                      </li>
                      <li>
                        <img src="https://farm66.staticflickr.com/65535/46049811772_3f428043ce_m.jpg" />
                      </li>
                      <li>
                        <img src="https://farm1.staticflickr.com/804/41052201152_710c568b17_m.jpg" />
                      </li>
                      <li>
                        <img src="https://farm66.staticflickr.com/65535/52763681214_6a3639f508_m.jpg" />
                      </li>
                      <li>
                        <img src="https://farm66.staticflickr.com/65535/52763423126_cb9642a08e_m.jpg" />
                      </li>
                      <li>
                        <img src="https://farm66.staticflickr.com/65535/52763370991_e0a6374175_m.jpg" />
                      </li>
                      <li>
                        <img src="https://farm66.staticflickr.com/65535/52763857083_f5c1b24151_m.jpg" />
                      </li>
                      <li>
                        <img src="https://farm66.staticflickr.com/65535/52762826052_3f4b6c76eb_m.jpg" />
                      </li>
                      <li>
                        <img src="https://farm66.staticflickr.com/65535/52762826032_ec90fdd296_m.jpg" />
                      </li>
                      <li>
                        <img src="https://farm66.staticflickr.com/65535/52763854308_3054a1af05_m.jpg" />
                      </li>
                      <li>
                        <img src="https://farm66.staticflickr.com/65535/52763678665_43252232e5_m.jpg" />
                      </li>
                      <li>
                        <img src="https://farm66.staticflickr.com/65535/52763439239_cc8866fcac_m.jpg" />
                      </li>
                      <li>
                        <img src="https://farm66.staticflickr.com/65535/52763437434_8487be4459_m.jpg" />
                      </li>
                      <li>
                        <img src="https://farm66.staticflickr.com/65535/52763657538_5c6aff1f23_m.jpg" />
                      </li>
                      <li>
                        <img src="https://farm66.staticflickr.com/65535/52763407864_045f2e16c4_m.jpg" />
                      </li>
                      <li>
                        <img src="https://farm66.staticflickr.com/65535/52763611948_4a3556785f_m.jpg" />
                      </li>
                      <li>
                        <img src="https://farm66.staticflickr.com/65535/52763375890_291489a5ff_m.jpg" />
                      </li>
                      <li>
                        <img src="https://farm66.staticflickr.com/65535/52763450343_b2ff56b9fa_m.jpg" />
                      </li>
                      <li>
                        <img src="https://farm66.staticflickr.com/65535/52762392352_bfb6f96032_m.jpg" />
                      </li>
                      <li>
                        <img src="https://farm66.staticflickr.com/65535/52763014674_9fc5900ca6_m.jpg" />
                      </li>
                      <li>
                        <img src="https://farm66.staticflickr.com/65535/52763165348_4e5bfc219b_m.jpg" />
                      </li>
                      <li>
                        <img src="https://farm66.staticflickr.com/65535/52762499046_863d635703_m.jpg" />
                      </li>
                      <li>
                        <img src="https://farm66.staticflickr.com/65535/52762979423_65960b5221_m.jpg" />
                      </li>
                      <li>
                        <img src="https://farm66.staticflickr.com/65535/52762784288_6315d0be92_m.jpg" />
                      </li>
                      <li>
                        <img src="https://farm66.staticflickr.com/65535/52761795302_41374bc0b7_m.jpg" />
                      </li>
                    </ul> */}
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
//     Beaches: (authData) => dispatch(actions.beach(authData)),
//   };
// };

// export default connect(null, mapDispatchToProps)(Beaches);

export default Beaches;
