import { SocialIcon } from "react-social-icons";


const Footer = () => {
    return (
        <div>
            <footer className="footer p-10  mt-1 bg-neutral text-neutral-content">
            
            <div className='footer-container p-5'>
            <p>All copyright reserved - M.M HABIB
            
            </p> 
                <h3>📧 habib.se56@gmail.com</h3>
                <h3>📞 +880 10709004842 </h3>

                <h3>🏠 Cumilla 3500, BD</h3>
        
            </div>

  <nav>
    <h6 className="footer-title">Social</h6> 
    <div className="grid grid-flow-col gap-4">
    <SocialIcon url="https://www.facebook.com/habibczs" />
    <SocialIcon url="https://x.com/1051Habib" />
    <SocialIcon url="https://github.com/MMhabib" />
    <SocialIcon url="https://www.linkedin.com/in/mmhabib/" />
    
    </div>
  </nav>
</footer>
        </div>
    );
};

export default Footer;