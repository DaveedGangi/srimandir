import { Component } from "react";

import {Link} from 'react-router-dom';


import Dropdown from 'react-bootstrap/Dropdown';

import 'bootstrap/dist/css/bootstrap.min.css';

import { CgProfile } from "react-icons/cg";

import { TbBrandBooking } from "react-icons/tb";

import { FaGopuram } from "react-icons/fa";

import { GiCandlebright } from "react-icons/gi";
import "./index.css";


class PoojaBook extends Component {
    state={sidebarOpen: false}

    toggleSidebar=()=> this.setState({sidebarOpen:!this.state.sidebarOpen})

    render() {
        const {sidebarOpen}=this.state;
        return (
            <div>

                <div className="nav-bar">
                    <div>
                        <img className ="logo" src="https://i.ibb.co/vXN5wXN/Screenshot-19-7-2024-14751-play-lh-googleusercontent-com.jpg" alt="image-not-found" /> &nbsp; &nbsp;
                       <span className="srimandir"> Sri Mandir</span>
                 
                    </div>
                    <div className="links-nav-bar">
                        <div>
                        <Link className="links-on-nav-bar" to="/">Home</Link>
                        </div>
                        <div>
                            <Link className="links-on-nav-bar" to="/puja">Puja</Link>
                        </div>
                        <div>
                            <Link className="links-on-nav-bar" to="/panchang">Panchang</Link>
                        </div>
                        <div>
                            <Link className="links-on-nav-bar" to="/temples">Temples</Link>
                    </div>
                        <div>


                        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Library
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Sanatan Sahitya</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Aarti</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Chalisa</Dropdown.Item>
      </Dropdown.Menu>
                        </Dropdown>
                     
                     
                        </div>
                    </div>

                    <div className="profile-right-side-nav-bar">    
                            
                    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        English
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Telugu</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Hindi</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Tamil</Dropdown.Item>
      </Dropdown.Menu>
                   </Dropdown>


                   &nbsp; &nbsp;

                   <div>
                    <div>

                        <img onClick={this.toggleSidebar} className="profile" src="https://img.freepik.com/premium-vector/vector-professional-icon-business-illustration-line-symbol-people-management-career-set-c_1013341-78677.jpg?w=740" alt="profile-not-found" />
                   
                    </div>
                   </div>
                     





                    </div>




                </div>

                <div className={sidebarOpen ? "sidebar-wrapper" : "sidebar-wrapper-close"}>
                  
                    

                        <Link className="links-profile" to="/profile"> <CgProfile /> &nbsp;My Profile</Link>
                        <br/>
                        <br/>

                        <Link className="links-profile" to="/puja"><TbBrandBooking />&nbsp; My Puja Bookings</Link>
                        <br/>
                        <br/>
                        <Link className="links-profile" to="/ramostav"><FaGopuram />&nbsp;My Ramostav Bookings</Link>
                        <br/>
                        <br/>
                        <Link className="links-profile" to="/book"><GiCandlebright />&nbsp; Book a Puja</Link>



                </div>

                <div className="pooja-book-main-container">
                    <div className="pooja-book-main">
                        <div>
                            <img src="https://i.ibb.co/8YVyRXF/Screenshot-19-7-2024-192451-www-srimandir-com.jpg" alt="not-found" />
                        </div>
                        <h3>No Puja has been booked yet</h3>
                        <p>Book your Puja online at Popular Temples of India. Panditji will take sankalp with your name and gotra during the Puja</p>
                       <div>
                        <Link to="/poojaseva">
                        <button className="book-pooja-button" type="button">Book Pooja Now</button>
                        </Link>
                       </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PoojaBook;