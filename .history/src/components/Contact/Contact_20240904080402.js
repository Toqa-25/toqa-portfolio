import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  
  // <li class="contact-list-item">

  //         <FontAwesomeIcon icon="fa-brand fa-whatsapp" />
  //         <span class="contact-item-text capitalize">+201288859104</span>
  // </li>
  // <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
  // <FontAwesomeIcon icon="fa-brand fa-github" />
  return (
    <div className="contact">
    <ul class="contact-list">
                        <li className="contact-list-item">
                            <Link to="https://github.com/Toqa-25">
                                <FontAwesomeIcon icon="fa-brand fa-github" />
                                <span class="contact-item-text capitalize">github</span>
                            </Link>
                        </li>
                        <li className="contact-list-item">
                            <Link to="linkedin.com/in/toqa-abd-elsalam-656352184">
                                <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
                                <span class="contact-item-text capitalize">linkedIn</span>
                            </Link>
                        </li>
                       
                    </ul>
    </div>
  )
}

export default Contact