function FAQ() {
    const faqs = [
        {
        q: "1️⃣ What is Budgit?",
        a: "Budgit is a simple and smart expense-tracking app that helps you split bills, track group spending, and manage personal finances — all in one place."
        },
        {
        q: "2️⃣ Is Budgit free to use?",
        a: "Yes! Budgit is completely free to use. We may introduce optional premium features in the future, but basic expense tracking and splitting will always remain free."
        },
        {
        q: "3️⃣ Do I need to create an account to use Budgit?",
        a: "Yes, you’ll need to sign up with your email or phone number. This helps us keep your expenses safe, synced, and accessible anytime, anywhere."
        },
        {
        q: "4️⃣ Can I share expenses with my friends?",
        a: "Absolutely! That’s what Budgit is made for. You can create groups, add friends, and split bills instantly — everyone gets notified about their share."
        },
        {
        q: "5️⃣ How secure is my data?",
        a: "Your data is protected using encryption and stored safely in our servers. We never share your information with third parties without your consent."
        },
        {
        q: "6️⃣ Can I access Budgit on multiple devices?",
        a: "Yes! Once logged in, your data syncs automatically — so you can track and manage expenses from your laptop, phone, or tablet."
        },
        {
        q: "7️⃣ What if I forget my password?",
        a: "No worries! Just click on the “Forgot Password” link on the login page and follow the steps to reset it securely."
        },
        {
        q: "8️⃣ Who can I contact for support?",
        a: "If you face any issues or have questions, you can always reach us at 📧 support@budgitapp.com — We’re here to help!"
        },
        {
        q: "9️⃣ Will there be new features in the future?",
        a: "Definitely! We’re constantly improving Budgit. Expect features like advanced analytics, AI-powered budgeting, and custom reminders soon!"
        }
    ];
    return (
        <div className="p-10">
            <h1 className="font-bold text-xl mb-6">🧐 Frequently Asked Questions (FAQ)</h1>
            {faqs.map((item, index) => (
            <div key={index} className="mb-6">
                <h1 className="font-bold hover:translate-y-1 transition-transform">{item.q}</h1>
                <p className="font-semibold hover:translate-y-1 transition-transform">{item.a}</p>
            </div>
        ))}
        </div>
    );
}

export default FAQ;
