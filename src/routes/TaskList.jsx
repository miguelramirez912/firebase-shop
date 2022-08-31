import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import { addNewTask, deleteTask, getTasks, updateTask } from "../firebase/taskController";

const TaskList = () => {
    const [task, setTask] = useState({ title: "", description: ""});
    const [tasks, setTasks] = useState([]);
    const [btnMode, setBtnMode] = useState('add');

    const { user } = useContext(AppContext);

    const createNewTask = async () => {
        await addNewTask(task).catch(e => console.log(e));
        setTask({ title: "", description: ""});
        initializeTasks();
    }

    const initializeTasks = () => {
        getTasks()
            .then(t => setTasks([...t]))
            .catch(error => console.error(error));
    }

    // useEffect(() => {
    //     initializeTasks();
    // }, []);

    const editTask = id => {
        setBtnMode('update');
        const taskToEdit = tasks.find(task => task.id === id);
        setTask({...taskToEdit});
    }

    const updateExistingTask = async () => {
        await updateTask(task);
        setTask({ title: "", description: ""});
        initializeTasks();
        setBtnMode('add');
    }
    
    const removeTask = async id => {
        await deleteTask(id);
        initializeTasks();
    }

    const getAllTasks = async () => {
        await initializeTasks();
    }

    return (
        <div>
            <h1 className="text-sky-700 font-semibold text-lg">Lista de tareas</h1>
            <div className="flex flex-col gap-4">
                <input 
                    type="text" 
                    value={task.title} 
                    placeholder="Titulo"
                    className="border shadow outline-none focus:ring ring-sky-200 rounded px-2 py-1 w-full"
                    onChange={e => setTask({...task, title: e.target.value})} 
                />
                <textarea 
                    type="text" 
                    rows={3}
                    value={task.description} 
                    placeholder="Descripciòn"
                    className="border shadow outline-none focus:ring ring-sky-200 rounded px-2 py-1 w-full"
                    onChange={e => setTask({...task, description: e.target.value})} 
                />
                <button 
                    className="bg-sky-400 text-white rounded shadow py-1 hover:bg-sky-500 transition font-semibold disable:bg-sky-200" 
                    disabled={!user}
                    onClick={() => btnMode === 'add' ? createNewTask() : updateExistingTask()}
                >
                    {btnMode === 'add' ? 'Agregar' : 'Actualizar'}
                </button>
                <button className="bg-sky-400 text-white rounded shadow py-1 hover:bg-sky-500 transition font-semibold" onClick={getAllTasks}>Traer Datos</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {tasks.map(task => 
                <div key={task.id} className="rounded-lg border border-sky-300 p-4 flex flex-col gap-2">
                    <h1 className="font-semibold">{task.title}</h1>
                    <div className="border-t border-sky-300"></div>
                    <p>{task.description}</p>
                    <div className="flex justify-between">
                        <button className="bg-sky-400 text-white py-1 px-2 rounded" onClick={() => editTask(task.id)}>Editar</button>
                        <button className="bg-red-600 text-white py-1 px-2 rounded" onClick={() => {window.confirm('¿Seguro que quieres eliminar esta tarea?') && removeTask(task.id)}}>Eliminar</button>
                    </div>
                </div>)}
            </div>
            {!user && (
                <p className="text-red-500">Necesitas estar logeado para acceder a la base de datos</p>
            )}
        </div>
    )
}

export default TaskList;