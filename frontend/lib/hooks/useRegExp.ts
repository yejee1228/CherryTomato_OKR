//export const passwordRegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,12}$/; //대소문자, 특수문자, 숫자 모두 포함
export const passwordRegExp = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^+\-=])(?=\S+$).{6,12}$/; //대소문자 구분 없음. 공백 제외. 특수문자 제한

// eslint-disable-next-line no-useless-escape
export const emailRegExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

export const phoneRegExp = /^[0-9]{11}$/;

export const memberNameRegExp = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|]+$/;

export const checkRegExp = (text: string, regExp: RegExp) => {
    return regExp.test(text);
}