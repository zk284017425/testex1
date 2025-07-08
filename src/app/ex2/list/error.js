
'use client'; // 이 파일은 반드시 클라이언트 컴포넌트여야 합니다.

import { useEffect } from 'react';

export default function Error({
  error, // 💡 발생한 오류 객체
  reset, // 💡 오류 경계 내부를 다시 렌더링하려고 시도하는 함수
}) {
  useEffect(() => {
    // 💡 오류 로깅 서비스(Sentry, LogRocket 등)에 오류를 기록하는 데 사용될 수 있습니다.
    console.error(error);
  }, [error]);

  return (
    <div className="p-5 border border-red-500 rounded-lg bg-red-50 text-red-800">
      <h2 className="text-xl font-bold text-red-700 mb-2">에러가 발생했습니다!</h2>
      <p className="text-red-600 mb-4">{error.message || '알 수 없는 오류가 발생했습니다.'}</p>
      
      <p className="text-sm text-gray-600 mt-3">
        문제가 계속되면 관리자에게 문의해주세요.
      </p>
    </div>
  );
}
