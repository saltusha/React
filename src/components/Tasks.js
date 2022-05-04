// const tasks = [
//   {
//     id: 1,
//     text: "Doctors Appointment",
//     day: "Feb 5th at 2:30pm",
//     reminder: true,
//   },
//   {
//     id: 2,
//     text: "Meeting at school",
//     day: "Feb 6th at 1:30pm",
//     reminder: true,
//   },
//   {
//     id: 3,
//     text: "Food Shopping",
//     day: "Feb 5th at 2:30pm",
//     reminder: false,
//   },
// ];
import Task from "./Task";

function Tasks({ tasks, onDelete }) {
  return (
    //LIKE THIS :
    // tasks.push() => setTasks([...tasks,{}])
    <>
      {tasks.map((item) => (
        <Task key={item.id} task={item} onDelete={onDelete} />
      ))}
    </>
  );
}

export default Tasks;
