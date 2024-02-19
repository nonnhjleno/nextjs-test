import Counter from './Counter';
import UserList from './users/UserList';

export default function Home() {
  return (
    <div className="m-4">
      <h1 className="text-2xl">Home</h1>
      <Counter>
        <h2 className="font-bold text-lg mt-4">ユーザー一覧</h2>
        <UserList />
      </Counter>
    </div>
  );
}
