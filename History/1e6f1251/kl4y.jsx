import { useContext, useState } from "react";
import { MyContextProvider } from "../Components/MyContext";
import axios from "axios";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import deleteIcon from './../assets/delete.png'

const Dashboard = () => {
    const {user}=useContext(MyContextProvider)
    const userEmail = user.email
    const [editAbleObj, setEditableObj] = useState({})
    const [editId, setEditId]= useState(null)
    const handleSubmit =(e)=>{
    e.preventDefault()
    const form = e.target;
    
    const title = form.title.value;
    const desc = form.description.value;
    const date = form.date.value;
    
    const tasks ={
        title, desc, date, userEmail
    }
   
    form.reset()

    axios.post("https://server-todo-2yjfbim91-abdu-baten-chys-projects.vercel.app/task", tasks).then((res) => {
    console.log(res.data);
    if (res.data.insertedId) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "work info added  successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      refetch()
    }
  });
}


const { data:tasks, refetch } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const res = await axios.get(`https://server-todo-2yjfbim91-abdu-baten-chys-projects.vercel.app/task/${userEmail}`)
      return res.data;
    },
  });


  const handleEdit=(id)=>{
      console.log(id);
      setEditId(id)
      const targetedObj = tasks.find(task =>task._id ==id)
      setEditableObj(targetedObj)

  }

  
 
  const handleDelete = (_id)=>{
    console.log(_id);
    axios.delete(`https://server-todo-2yjfbim91-abdu-baten-chys-projects.vercel.app/task/${_id}`)
    .then((res) => {
      console.log(res.data);
      if (res.data.deletedCount) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "task deleted   successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        refetch()
      }
    });
  }
  
const handleUpdate =(e)=>{
  e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const desc = form.description.value;
    const date = form.date.value;
    
    const updatedTask ={
        title, desc, date
    }
    
    form.reset()
    setEditId(null)

    axios.patch(`http://localhost:5000/task/${editId}`, updatedTask)
    .then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "task updated   successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        refetch()
      }
      refetch()
    })
}


  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-10">
        {
          !editId? <>
          <form onSubmit={handleSubmit}>
          <fieldset className="bg-cyan-400 p-6 w-2/3 mx-auto">
            <legend className="bg-blue-400 px-6 py-1 mx-auto">Add Task</legend>
            <div className="flex flex-col justify-center items-center">
              <input className="block w-3/4 mb-4" type="text" name="title" placeholder="Title here" defaultValue={'Title here'} />
              <textarea
                className="w-3/4"
                name="description"
                id=""
                cols="30"
                rows="3"
                placeholder="describe here"
                defaultValue={'Title here'}
              ></textarea>
              <div className="flex gap-6 mt-6">
              
                <label className="text-lg text-white ">Choose Date:</label>
                <input className="block" type="date" name="date" defaultValue={''}/>
              </div>
            </div>
            <button type="submit" className="bg-red-400 px-6 py-2 block mt-6 mx-auto">Add</button>
          </fieldset>
        </form>
          </> : <>
          <form onSubmit={handleUpdate}>
          <fieldset className="bg-yellow-500 p-6 w-2/3 mx-auto">
            <legend className="bg-blue-400 px-6 py-1 mx-auto">Add Task</legend>
            <div className="flex flex-col justify-center items-center">
              <input className="block w-3/4 mb-4" type="text" name="title" placeholder="Title here" defaultValue={editAbleObj.title} />
              <textarea
                className="w-3/4"
                name="description"
                id=""
                cols="30"
                rows="3"
                
                defaultValue={editAbleObj.desc}
                placeholder="describe here"
              ></textarea>
              <div className="flex gap-6 mt-6">
                <label className="text-lg text-white ">Choose Date:</label>
                <input className="block" type="date" name="date" defaultValue={editAbleObj.date} />
              </div>
            </div>
            <button type="submit" className="bg-red-400 px-6 py-2 block mt-6 mx-auto">Update</button>
          </fieldset>
        </form>
          </>
        }

        {/* to do list item  */}
        <div className="grid grid-cols-3 gap-6">
            <div>
                <div className="bg-blue-400 px-4 py-2 mt-16 mb-8">
                    <h3 className="text-white font-medium ">Todo`s List</h3>
                </div>
                {tasks?.map(task=>(
                <div key={task._id} className="mb-5 bg-purple-400 px-4 py-2">
                <div className="flex justify-between items-center">
                  <h3 className="text-white text-xl p font-medium my-4" >{task?.title}</h3>
                  <div className="flex">
                  <button onClick={()=>handleEdit(task._id)}><img className="w-8 h-8" src="https://i.ibb.co/GkHfMr6/8666681-edit-icon.png" alt="" /></button>
                  <button onClick={()=>handleDelete(task._id)}><img className="w-8 h-8" src={deleteIcon} alt="" /></button>
                  </div>
                </div>
                <p className="text-white font-medium my-4">{task.desc}</p>
                <p className="text-white font-medium my-4">Time: {task.date}</p>
                </div>
                ))}
            </div>
           
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
