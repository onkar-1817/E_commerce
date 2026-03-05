
const fields = [
  { placeholder: "John Doe", key: "name" },
  { placeholder: "hello@gmail.com", key: "email" },
  { placeholder: "password", key: "password" },
];

const formData: { name: string; email: string; password: string } = {
  name: "",
  email: "",
  password: "",
};

const InputPg = () => {
  return <div>{
         fields.map((field, index) => (
   <div key={index}>
    <input placeholder={field.placeholder} name={field.key} 
    value={formData[field.key]}
    />
    </div>
))
    }</div>;
};

export default InputPg;
