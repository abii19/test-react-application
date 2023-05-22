import React, { useState } from "react";
import Accordian from "./Accordian";

const accordians = [
  {
    title: "Title 1",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto aspernatur facere delectus natus possimus exercitationem ratione, ipsum eveniet veniam cumque architecto sed ex dicta omnis accusantium quas rerum ipsam eligendi!"
  },
  {
    title: "Title 2",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto aspernatur facere delectus natus possimus exercitationem ratione, ipsum eveniet veniam cumque architecto sed ex dicta omnis accusantium quas rerum ipsam eligendi!"
  },
  {
    title: "Title 3",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto aspernatur facere delectus natus possimus exercitationem ratione, ipsum eveniet veniam cumque architecto sed ex dicta omnis accusantium quas rerum ipsam eligendi!"
  }
];

const HooksPage = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    age: "",
    password: ""
  });

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [age, setAge] = useState(0);
  // const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    // console.log(name, email, age, password);
  };

  const [show, setShow] = useState(null);

  return (
    <div className="mb-40">
      <h1 className="font-medium text-5xl mb-4">useState</h1>
      {/* Forms */}
      <div className="px-96">
        <form onSubmit={handleSubmit} className="flex flex-col mx-auto">
          <label>Name</label>
          <input
            name="name"
            value={values.name}
            className="p-3 border block"
            onChange={handleChange}
          />
          <label>Email</label>
          <input
            name="email"
            type="email"
            value={values.email}
            className="p-3 border block"
            onChange={handleChange}
          />
          <label>Age</label>
          <input
            name="age"
            type="number"
            value={values.age}
            className="p-3 border block"
            onChange={handleChange}
          />
          <label>Password</label>
          <input
            name="password"
            type="password"
            value={values.password}
            className="p-3 border block"
            onChange={handleChange}
          />
          <button type="">Submit</button>
        </form>
      </div>

      <div className="px-96">
        {accordians.map((acc, index) => {
          return (
            <Accordian
              key={`${acc.title}-${index}`}
              index={index}
              title={acc.title}
              details={acc.details}
              show={show}
              setShow={setShow}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HooksPage;
