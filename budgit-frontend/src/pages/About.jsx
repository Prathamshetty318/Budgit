function About(){
    return(
        <div className="container mx-auto px-8 mt-4 lg:max-w-5xl">
            <div className="lg:flex lg:justify-between lg:items-center   ">
                <div className="lg:w-2/3 ">
                    <h1 className="font-bold  mt-4 ms-5">🤔 About Budgit</h1><br></br>
                    <p className="ms-5 font-semibold hover:underline">Budgit is your smart and simple expense tracking companion.</p>
                    <p className="ms-5 font-semibold hover:underline">Budgit is your smart and simple expense tracking companion.</p><br/>
                    <p className="ms-5 font-semibold hover:underline">We designed it to make managing money stress-free, whether you’re:</p>
                    <p className="ms-5 font-semibold hover:underline"> - 💰 Tracking your personal expenses and budgeting daily needs</p>
                    <p className="ms-5 font-semibold hover:underline"> - 🏠 Splitting rent and bills with your roommates</p>
                    <p className="ms-5 font-semibold hover:underline"> - 🍕 Sharing food costs with friends</p>
                    <p className="ms-5 font-semibold hover:underline"> - ✈️ Keeping track of travel expenses when exploring new places</p><br></br>
                    <p className="ms-5 font-semibold hover:underline">With Budgit, you can:</p>
                    <p className="ms-5 font-semibold hover:underline"> - Add and organize your expenses in just a few clicks</p>
                    <p className="ms-5 font-semibold hover:underline"> - Split costs fairly among friends or groups</p>
                    <p className="ms-5 font-semibold hover:underline"> - View summaries and insights to stay on top of your spending</p>
                    <p className="ms-5 font-semibold hover:underline"> - Keep everything transparent and hassle-free</p><br/>
                    <p className="ms-5 font-semibold hover:underline">Our mission is simple:</p>
                    <p className="ms-5 font-semibold hover:underline">👉 Take the stress out of money management, so you can focus on living life.</p><br></br>
                    <p className="ms-5 font-semibold hover:underline"> - “Budgit — Because every rupee counts.”</p>
                </div>
                <img src= "/budgitlogo1.png" className="w-100 hidden lg:block"/>
            </div>
        </div>
    );
}

export default About;