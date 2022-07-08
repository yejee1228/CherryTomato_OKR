import ChangePassword from '/components/account/ChangePassword';
import FindId from '/components/account/FindId';
import FindPassword from '/components/account/FindPassword';

const account = ({ contents }) => {
  return (
    <>
      account
      {contents}
      <div className="contents">
        <ChangePassword />
        {contents === 'findId' && <FindId />}
        {contents === 'findPassword' && <FindPassword />}
      </div>
    </>
  );
};

export default account;
