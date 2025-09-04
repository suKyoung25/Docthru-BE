import bcrypt from "bcrypt";

/**
 * 민감한 정보 필터링 함수
 */
function filterSensitiveUserData(user) {
  const { hashedPassword, refreshToken, ...rest } = user;
  return rest;
}

/**
 * 비밀번호 해싱 함수
 * 배포환경에서 연결 타임아웃을 방지하기 위해 salt rounds 조정
 */
function hashPassword(password) {
  const saltRounds = process.env.NODE_ENV === 'production' ? 6 : 10;
  return bcrypt.hash(password, saltRounds);
}

/**
 * 입력된 비밀번호가 해시된 비밀번호와 일치하는지 확인
 * (로그인 시 사용)
 */
async function verifyPassword(inputPassword, hashedPassword) {
  return await bcrypt.compare(inputPassword, hashedPassword);
}

/**
 * 이메일 검증 함수
 */
function verifyEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

export { filterSensitiveUserData, hashPassword, verifyPassword, verifyEmail };
