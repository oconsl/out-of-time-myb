
const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-md mx-auto bg-white p-8 border rounded-lg shadow-lg">
        <div className="text-center">
          <img
            src="../../assets/profile-picture.jpg"
            alt="Foto de perfil"
            className="w-32 h-32 bg-red-200 rounded-full mx-auto"
          />
          <h1 className="text-xl font-semibold mt-4">Username</h1>
        </div>
        <div className="mt-8">
          <h2 className="text-lg font-semibold">Personal Information</h2>
          <p>Location: City, Country</p>
          <p>Occupation: web Developer</p>
        </div>
        <div className="mt-8">
          <h2 className="text-lg font-semibold">Recent Timers</h2>
          <ul>
            <li>Timer 1 - 30 minutes</li>
            <li>Timer 2 - 45 minutes</li>
          </ul>
        </div>
        <div className="mt-8">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
            Edite Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
