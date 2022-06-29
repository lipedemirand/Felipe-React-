 const Tasks = ({ tasks }) => {
     return (
         <>
              {tasks.map((tasks) => (
                  <h3 key={task.id}>{tasks.text}</h3>
              ))}
         </>
     );
 };

 export default Tasks;