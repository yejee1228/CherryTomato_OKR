import { useRouter } from 'next/router';

const Index = () => {
    const router = useRouter()
    return (
        <div>
            <div onClick={() => router.push('./signup/admin')}>
                관리자로<br />회원가입
            </div>
            <div onClick={() => router.push('./signup/common')}>
                일반 회원으로<br />회원가입
            </div>
        </div>
    );
};

export default Index;