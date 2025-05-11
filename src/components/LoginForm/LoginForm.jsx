import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logIn } from '../../redux/auth/operations';


const LoginForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: '',
    password: '',
  };
  const handleSubmit = (values, options) => {
    dispatch(logIn(values));
    // console.log(values);
    options.resetForm();
   
  };
  return (
   
        <div className="hero bg-base-200 ">
      <div className="card bg-base-100 w-full max-w-sm shrink-0">
        <h1 className="text-4xl font-bold text-center pt-4">Login!</h1>
        <div className="card-body">
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
              <fieldset className="fieldset">
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
                  <Link to="/register" className="link link-hover">
                    You don't have account? Sign up!
                  </Link>
                </div>
                <button type="submit" className="btn btn-neutral mt-4">
                  Login
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
export default LoginForm;