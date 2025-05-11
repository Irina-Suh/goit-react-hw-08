
import LoginForm from "../components/LoginForm/LoginForm";


const LoginPage = () => {

  return (
    <div
      className={
        "color: rgb(248, 240, 240) bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5 w-sm"
      }
    >
      <LoginForm />
    </div>
  );
};

export default LoginPage;