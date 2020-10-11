import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component} from 'react';
import axios from 'axios';
import '../App.css';

class Dashboard3 extends Component {
  state = {
    data: {}
  }

  async componentDidMount() {
    const formData = new FormData();
    formData.append('title', 'Distributor');
    const res = await axios.post('/getData', formData, {
      headers: {
        'Content-Type': 'mulitpart/form-data'
      }
    })
    this.setState({
      data: res.data.data['details']['dashboard'][2]
    });
    var inputText = document.getElementById("container");
    var innerHTML = inputText.innerHTML;
    var index = innerHTML.indexOf(window.localStorage.getItem("keyword"));
    if (index >= 0) { 
     innerHTML = innerHTML.substring(0,index)
      + "<span class='highlight'>" 
      + innerHTML.substring(index,index+window.localStorage.getItem("keyword").length) 
      + "</span>" 
      + innerHTML.substring(index + window.localStorage.getItem("keyword").length);
     inputText.innerHTML = innerHTML;
    }
    window.localStorage.clear();
  };

  renderData = () => {
    let title = this.state.data['title']
    let config = this.state.data['config']
    return(
      <div id="container">
        <h1>{title}</h1>
        <h3>{config.size}</h3>
        <h3>{config.dateCreated}</h3>
        <h3>{config.structure.chartName}</h3>
        <h3>{config.structure.chartType}</h3>
      </div>
    )
  }

  render() {
    return (      
      <>
      {Object.keys(this.state.data).length != 0 
        ?
          this.renderData()
        :
          null
      }
      </>
    )
  }
}
  
export default Dashboard3;
