import { Header, Navigator, MainWrap } from 'components/main'
import * as M from 'lib/styles/mainStyles'

const Main = () => {
    return (
        <>
            <Header />
            <M.MainWrap >
                <Navigator />
                <MainWrap />
            </M.MainWrap>
        </>
    );
};

export default Main;