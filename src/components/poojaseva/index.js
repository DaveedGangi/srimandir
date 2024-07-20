import { Component } from "react";

import {Link} from 'react-router-dom';


import Dropdown from 'react-bootstrap/Dropdown';

import 'bootstrap/dist/css/bootstrap.min.css';

import { CgProfile } from "react-icons/cg";

import { TbBrandBooking } from "react-icons/tb";

import { FaGopuram } from "react-icons/fa";

import { GiCandlebright } from "react-icons/gi";

import Carousel from 'react-bootstrap/Carousel';


import "./index.css";


class PoojaSeva extends Component {

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
            

            <div className="puja-seva-slide">
                <div>

<h2>Perform your Puja as per Vedic rituals at Famous Hindu Temples in India with Sri Mandir</h2>
                </div>

                <div>
                <Carousel>
      <Carousel.Item>
        <img className="slide" src="https://i.ibb.co/Qkh7Gv2/qchhbivv.png" alt="First slide" />
        
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="slide" src="https://i.ibb.co/30xJ0RG/8dz1q3pj.png" alt="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>

        <img className="slide" src="https://i.ibb.co/RYtNhQt/s9dakbhf.png" alt="Third slide" />
     
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
                </div>
            
            </div>


            <div>
             
                <h2>Upcoming Pujas on Sri Mandir.</h2>
                <p>Book online puja with Sri Mandir in more than 500+ temples across India. Receive video of the puja along with the Prasad and receive blessings from the divine for prosperity and well-being of you and your family</p>
            </div>

            
            <div className="card-container-god">

                <div className="card-god">
                    <div>
                        <img className="god-image" src="https://i.ibb.co/G7PDLTB/gxu0t3tq.png" alt="not-found"/>
                    </div>
                    <div>
                        <p>MAHAVIDYA PURNIMA SPECIAL
                        </p>
                        <hr/>
                        <h4>Maa Bagalamukhi Tantra Yukta Havan</h4>
                        <p>for Victory in Court Cases and Victory over Enemies</p>
                        <div>
                        <Link to="/participate"><button type="button" className="btn btn-success">PARTICIPATE</button></Link>
                      
                        </div>
                    </div>
                </div>

                <div className="card-god">
                    <div>
                        <img className="god-image" src="https://i.ibb.co/G7PDLTB/gxu0t3tq.png" alt="not-found"/>
                    </div>
                    <div>
                        <p>MAHAVIDYA PURNIMA SPECIAL
                        </p>
                        <hr/>
                        <h4>Maa Bagalamukhi Tantra Yukta Havan</h4>
                        <p>for Victory in Court Cases and Victory over Enemies</p>
                        <div>
                            <Link to="/participate"><button type="button" className="btn btn-success">PARTICIPATE</button></Link>
                        
                        </div>
                    </div>
                </div>


                <div className="card-god">
                    <div>
                        <img className="god-image" src="https://i.ibb.co/G7PDLTB/gxu0t3tq.png" alt="not-found"/>
                    </div>
                    <div>
                        <p>MAHAVIDYA PURNIMA SPECIAL
                        </p>
                        <hr/>
                        <h4>Maa Bagalamukhi Tantra Yukta Havan</h4>
                        <p>for Victory in Court Cases and Victory over Enemies</p>
                        <div>
                        <Link to="/participate"><button type="button" className="btn btn-success">PARTICIPATE</button></Link>
                        
                        </div>
                    </div>
                </div>




            </div>


               
            </div>
        )
    }
}

export default PoojaSeva;