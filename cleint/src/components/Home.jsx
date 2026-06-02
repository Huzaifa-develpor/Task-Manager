import { Link } from 'react-router-dom'
import { FaPlus, FaList } from 'react-icons/fa'
import Header from './Header'

const Home = () => {
  return (

<>
<Header/>
 <div className="text-center mt-12">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Welcome to Task Manager</h1>
        <p className="text-gray-600 text-lg max-w-xl mx-auto">
          Easily organize, add, and view your daily tasks to stay productive and efficient.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-6 mt-8">
        <Link to="/AddTask">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition">
            <FaPlus className="inline mr-2" /> Add Task
          </button>
        </Link>
        <Link to="/ViewTasks">
          <button className="px-6 py-3 bg-green-500 text-white rounded-full font-medium hover:bg-green-600 transition">
            <FaList className="inline mr-2" /> View Tasks
          </button>
        </Link>
      </div>
</>
  )
}

export default Home
