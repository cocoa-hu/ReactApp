import React from "react";
import axios from 'axios';
import SearchInput from "./SearchInput";
import ImageList from "./image_list";

class App extends React.Component {

  constructor(props){
    super(props)

    this.state = { images: [] }

    this.onSearchSubmit = this.onSearchSubmit.bind(this)
  }

  async onSearchSubmit(entry){
    const response = await axios.get(`https://pixabay.com/api/?key=41451104-6f46fc3d7013c8adaa79c36e2&q=${entry}&image_type=photo`)
    console.log(response.data.hits)
    this.setState({images: response.data.hits })
  }

  render() {
    return (
      <div className="ui container" style={{marginTop:'30px'}}>
        < SearchInput onSearchSubmit={this.onSearchSubmit} />
        <ImageList images= {this.state.images}/>
          </div>
    )
  }

}

export default App;