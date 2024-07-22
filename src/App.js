import './App.css';
import SearchBar  from './SearchBar';
import React from 'react';
import axios from 'axios';


class App extends React.Component{
  state = {image: []};
  onSearchSubmit = async term =>{
    const res = await axios.get('https://api.unsplash.com/search/photos', {
                params: {
                    query: term,
                    client_id: "po14sruvsYYuKfm9JsQNpQr6qA90C6st6H7CBMqR7tY"
                }
            })
            this.setState({image: res.data.results})
          }

  render(){
    return(
      <div className='ui container' style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        Found: {this.state.image.length} image
        <div>
          {this.state.image.map(image => (
            <img key={image.id} src={image.urls.regular} alt={image.alt_description
              } style={{width: '100px', height: '100px'}}/>
              ))}
        </div>
      </div>
    )
  }
}

export default App;
