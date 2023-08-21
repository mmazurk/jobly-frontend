import { useNavigate } from "react-router-dom";
import { useState } from "react";
import FormItem from "./FormItem";

function Login({ login }) {
  const navigate = useNavigate();
  const initialState = {
    username: "",
    password: ""
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    console.log(formData);
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData).then(() => navigate("/"));
  };

  return (
    <div className="centered">
      <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
        <h2 className="mb-3">Login</h2>
        <div className="card bg-secondary-subtle">
          <div className="card-body">
            <form>
              {Object.keys(formData).map((item, idx) => (
               
                <FormItem
                  field={`${item}`}
                  value={formData[item]}
                  handleChange={handleChange}
                  key={idx}
                />
              ))}
             <button onClick={handleSubmit} className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;