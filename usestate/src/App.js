import { useForm } from "./useForm";

function App() {
  const [values, handleChange] = useForm({ email: "", password: "" });

  return (
    <div>
      <input
        type="text"
        name="text"
        value={values.email}
        onchange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={values.password}
        onchange={handleChange}
      />
    </div>
  );
}

export default App;
