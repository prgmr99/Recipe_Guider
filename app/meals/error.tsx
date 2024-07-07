"use client";

export default function Error({ error }: { error: Error }) {
  return (
    <main className="error">
      <h1>An error occured!</h1>
      <p>Failed to create meal.</p>
    </main>
  );
}

// 왜? use client?
// next.js에서는 컴포넌트로 모든 에러를 잡을 수 있도록 보장하기 때문에
// 클라이언트 쪽에서 발생하는 에러도 포함해서...
