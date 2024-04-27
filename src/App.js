import "./App.css";
import { Form } from "./components/Form/Form";
import { formConfig } from "./config/form.config";

function App() {
  const onSubmitHandler = (data) => {
    console.log(data);
  };
  return (
    <div className="App">
      <Form config={formConfig} onSubmitHandler={onSubmitHandler} />
    </div>
  );
}

export default App;
