
import {Component} from 'react';



import {Link} from 'react-router-dom';


import Dropdown from 'react-bootstrap/Dropdown';

import 'bootstrap/dist/css/bootstrap.min.css';

import { CgProfile } from "react-icons/cg";

import { TbBrandBooking } from "react-icons/tb";

import { FaGopuram } from "react-icons/fa";

import { GiCandlebright } from "react-icons/gi";

import Button from 'react-bootstrap/Button';

import Modal from 'react-bootstrap/Modal';




import "./index.css"


class PoojaSevaNext extends Component {

    state={sidebarOpen: false, show: false}

    toggleSidebar=()=> this.setState({sidebarOpen:!this.state.sidebarOpen})

    handleClose=()=> this.setState({show:false})
    handleShow=()=> this.setState({show:true})
    render() {
        const {sidebarOpen,show}=this.state;
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
            
                <h2>Pooja Seva </h2>

                <div className="god-details">
                    <div>
                        <img className="temple" src="https://i.ibb.co/cvx2QXX/nchix6wv.png" alt="not-found" />
                    </div>
                    <div>
                    <h2>Maa Bagalamukhi Tantra Yukta Havan</h2>
                    <p>for Victory in Court Cases and Victory over Enemies</p>
                    </div>
                </div>

                <div>
                    <h2>Mahavidya Purnima Special Maa Bagalamukhi Tantra Yukta Havan for Victory in Court Cases and Victory over Enemies</h2>
         <p className='details-temple-para'>Among the ten Mahavidyas, Maa Bagalamukhi is the eighth Mahavidya, known for controlling the minds and intellect of enemies. In the scriptures, she is also referred to as 'Shatru Vinashini' because she can destroy the evil intentions of enemies. It is believed that her worship can avert great calamities and threats from enemies. Performing a special puja of Maa Bagalamukhi at sacred pilgrimage sites like Haridwar, on the extremely auspicious day of Purnima brings blessings of victory in all aspects of life.


One of the most sacred places to worship Mahavidya Maa Bagalamukhi is Haridwar. According to Hinduism, the pilgrimage site of Haridwar holds spiritual significance for pleasing the Goddess. It is one of the sacred cities of India where devotees come in search of divine knowledge and spiritual transformation. At the Maa Bagalamukhi temple in Haridwar, devotees seek the blessings of the Goddess to achieve victory in court cases and relief from enemies. Furthermore, the Goddess enshrined in this temple blesses her devotees with family happiness and peace, wealth, relief from all troubles, and success in government-related matters. Therefore, if you also want relief in your court cases and from enemies, participate in the Maa Bagalamukhi Tantra Yukta Havan that will be organised in Haridwar on the auspicious day of Purnima. Participate through Sri Mandir and receive blessings from Mahavidya Maa Bagalamukhi.</p>
               
               
               
               </div>

            
            <div>
                <br/>
                <h2>Maa Bagalamukhi Temple, Haridwar, Uttarakhand</h2>
                <div className='god-details'>
                    <div>
                        <img className="temple" src="https://i.ibb.co/d7FzKbp/7636ni1q.png" alt="not-found" />
                    </div>
                    <div>
                        <p className='details-temple-para'>Haridwar, the world-renowned religious city, is home to many mythological sites whose antiquity is mentioned in religious texts. Haridwar is a pilgrimage site where people from different states of the country and from abroad come to visit. One of these sacred places is the Maa Baglamukhi Dham, which is dedicated to the eighth Mahavidya, Baglamukhi. Swami Ashok Rudra Ji Maharaj decided to build the first temple of Shri Baglamukhi Devi in Haridwar in Shyampur village, Haridwar district, Uttarakhand. The foundation stone of this temple was laid in 2012.

Maa Baglamukhi is one of the ten Mahavidyas and is considered the goddess of stambhana shakti, which means she has the power to immobilise enemies. This temple in Haridwar is especially significant for devotees who are facing obstacles in life and seek power, victory, and protection. Special worship and rituals are performed for Maa Baglamukhi at this temple, including specific types of chants, tantric practices, and havans. Devotees also offer special prayers here to fulfil their desires. The temple's atmosphere is very serene and spiritual, providing inner peace to the devotees. It is believed that all the wishes of devotees are fulfilled here.</p>
                    </div>
                </div>
            </div>

            <h2>Select puja package</h2>

            <div className='puja-packages-container'>

                <div className="puja-packages">
                    <h1>1251 Rupees</h1>
                    <h2>Partner Puja</h2>
                    <h4>Puja for 2 people</h4>
                    <p>Pandit ji will call out your name and gotra during the puja sankalp.

Opt for additional offerings like Vastra Daan, Anna Daan, Gau Seva, or Deep Daan to be done in your name.

Upon completion, a video of your puja and offering will be shared with you on your registered WhatsApp number or can be found in your booking history within 3-4 days.

Sacred tirth prasad will be sent to your address within 8-10 days.
</p>
<div>
   
    <Button className="btn btn-success" variant="primary" onClick={this.handleShow}>
        PARTICIPATE
      </Button>
</div>
                </div>



            </div>



            <div>
          

      <Modal show={show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Fill your details for Puja</Modal.Title>
        </Modal.Header>
        <Modal.Body><h4>Enter Your Whatsapp Mobile Number</h4>
        Your Puja booking updates like Puja Photos, Videos and other details will be sent on WhatsApp on below number.
        <br/>
        <input type="text" placeholder="enter your whantsapp number"/>
        <h4>Enter your name</h4>
        <input type="text" placeholder="enter your name"/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
            </div>




            </div>

           
        )
    }
}

export default PoojaSevaNext;