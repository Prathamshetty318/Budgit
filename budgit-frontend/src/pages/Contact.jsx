import { Link } from "react-router-dom";

function Contact(){
    return(
        <div className="container mx-auto px-10">
            <h1 className="font-bold  mt-5 ms-4 text-3xl">📞 Contact Support</h1><br></br>
            <div className="lg:flex">
                <div className="lg:w-1/2 my-8">
                    <p className="font-semibold text-2xl  ms-5 "> ✉️ Mail</p>
                    <p className="font-semibold text-2xl  ms-5 "><a href="support@budgit.com" className="text-blue-200">Support@budgit.com</a></p><br></br>
                    <p className="font-semibold    ms-5 ">For any issues or inquiries, please reach out to us at the email address above.</p>
                    <p className="font-semibold    ms-5 "> We are here to help you with any questions or concerns you may have about using Budgit.</p>
                </div>
                <div className="lg:w-1/2 my-8">
                    <p className="font-semibold text-2xl  ms-5 "> ❓ FAQ -</p>
                    <p className="font-semibold text-2xl  ms-5 "><Link to="/feedback" className="text-blue-200">https://feedback.budgit.com</Link></p><br></br>
                    <p className="font-semibold    ms-5 ">Check out our FAQ page for quick answers to common questions about Budgit.</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;