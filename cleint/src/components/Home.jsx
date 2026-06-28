import { Link } from 'react-router-dom'
import { FaPlus, FaList } from 'react-icons/fa'
import Header from './Header'

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />

      {/* Main Container */}
      <div className="flex-1 max-w-4xl w-full mx-auto px-4 py-16 flex flex-col justify-center items-center">
        
        {/* Hero Section */}
        <div className="text-center max-w-2xl mb-12">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 mb-4 tracking-wide uppercase">
             Streamline Your Workflow
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight mb-4">
            Welcome to <span className="text-indigo-600">Taskify</span>
          </h1>
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
            Easily organize, add, and view your daily tasks to stay productive, focused, and efficient every single day.
          </p>
        </div>

        {/* Action Cards / Navigation Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
          
          {/* Add Task Card */}
          <Link 
            to="/AddTask"
            className="group relative flex flex-col bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all duration-200"
          >
            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-200">
              <FaPlus className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 tracking-tight mb-1 group-hover:text-indigo-600 transition-colors">
              Add New Task
            </h3>
            <p className="text-sm text-slate-400">
              Create a new to-do item with titles, tags, and detailed descriptions.
            </p>
          </Link>

          {/* View Tasks Card */}
          <Link 
            to="/ViewTasks"
            className="group relative flex flex-col bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-emerald-100 transition-all duration-200"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-200">
              <FaList className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 tracking-tight mb-1 group-hover:text-emerald-600 transition-colors">
              View All Tasks
            </h3>
            <p className="text-sm text-slate-400">
              Monitor, track, and manage your existing list of tasks efficiently.
            </p>
          </Link>

        </div>

      </div>
    </div>
  )
}

export default Home