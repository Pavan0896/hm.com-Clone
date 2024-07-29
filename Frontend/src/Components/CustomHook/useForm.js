import { useState } from "react";

const useForm = (initState) => {
  const [form, setForm] = useState(initState);
  const [display, setDisplay] = useState("");
  const [btn, setBtn] = useState(true);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((prevForm) => ({ ...prevForm, [name]: value }));

    if (name === "name") {
      if (value.length < 3) {
        setDisplay("Name must contain at least 3 characters");
      } else {
        setDisplay("");
      }
    }

    if (name === "email") {
      if (!value || !/^\S+@\S+\.\S+$/.test(value)) {
        setDisplay("Email must be in a valid email address format.");
      } else {
        setDisplay("");
      }
    }

    if (name === "password") {
      if (value.length < 6) {
        setDisplay("Password must contain at least 6 characters.");
      } else {
        setDisplay("");
      }
    }

    if (name === "confirmPassword") {
      if (value !== form.password) {
        setDisplay("Password does not match");
      } else {
        setDisplay("");
      }
    }

    setBtn(
      !(form.name.length >= 3 && form.email && /^\S+@\S+\.\S+$/.test(form.email) && form.password.length >= 6 && value === form.password)
    );
  };

  const reset = () => {
    setForm(initState);
    setDisplay("");
    setBtn(true);
  };

  return { form, handleChange, display, btn, reset };
};

export default useForm;
