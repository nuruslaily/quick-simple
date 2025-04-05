import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen bg-gray-900 text-gray-200 flex">
      {/* Sidebar */}
      {/* <aside className="w-64 bg-gray-800 p-6 flex flex-col shadow-lg">
        <h1 className="text-lg font-bold mb-4">Simple Quicks</h1>
        <nav className="flex flex-col gap-2">
          <button
            onClick={() => navigate("/")}
            className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md"
          >
            Home
          </button>
          <button
            onClick={() => navigate("/inbox")}
            className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-md"
          >
            Inbox
          </button>
        </nav>
      </aside> */}

      {/* Main Content */}
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
