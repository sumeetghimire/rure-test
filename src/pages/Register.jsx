import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

const Register = () => {
  const { url } = useContext(StoreContext);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const navigate = useNavigate();
  console.log(data);

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const onRegister = async (event) => {
    event.preventDefault();

    let newUrl = url + "/api/register";

    const response = await fetch(newUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();

    if (responseData) {
      navigate("/login");
    } else {
      alert(response.data.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded px-8 py-6 mb-4">
        <h2 className="text-2xl mb-6 text-gray-800 text-center">Register</h2>
        <form onSubmit={onRegister}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Name"
              name="name"
              onChange={onChangeHandler}
              value={data.name}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              onChange={onChangeHandler}
              value={data.email}
              name="email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              onChange={onChangeHandler}
              value={data.password}
              name="password"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="tel"
              placeholder="Phone"
              onChange={onChangeHandler}
              value={data.phone}
              name="phone"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register
            </button>
          </div>
          <p className="mt-3">
            Already have an account?{" "}
            <Link className="text-blue-500" to="/Login">
              Register
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
