import profilePic from './assets/photo.jpg';
function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900  font-sans">
      <div className="max-w-3xl w-full bg-white rounded-xl shadow-lg">
        <header className="flex justify-between items-center bg-gray-800 p-6">
           {/* Kolom kiri nama dan role */}
            <div className="flex-1">
              <h1 className="text-3xl font-semibold text-white">Adi Santoso</h1>
              <p className="text-gray-300">Software Engineer</p>
            </div>

            {/* Kolom tengah photo */}
            <div className="flex-1 text-center">
              <img
                  src={profilePic}
                  alt="Profile"
                  className="w-40 h-40 object-cover rounded-full mx-auto"
                />
            </div>

            {/* Kolom kanan contact */}
            <div className="flex-1 text-right">
              <p className="text-gray-300">📞 +62 852 6977 5250</p>
              <p className="text-gray-300">📧 adi.santoso333@gmail.com</p>
              <p className="text-gray-300">📍 Jambi, Indonesia</p>
            </div>
        </header>

        <section className="mb-2 p-5">
          <h2 className="text-2xl font-semibold mb-3 border-b border-gray-700 pb-2"> 🤵Profile</h2>
          <p className="text-gray-900 leading-relaxed">
            Saya adalah seorang software engineer yang berpengalaman dalam pengembangan aplikasi berbasis web. Saya memiliki pengalaman
          </p>
        </section>

        <section className="mb-2 p-5">
          <h2 className="text-2xl font-semibold mb-3 border-b border-gray-700 pb-2"> 🚀 Stack Skill</h2>
          <ul className="flex space-x-3 list-none text-gray-9000">
            <li>React</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
          </ul>
        </section>

        <section className="mb-2 p-5">
          <h2 className="text-2xl font-semibold mb-3 border-b border-gray-700 pb-2"> ✈ Job Experience</h2>
          <ul className="space-y-3 text-gray-900">
            <li>
              <h3 className="text-xl font-semibold">Software Engineer</h3>
              <p>PT. XYZ</p>
              <p>2022 - Present</p>
            </li>
            <li>
              <h3 className="text-xl font-semibold">Software Engineer</h3>
              <p>PT. ABC</p>
              <p>2020 - 2022</p>
            </li>
          </ul>
        </section>
        <section className="mb-2 p-5">
          <h2 className="text-2xl font-semibold mb-3 border-b border-gray-700 pb-2">🏗 Project Development</h2>
          <ul className="space-y-3 text-gray-900">
            <li>
              <h3 className="text-xl font-semibold">Bachelor of Science in Computer Science</h3>
              <p> Universitas XYZ</p>
              <p>2018 - 2022</p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default App;
