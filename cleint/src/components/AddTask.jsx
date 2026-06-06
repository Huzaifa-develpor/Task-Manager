import React from 'react'

import Header from './Header'

import {useState} from 'react'

import axios from 'axios'



const AddTask = () => {

  let [todoData,setTodoData] = useState({

    title:"",

    description:""

  })

let token=localStorage.getItem("token")

  let getValue=(e)=>{

    setTodoData(prev=>({

      ...prev,  

      [e.target.name]:e.target.value

    }))

  }

   let saveData =(e)=>{

      e.preventDefault();

      axios.post("https://task-manager-production-3ca0.up.railway.app/web/todos/add",todoData,

        {

          headers:{

            Authorization:`Bearer${token}`

          }

        }

      )

      .then(res=>{

       

        alert("Task Added Successfully")

        setTodoData({

          title:"",

          description:""

        })

      }).catch(err=>{

       

      }

    )}

   

  return (

    <>

    <Header/>

     <div className="flex justify-center px-4 mt-8">

        <div className="w-full max-w-md bg-white rounded-2xl p-8

        shadow-[0_10px_30px_rgba(0,0,0,0.08)]">



          <h2 className="text-xl font-semibold text-gray-700 mb-6 text-center">

            Add Task

          </h2>

          <form onSubmit={saveData}>

          <div className="mb-4">

            <label className="block text-gray-600 mb-2 text-sm font-semibold">

              Task Title

            </label>

            <input

              type="text"

              placeholder="Enter task title"

              className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 "

              name="title"

              value={todoData.title}

              onChange={getValue}

            />

          </div>



          <div className="mb-4">

            <label className="block text-gray-600 mb-2 text-sm font-semibold">

              Description

            </label>

            <textarea

              placeholder="Enter description"

              rows="3"

              className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"

              name="description"

              value={todoData.description}

              onChange={getValue}

            />

          </div>



       

          <button

            className="w-full bg-blue-500 hover:bg-blue-600

            text-white font-medium py-3 rounded-lg

            transition duration-300 shadow-md hover:shadow-lg"

          >

            Add Task

          </button>

      </form>

        </div>

      </div>



   

    </>

  )

}



export default AddTask