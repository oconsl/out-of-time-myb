
const EditUserForm = () => {
    return (
        <form className="bg-white p-4 rounded-lg">
        <div className="mb-4">
          <label htmlFor="birthday" className="block font-bold">Birthday:</label>
          <input
            type="text"
            id="birthday"
            name="birthday"
            className="rounded-md border-2 border-gray-300 p-1 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block font-bold">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            className="rounded-md border-2 border-gray-300 p-1 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="occupation" className="block font-bold">Occupation:</label>
          <input
            type="text"
            id="occupation"
            name="occupation"
            className="rounded-md border-2 border-gray-300 p-1 w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-[#ba8d8a] hover:bg-[#cfb8b7] text-white p-2 rounded-md w-full"
        >
          Save
        </button>
      </form>
    );
  };
  
  export default EditUserForm;
  