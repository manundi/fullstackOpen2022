import Content from "./Content"
import Header from "./Header"

const Course = ({course}) =>{
      const Total = ({parts}) => {
        const sum = parts.reduce( (sum,part) => sum +part.exercises,0)
        return(
          <b>Number of exercises: {sum}</b>
        )
      }
      
    return (
        <div>
        <Header course={course.name} />
        {course.parts.map(part =>
             <Content key={part.id} part={part}/>
            )}
        <Total parts={course.parts}/> 
        </div>
    ) 
}


export default Course