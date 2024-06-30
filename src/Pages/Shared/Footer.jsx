import { SocialIcon } from "react-social-icons";


const Footer = () => {
    return (
        <div>
          
            <footer className="footer p-10  mt-1 bg-neutral text-neutral-content">
            
            <div className='footer-container p-5'>
            <p className="">All copyright reserved - M.M HABIB
            </p>
                <h1 className="text-lg">📧 habib.se56@gmail.com</h1>
                <h2 className="text-lg">📞 +880 10709004842 </h2>
                <h2 className="text-lg">🏠 Cumilla 3500, BD</h2>
        
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