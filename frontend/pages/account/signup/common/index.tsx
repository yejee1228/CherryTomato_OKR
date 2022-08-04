import { CompanyAuth, CommonSignup } from 'components/account';
import { useSelector } from 'react-redux';
import { RootState } from 'lib/store/modules';

const Index = () => {
  const signupState = useSelector((state: RootState) => state.user.signupState)
  return (
    <>
      {signupState ? <CommonSignup /> : <CompanyAuth />}
    </>
  );
};

export default Index;
