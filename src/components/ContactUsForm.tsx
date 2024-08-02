import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

// #3. count render count
// 3.let renderCount = 0
const ContactUsForm = () => {
  const { register, control, handleSubmit, formState } = useForm();

  // #5. Handling Errors can use formstate:{erros} in the deconstractor
  const { errors } = formState;
  //#1. managing Form State
  // 1 const form = useForm();
  // 1 const { register } = form;

  // 3.renderCount++

  //#4.Form submission
  const onSubmit = handleSubmit((data) => {
    console.log("Fomr Submitted", data);
  });

  return (
    <div>
      <form  className="form" onSubmit={onSubmit} noValidate>
        {/*3 To visualize render count */}
        {/*3 <h1>Contact Us {renderCount / 2}</h1> */}
        <h1>Contact Us</h1>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p className="error">Name is required</p>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && <p className="error">Invalid email format !</p>}
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <input
            type="text"
            id="message"
            {...register("message", { required: "Message is required" })}
          />
          {errors.message && <p className="error">Message is required </p>}
        </div>
        <button className="btn">Submit</button>
      </form>

      {/* #2. To visualize on the browser  devTool*/}
      <DevTool control={control} />
    </div>
  );
};

export default ContactUsForm;
