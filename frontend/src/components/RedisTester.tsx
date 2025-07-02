import React, { useState } from 'react';
import axios from 'axios';

function RedisTester() {
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  const handleSave = async () => {
    try {
      const response = await axios.post(`http://localhost:8080/redis/save?key=${key}&value=${value}`);
      setResult(response.data);
    } catch (error: unknown) {
      if (error instanceof Error) {
    setResult("❌ 저장 실패: " + error.message);
    } else {
    setResult("❌ 저장 실패: 알 수 없는 에러");
    }
    }
  };

  const handleGet = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/redis/get?key=${key}`);
      setResult("🔍 조회 결과: " + response.data);
    } catch (error: unknown) {
      if (error instanceof Error) {
      setResult("❌ 조회 실패: " + error.message);
      } else {
      setResult("❌ 조회 실패: 알 수 없는 에러");
      }
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:8080/redis/delete?key=${key}`);
      setResult(response.data);
    } catch (error: unknown) {
      if (error instanceof Error) {
      setResult("❌ 삭제 실패: " + error.message);
      } else {
      setResult("❌ 삭제 실패: 알 수 없는 에러");
      }
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>🧪 Redis 테스트</h2>
      <input
        type="text"
        placeholder="key"
        value={key}
        onChange={(e) => setKey(e.target.value)}
        style={{ marginRight: 10 }}
      />
      <input
        type="text"
        placeholder="value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ marginRight: 10 }}
      />
      <div style={{ marginTop: 10 }}>
        <button onClick={handleSave} style={{ marginRight: 10 }}>저장</button>
        <button onClick={handleGet} style={{ marginRight: 10 }}>조회</button>
        <button onClick={handleDelete}>삭제</button>
      </div>
      <div style={{ marginTop: 20 }}>
        <strong>결과: </strong>{result}
      </div>
    </div>
  );
}

export default RedisTester;