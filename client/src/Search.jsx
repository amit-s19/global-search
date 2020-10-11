import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import './Search.css';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            foundData: [],
            keyword: '',
            Keys: []
        }
    }

    async componentDidMount() {
        const formData = new FormData();
        let db = {}
        formData.append('title', 'title');
        formData.append('info', 'info');
        const res = await axios.post('/getData', formData, {
          headers: {
            'Content-Type': 'mulitpart/form-data'
          }})
        res.data.data['details']['dashboard'].forEach(d => {
            db[d['title']] = JSON.stringify(d).replace(/\s+/g,'').toLowerCase()
        })
        this.setState({
            data: db,
            Keys : Object.keys(db)
        })
    }

    

    searchKeyword(keyword) {
        this.setState({
            foundData : []
        })
        let obj = [];
        if(keyword.length > 0) {
            this.state.Keys.forEach(key => {
                if(this.state.data[key].includes(keyword.replace(/\s+/g,'').toLowerCase())) {
                    obj.push((
                        <div>
                            <a href={`/${key}`}>{key}</a>-<span>{keyword}</span>
                        </div>
                    ))
                }
            })
        }
        this.setState({
            foundData : obj
        })
        window.localStorage.setItem("keyword", keyword)
    }

    handleChange = (e) => {
        this.state.keyword = e.target.value;
        this.searchKeyword(this.state.keyword)
    }
    
    render() {
        return (
            <div>
                <input 
                type='text' 
                placeholder='Search'
                onChange={this.handleChange}
            />
            {
                this.state.foundData.length > 0 ?
                    <div className="options"> 
                        {this.state.foundData.map((d,i)=> (<p key={i}>{d}</p>))}
                    </div>

                : null
            }
            </div>
        );
    }
}

export default Search;
