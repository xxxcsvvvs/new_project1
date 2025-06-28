import { useState } from 'react'
import './App.css'

function App() {
  const [memberId, setMemberId] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const memberData = {
      memberId,
      password,
      address,
    };

    try {
      const response = await fetch('http://localhost:8080/api/member/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(memberData),
      });

      const text = await response.text();
      setResponseMessage(text);
    } catch (error) {
      console.error('API 호출 실패:', error);
      setResponseMessage('API 호출 중 오류 발생');
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">회원가입 폼</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="아이디"
          value={memberId}
          onChange={(e) => setMemberId(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="주소"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
          전송
        </button>
      </form>

      {responseMessage && (
        <p className="mt-6 text-green-500 font-medium">{responseMessage}</p>
      )}
    </div>
  );
}

export default App;