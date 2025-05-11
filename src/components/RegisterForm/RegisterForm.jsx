import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../../redux/auth/operations';


const RegisterForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  const handleSubmit = (values) => {
    console.log(values);
    dispatch(register(values));
  };
  return (
    <div className="hero bg-base-200 ">
    <div className="card bg-base-100 w-full max-w-sm shrink-0 ">
      <h1 className="text-4xl font-bold text-center pt-4">Register!</h1>
      <div className="card-body">
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <Field
                name="name"
                type="text"
                className="input"
                placeholder="Name"
              />
              <label className="label">Email</label>
              <Field
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <Field
                name="password"
                type="password"
                className="input"
                placeholder="Password"
              />
              <div>
                <Link to="/login" className="link link-hover">
                  You already have account? Log in!
                </Link>
              </div>
              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>
            </fieldset>
          </Form>
        </Formik>
        <Link className="divider divider-ghost" to="/">
          Back to Home
        </Link>
      </div>
    </div>
  </div>
  );
};
export default RegisterForm;