function Privacypolicy() {
  const sections = [
    {
      title: "✨ Information We Collect ✨",
      content: [
        "We may collect the following types of information:",
        "Personal Information: such as your name, email address, and contact details when you register or contact us.",
        "Usage Data: information about how you use our app or website (e.g., pages visited, time spent).",
        "Cookies: small files stored on your device to enhance your browsing experience."
      ]
    },
    {
      title: "✨ How We Use Your Information ✨",
      content: [
        "Provide and improve our services.",
        "Communicate with you about updates or support.",
        "Analyze usage to enhance user experience.",
        "Ensure security and prevent unauthorized access."
      ]
    },
    {
      title: "✨ Data Protection ✨",
      content: [
        "We use industry-standard measures to protect your data from unauthorized access, disclosure, or alteration.",
        "However, no method of transmission over the internet is 100% secure, so we cannot guarantee absolute security."
      ]
    },
    {
      title: "✨ Sharing of Information ✨",
      content: [
        "We do not sell or rent your personal information.",
        "We may share limited data with trusted third-party services only for hosting, analytics, or legal compliance."
      ]
    },
    {
      title: "✨ Your Rights ✨",
      content: [
        "You have the right to access, update, or delete your personal data.",
        "Opt out of non-essential communications.",
        "Request details about how your data is used."
      ]
    },
    {
      title: "✨ Changes to This Policy ✨",
      content: [
        "We may update this Privacy Policy from time to time.",
        "Any updates will be reflected on this page with a new 'Last Updated' date."
      ]
    },
    {
      title: "✨ Contact Us ✨",
      content: [
        "If you have any questions or concerns about this Privacy Policy, please contact us at:",
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=support@budgit.com"
                        target = "blank_"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline">support@budgit.com</a>
      ]
    }
  ];

  return (
    <div className="p-10">
      <h1 className="font-bold text-2xl">🛡️ Privacy Policy</h1>
      <p className="ms-5 font-semibold mb-6">Last updated: 10-10-2025</p>
      <p className="ms-5 font-semibold mb-6">
        Welcome to Budgit! Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our website or services.
      </p>

      {sections.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="font-bold text-lg hover:translate-y-1 transition-transform ms-5">{section.title}</h2>
          {section.content.map((text, index) => (
            <p key={index}
              className="ms-8 font-semibold hover:translate-y-1 transition-transform mt-1">{text}</p>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Privacypolicy;
