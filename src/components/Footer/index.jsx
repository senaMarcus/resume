import './footer.scss'
import {FiGithub} from 'react-icons/fi'
import {FiInstagram} from 'react-icons/fi'
import {FiLinkedin} from 'react-icons/fi'

const Footer = () => {
    return (
        <footer class="white-section" id="foter">
            <div class="container-fluid">
                <ul class="social-icons">
                    <li ><a href="https://github.com/maarvins" target="_blank"  rel="noreferrer"><i class="fa fa-instagram"><FiGithub/></i></a></li>  
                    <li><a href="https://www.instagram.com/marcusenadev/" target="_blank"  rel="noreferrer"><FiInstagram/><i class="fa fa-linkedin"></i></a></li>  
                    <li><a href="https://www.linkedin.com/in/marcusena/" target="_blank"  rel="noreferrer"><FiLinkedin/><i class="fa fa-github"></i></a></li>  
                </ul>
                <p class="copyright">Copyright © 2022 All rights reserved by MarcusenaDev</p>
            </div>
  </footer>
    )
}

export default Footer