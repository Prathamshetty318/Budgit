import { useState } from "react";


function Settings(){
    const [darkmode, setDarkmode]= useState(false);
    const [language, setLanguage] = useState("en");
    const [notification, setNotification]= useState(true);

    const handleSave =(e) =>{
        e.preventDefault();
        alert("Settings saved!");
    };

    return(
        <div className="flex items-center justify-center mt-10">
            <form
            onSubmit = {handleSave}
            className="bg-white shadow-md rounded-lg p-8 max-w-md w-full"
            >
                <h1 className="text-2xl font-bold mb-6 text-gray-800">
                    App Settings
                </h1>

                <label className="flex items-center mb-4">
                    <input
                    type="checkbox"
                    checked={darkmode}
                    onChange={()=> setDarkmode(!darkmode)}
                    className="mr-2"/>
                    Enable Dark Mode
                </label>

                <label className="block mb-4">
                    Language:
                    <select
                    value={language}
                    onChange={(e)=> setLanguage(e.target.value)}
                    className="border border-gray-300 rounded-md p-2 w-full mt-1">
                        <option value="en">English</option>
                        <option value="hi">Hindi</option>
                    </select>
                </label>

                <label className="flex items-center mb-6">
                    <input
                    type = "checkbox"
                    checked={notification}
                    onChange={()=>setNotification(!notification)}
                    className="mr-2"/>
                    Receive Email Notification
                </label>

                <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white rounded-md p-2 w-full transition-transform hover:translate-y-1 ease-in-out"
                >
                    Apply Changes
                </button>
            </form>
        </div>
    )

}

export default Settings;