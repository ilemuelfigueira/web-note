import { observer } from "mobx-react";
import { Footer } from "../packages/core/footer";
import { Header } from "../packages/core/header";

const SigninPage = () => {
  return (
    <div className="w-full h-full flex flex-col gap-2 overflow-hidden">
      <Header title="App" subtitle="SignUp" userName="Lemuel" />
      <span className="h-full text-clip">Signin Page</span>
      <Footer
        contactEmail="lfigueiradev@gmail.com"
        contactPhone="5521968219784"
        githubUrl="https://github.com/ilemuelfigueira"
      />
    </div>
  );
};

const ObserverSigninPage = observer(SigninPage);

export default ObserverSigninPage;
