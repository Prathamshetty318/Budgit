import { Link } from "react-router-dom";

function Footer(){
    return(
        <Footer className="bg-gray-800 text-white text-center py-4 mt-18">
            <p>&copy; {new Date().getFullYear()} BUdgit. All rights reserved.</p>

            <div className="flex justify-center gap-6 mt-2">
                <h6>Follow Us On.</h6>
                <a href="http://www.facebook.com" className="hover:text-gray-200" target="_blank">facebook</a>
                <a href="http://www.Instagram.com" className="hover:text-gray-200" target="_blank">Instagram</a>
                <a href="http://www.Twitter.com" className="hover:text-gray-200" target="_blank">Twitter</a>
            </div>

            <div className="flex justify-center gap-6 mt-2">
                <h6>Contact us On.</h6>
                <a href="mailto:support@budgit.com" className="hover:text-gray-200" target="_blank">Email Us</a>
                <a href="mailto:support@budgit.com" className="hover:text-gray-200" target="_blank">Instagram</a>
            </div>
        </Footer>
    );
}

export default Footer;