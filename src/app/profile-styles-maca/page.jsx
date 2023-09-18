import { FaUserEdit} from 'react-icons/fa';

const ProfilePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#242839] p-2">

      <div className="w-11/12 mx-auto bg-white p-8 border rounded-lg shadow-lg md:flex flex-row w-full justify-between lg:flex flex-col items-center w-3/5 xl:w-2/5">
        <div className="text-center">
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.DMDfV6N9jhYjyQCLGLlH5QHaLH&pid=Api&P=0&h=180"
            alt="Foto de perfil"
            className="w-32 h-32 bg-red-200 rounded-full mx-auto"
          />
          <h1 className="text-xl font-semibold mt-4">Username</h1>
        </div>
        <div className="mt-8">
          <h2 className="text-lg font-semibold">Personal Information</h2>
          <p>Birthday: February 13th </p>
          <p>Location: City, Country</p>
          <p>Occupation: Web Developer</p>
        </div>
        <div className="mt-8">
          <h2 className="text-lg font-semibold">Recent Timers</h2>
          <ul>
            <li>Timer name - 30 minutes</li>
            <li>Timer name - 45 minutes</li>
          </ul>
        </div>
        <div className="mt-8 md:flex-col items-end">
          <button className="bg-[#ba8d8a] hover:bg-[#cfb8b7] text-white p-2 rounded-md">
          <FaUserEdit/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
