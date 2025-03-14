import instagram from './assets/instagram.png'
import facebook from './assets/facebook.png'
import gmail from './assets/gmail.png'
function Footer(){

    return(
        <>
            <div className="footer">
                <div className="contacts">
                    <h2>Contact Us</h2>
                    <div className="social">
                        <a href="https://www.instagram.com/call_me_samazing/?__pwa=1"><img src={instagram} className="insta" /></a>
                        <a href="https://www.facebook.com/Chabani.Mohamed.Samy"><img src={facebook} className="facebook" /></a>
                        <a href="mailto:chabanimohamedsamy@gmail.com"><img src={gmail} className="gmail" /></a>
                    </div>
                </div>
                <div className="feedback">
                    <h2>Leave a comment</h2>
                    <textarea placeholder="Comment here ..." className='comment'></textarea>
                    <button className="submit">Submit</button>
                </div>
                
            </div>
        </>
    );


}
export default Footer