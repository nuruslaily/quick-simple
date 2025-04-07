import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen bg-gray-900 text-gray-200 flex">
      <main className="flex-1 flex items-center justify-center flex-col gap-4">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h1 className="text-2xl font-bold mb-4">Welcome to Simple Quicks</h1>
          <p className="text-gray-400 mb-4">Click the button to go to Inbox.</p>
          <button
            onClick={() => navigate("/inbox")}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Go to Inbox
          </button>
        </div>
      </main>
    </div>
  );
}
