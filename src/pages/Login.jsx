import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { StoreContext } from "../context/StoreContext";

const Login = () => {
  const { url, setToken } = useContext(StoreContext);

  const [data, setData] = useState({
    email: "",
    password: "",
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

  const onLogin = async (event) => {
    event.preventDefault();
    const newUrl = url + "/api/login";

    const response = await fetch(newUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();

    if (responseData) {
      setToken(responseData.token);
      localStorage.setItem("token", responseData.token);
      navigate("/");
    } else {
      alert(response.data.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded px-8 py-6 mb-4">
        <h2 className="text-2xl mb-6 text-gray-800 text-center">Login</h2>
        <form onSubmit={onLogin}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              onChange={onChangeHandler}
              value={data.email}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
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
              onChange={onChangeHandler}
              value={data.password}
              id="password"
              type="password"
              placeholder="Password"
              name="password"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
          </div>
          <p className="mt-3">
            Don&apos;t have an account?{" "}
            <Link className="text-blue-500" to="/register">
              Register
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
