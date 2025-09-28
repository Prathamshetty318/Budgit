function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Budgit</h1>
      <p className="text-lg text-gray-600 mb-6">
        Easily track and split expenses with friends.
      </p>
      <div className="flex gap-4 justify-center">
        <a href="/login" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Login</a>
        <a href="/signup" className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">Signup</a>
      </div>
    </div>
  );
}

export default Home;
