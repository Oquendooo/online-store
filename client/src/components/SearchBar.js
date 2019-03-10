import React, { Component } from 'react';
import { postJson} from "../helpers";
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../css/searchbar.css';
class SearchBar extends Component {

    constructor(props){
        super(props);
        this.state = {
            areSearchResultsOpened: false,
            searchResultsClass: 'search-results',
            products: [],
            query: ' '
        };
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange(event) {

        const query = event.target.value;


        this.setState({query: event.target.value});
        if(!this.state.areSearchResultsOpened){
            this.setState({searchResultsClass: 'search-results active', areSearchResultsOpened: true});
        }
        if(query !== ""){
            postJson('/search',{query})
                .then(products => {
                    console.log("searched products", products);

                    this.setState({products});
                });
        }else if(query === ""){

            this.setState({products:[]});

            if(this.state.areSearchResultsOpened === true){
                this.setState({searchResultsClass: 'search-results', areSearchResultsOpened: false});

            }
        }


    }
    goToProduct(product) {
        console.log("current  slected",product);
        this.props.history.push(`/product/${product.product_id}`);
        if(this.state.areSearchResultsOpened === true){
            this.setState({searchResultsClass: 'search-results', areSearchResultsOpened: false});
            this.setState({query: ''});
        }
    }
    render() {
        console.log("searchbar props",this.props);
        console.log("query from state",this.state.query);
        return (
        <React.Fragment>
            <form>
                <div className="form-group">
                    <input type="text" className="form-control" value={this.state.query} onChange={this.handleChange} placeholder="Search"/>
                </div>
                <a className="search-icon" href="/">
                    <i className="fas fa-search"></i>
                </a>
                <div className={this.state.searchResultsClass}>
                    <h1>Product Matches</h1>
                    {this.state.products.map(product => (
                            <div onClick={() => this.goToProduct(product)} className="search-item">
                                <img src={product.img_urls} alt=""/>

                                <span>{product.product_name}</span>
                            </div>
                    ))}
                </div>
            </form>

        </React.Fragment>
        );
    }
}
export default withRouter(SearchBar);
