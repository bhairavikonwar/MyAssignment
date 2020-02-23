import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
//import {Link} from 'react-router';

//const App = React.createClass({
function App() {
  function addSingleUser(e) {
    e.preventDefault();
    console.log('Add single User Clicked.');
  }
  function addMultipleUser(e) {
    e.preventDefault();
    console.log('Add multiple User Clicked.');
  }
  function loadLicencedUser(e) {
    e.preventDefault();
    console.log('Add single User Clicked.');
  }
  const loadLiscencediv =
  return (
  <div className="page-wrapper">
     <div className="row">
                    <div className="col-lg-12">
                        <div id="headerText" className="row">
                            <div className="col-lg-12">
                                <h2>Manage Users</h2>
                            </div>
                        </div>
                    </div>
     </div>

				<a id="addSingleUser" className="App-link" href="#" onClick={addSingleUser}> Add New user </a>&nbsp;&nbsp;&nbsp;
				<a id="addMultipleUser" className="App-link" href="#" onClick={addMultipleUser}> Add Multiple user </a>
				<hr/>
				<a id="licencedUser" href="#" onClick={loadLicencedUser}> Liscenced User </a>&nbsp;&nbsp;&nbsp;
				<a id="subscriptionUser" href="#" onClick={addMultipleUser}> Subscription Administrator </a>&nbsp;&nbsp;&nbsp;
				<a id="pendingInteraction" href="#" onClick={addMultipleUser}> Pending Interactions </a>

   </div>


  );
}

export default App;
