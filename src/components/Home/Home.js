import React from "react";
import axios from "axios";
import "./Home.css";
import Pagination from "../Pagination/Pagination";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Button,Modal } from 'react-bootstrap';
import { css } from "@emotion/core";
import PulseLoader from "react-spinners/PulseLoader";

const override = css`
  display: block;
  margin: auto;
  text-align: center;
`;
class Home extends React.Component {
  constructor() {
      super();
      this.state = {
          exampleItems: '',
          filteredItems: [],
          apiValue: [],
          data: [],
          pageOfItems: [],
          profiles: [],
          showHide : false,
          viewDetails: '',
          loading: false
      };
      this.onChangePage = this.onChangePage.bind(this);
  }

  toggleLoader() {
    this.setState({ loading: !this.state.loading });
  }

  fetchProfiles = () => {
    this.toggleLoader();
    console.log("onload showloader", this.state.loading) 
    axios.get('https://api.enye.tech/v1/challenge/records')
    .then(response => this.setState({
      profiles: response.data.records.profiles
    }))
    // .then(response => console.log(response))
    this.toggleLoader();
  }

  handleModalShowHide(item) {
    console.log("item.UserNameitem.UserName",item)
    this.setState({ showHide: !this.state.showHide })
    this.setState({ viewDetails: item })
};

  componentDidMount(){
    this.fetchProfiles();
  }

  componentDidUpdate(prevProps, prevState) {
    // reset page if items array has changed
    if (this.state.profiles !== prevState.profiles) {
      this.setState({
        filteredItems: this.state.profiles,
        apiValue: this.state.profiles,
        data: this.state.profiles
      })
    
    }
}
  
  onChangePage(pageOfItems) {
      // update state with new page of items
      this.setState({ pageOfItems: pageOfItems });
  };

  fIlterInput = () => {
    const filter1= document.getElementById('inlineFormCustomSelect1').value;
    const filter2 = document.getElementById('inlineFormCustomSelect2').value;
    const filter3 = document.getElementById('inlineFormCustomSelect3').value;
    console.log("This is faulty ", filter3);

    const firstFilter = this.state.apiValue.filter(value => value.Gender.includes(filter1));
    const secondFilter = firstFilter.filter(value => value.PaymentMethod.includes(filter2));
    const thirdFilter = secondFilter.filter(value => value.UserName.toLowerCase().includes(filter3.toLowerCase()));

    console.log("filter -> ", thirdFilter);

    this.setState(prev => ({ ...prev, data: thirdFilter.length < 1 ? secondFilter: secondFilter.length < 1 ? firstFilter : thirdFilter }));
  }

  render() {
    console.log("data data filter -> ", this.state.data);
      return (
        <div className="container">
          <div className="row">
            <div class="main mb-3" style={{width:'100%', margin:'auto'}}>
              <div class="form-group has-search" style={{width:'50%', margin:'auto', padding: '30px 0'}}>
                <span class="fa fa-search form-control-feedback"><FontAwesomeIcon icon={faSearch} style={{color:'gray',width:'1rem',height:'1rem'}}/></span>
                <input type="text" class="form-control" id="inlineFormCustomSelect3" placeholder="Search profiles by username" onChange={this.fIlterInput} />
              </div>
              <form>
                <div class="row" style={{width:'50%', margin:'auto'}}>
                  <div class="col-sm-12 col-md-6">
                  <label class="mr-sm-2 text-white" for="inlineFormCustomSelect">Filter by Gender</label>
                    <select class="custom-select mr-sm-2" id="inlineFormCustomSelect1" onChange={this.fIlterInput}>
                      <option value="">--Select Gender--</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Prefer to skip">Prefer to skip</option>
                    </select>
                  </div>
                  <div class="col-sm-12 col-md-6">
                  <label class="mr-sm-2 text-white" for="inlineFormCustomSelect">Filter by payment method</label>
                    <select class="custom-select mr-sm-2" id="inlineFormCustomSelect2" onChange={this.fIlterInput}>
                      <option value="">--Select payment method--</option>
                      <option value="money order">Money Order</option>
                      <option value="cc">CC</option>
                      <option value="check">Check</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
        {this.state.data.length === 0 ?
          <PulseLoader className="mt-3" css={override} size={35}
            color={"#fff"}
          /> : this.state.pageOfItems.map((item, i) => {
        return (
          <div style={{margin:'auto'}}>
            <div class="grid-container">
              <div class="card" style={{width:'220px', height:"300px"}}>
                <div class="card-body text-center">
                  <h4 class="card-title">{item.FirstName} {item.LastName}</h4>
                  <h6 class="card-subtitle mb-2 text-muted">Username: {item.UserName}</h6>
                  <h6 class="card-subtitle mb-2 text-muted">Email: {item.Email}</h6>
                  <h6 class="card-subtitle mb-2 text-muted">Phone: {item.PhoneNumber}</h6>
                  <h6 class="card-subtitle mb-2 text-muted">Gender: {item.Gender}</h6>
                  <Button class="btn btn-info" onClick={() => this.handleModalShowHide(item)}>View Details</Button>
                </div>
              </div>
            </div>
          </div>

      )})}
        </div>

        <Modal show={this.state.showHide}>
                <Modal.Header closeButton onClick={() => this.handleModalShowHide("")}>
                <Modal.Title>{this.state.viewDetails.FirstName} {this.state.viewDetails.LastName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div style={{textAlign: "center"}}>
                  <p><span className="title">Url:</span> {this.state.viewDetails.URL}</p>
                  <p><span className="title">CreditCardNumber:</span> {this.state.viewDetails.CreditCardNumber}</p>
                  <p><span className="title">CreditCardType:</span> {this.state.viewDetails.CreditCardType}</p>
                  <p><span className="title">PaymentMethod:</span> {this.state.viewDetails.PaymentMethod}</p>
                  <p><span className="title">DomainName:</span> {this.state.viewDetails.DomainName}</p>
                  <p><span className="title">Latitude:</span> {this.state.viewDetails.Latitude}</p>
                  <p><span className="title">Longitude:</span> {this.state.viewDetails.Longitude}</p>
                  <p><span className="title">MacAddress:</span> {this.state.viewDetails.MacAddress}</p>
                  <p><span className="title">LastLogin:</span> {this.state.viewDetails.LastLogin}</p>
                  </div>
                </Modal.Body>
                <Modal.Footer style={{textAlign: "center", margin: "auto"}}>
                <Button variant="secondary" onClick={() => this.handleModalShowHide("")}>
                    Close
                </Button>
                </Modal.Footer>
          </Modal>

          <div style={{width:'100%', margin:'auto', padding: '30px 0'}}>                
            <Pagination items={this.state.data} onChangePage={this.onChangePage} />
          </div>
        </div>
      );

    }
}
export default Home;