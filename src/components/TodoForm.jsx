const TodoForm = () =>{
    const todo = [
        {name:"task1",priority:"1"},
        {name:"task2",priority:"2"},
    ];


return (
    <div
      style={{

        display:"flex",
        justifyContent:"center",
        alignItem:"center",
        width:"100%",
        height:"100%",
        border:"2px solid red",
        flexDirection:"column",
        minHeight:"300",
        } }
    >

        <h3>MY TODO APP</h3>
        <form
          style={{
            display:"block",
            fontSize:"3rem",
            color:"pink",
          }}
        >
            <input
              type="text" name="n"

              style={{
                display:"block",
              }}
            ></input>
        </form>

        
        {todo.map((element,index) => (
            <div key={index}>
                {element.name} {element.priority}
            </div>
        ))}

       

    </div>
);
        }

export default TodoForm;