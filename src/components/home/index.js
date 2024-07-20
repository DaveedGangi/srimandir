import {Component} from "react"


import Dropdown from 'react-bootstrap/Dropdown';

import 'bootstrap/dist/css/bootstrap.min.css';

import { CgProfile } from "react-icons/cg";

import { TbBrandBooking } from "react-icons/tb";

import { FaGopuram } from "react-icons/fa";

import { GiCandlebright } from "react-icons/gi";



import {Link} from "react-router-dom"

import "./index.css"



class Home extends Component {

    state={sidebarOpen: false}

    toggleSidebar=()=> this.setState({sidebarOpen:!this.state.sidebarOpen})
    render() {
        const {sidebarOpen}=this.state
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




                <div className="body-home">

                    <div className="body-home-left">
                        <div className="number-one-paragraph">
                            <div>
                                <img className="number-one-image" src="https://i.ibb.co/vcq86Yq/wnx67w9g.png" alt="not-found" />
                            </div>
                            <p className="worlds">WORLD'S LARGEST APP FOR HINDU DEVOTEES</p>
                        </div>
                        <div className="number-two-paragraph">
                            <h3>Pray daily with <span className="sri"> Sri Mandir</span>.</h3>
                            <h3>One App for all your</h3>
                            <h3>devotional needs.</h3>
                           
                        </div>
                       <br/>
                        <div className="download-apps">
                            <div className="app-store">
                                <a href="https://play.google.com/store/apps/details?id=com.mandir">
                                <img className="app" src="https://i.ibb.co/DVtZWmq/zndiqtxg.png" alt="not-found" />
                                </a>
                            </div>
                            <div className="app-store">
                                <a href="https://apps.apple.com/in/app/sri-mandir-puja-chadhava/id1637621461">
                                <img className="app" src="https://i.ibb.co/d2wm8ZB/8oyz191n.png" alt="not-found" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="body-home-right">
                    <img className="image-hanuman" src="https://i.ibb.co/Th5sghF/img-hero-artwork-en.webp" alt="image-not-found" />
                    </div>
                
                </div>


                <br/>
                <div>
                    <h1>Explore Sri Mandir</h1>
                    <div>
                        <Link to="/poojaseva">
                            <img className="book-puja-image" src="https://i.ibb.co/BGtQs9g/qq831fkd.png" alt="not-found"/>
                        </Link>
                        <p>Book Pujas at Temple</p>
                    </div>
                </div>

                <br/>

                <div className="body-home">

<div className="body-home-left">
   
    <div className="number-two-paragraph">
        <h3>Download Sri Mandir app now !!</h3>
        <h4>Connect to your beloved God, anytime, anywhere!</h4>
       
       
    </div>
   <br/>
    <div className="download-apps">
        <div className="app-store">
            <a href="https://play.google.com/store/apps/details?id=com.mandir">
            <img className="app" src="https://i.ibb.co/DVtZWmq/zndiqtxg.png" alt="not-found" />
            </a>
        </div>
        <div className="app-store">
            <a href="https://apps.apple.com/in/app/sri-mandir-puja-chadhava/id1637621461">
            <img className="app" src="https://i.ibb.co/d2wm8ZB/8oyz191n.png" alt="not-found" />
            </a>
        </div>
    </div>
</div>
<div className="body-home-right">
<img className="image-hanuman" src="https://i.ibb.co/m6D59QV/Screenshot-19-7-2024-235712-img-freepik-com.jpg" alt="image-not-found" />
</div>

</div>




          







            </div>
        )
    }
}

export default Home;