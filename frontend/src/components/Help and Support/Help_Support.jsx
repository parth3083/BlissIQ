import React, { useRef, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import image1 from "../../assets/bg.webp";
import image2 from "../../assets/success.jpg";

function HelpSupport() {
  const fileInputRef = useRef(null);
  const formRef = useRef(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleAddPhotoClick = () => fileInputRef.current.click();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) setUploadedFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPopupVisible(true);
    setUploadedFile(null); // Reset the uploaded file
    formRef.current.reset(); // Reset the form fields
  };

  return (
    <div className="w-full h-full p-3">
      <h2 className="text-4xl font-semibold">Help and Support</h2>
      <div
        className="w-full h-full rounded-lg bg-no-repeat bg-cover  overflow-hidden"
        style={{ backgroundImage: `url(${image1})` }}
      >
        <form
          ref={formRef}
          className="w-full h-full flex flex-col gap-6 items-center"
          onSubmit={handleSubmit}
        >
          <div className="w-full flex items-center justify-between gap-4">
            <InputField label="Name" id="Name" type="text" required />
            <InputField label="Email" id="Email" type="email" required />
          </div>

          <label
            htmlFor="Issue"
            className="w-full flex flex-col items-start gap-2"
          >
            <h1>
              Your Issue <span className="text-red-500">*</span>
            </h1>
            <textarea
              id="Issue"
              required
              className="w-full border h-56 rounded-md outline-none py-2 px-3 text-lg"
            />
          </label>

          <button
            type="button"
            onClick={handleAddPhotoClick}
            className="w-[30vw] bg-yellow-200 border rounded-md border-yellow-500 h-16 flex items-center justify-center gap-2 text-2xl"
          >
            <IoMdAdd className="text-2xl" />
            Add Photo
          </button>

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />

          {uploadedFile && (
            <p className="text-lg mt-2 text-gray-700">
              Uploaded: {uploadedFile.name}
            </p>
          )}

          <button
            type="submit"
            className="w-[30vw] rounded-md bg-yellow-500 h-16 text-2xl"
          >
            Send
          </button>
        </form>
      </div>

      {isPopupVisible && <Popup onClose={() => setIsPopupVisible(false)} />}
    </div>
  );
}

const InputField = ({ label, id, type, required }) => (
  <label htmlFor={id} className="w-[45%]">
    <h1 className="text-md mb-2">{label}</h1>
    <input
      type={type}
      id={id}
      className="w-full border h-10 rounded-md outline-none text-xl px-3"
      required={required}
    />
  </label>
);

const Popup = ({ onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center max-w-lg text-center">
      <img src={image2} alt="Success" className="mb-4" />
      <p className="w-2/3 text-lg">Your message has been received successfully.</p>
      <button
        onClick={onClose}
        className="mt-6 px-6 py-2 bg-green-500 text-white rounded-lg"
      >
        Close
      </button>
    </div>
  </div>
);

export default HelpSupport;
