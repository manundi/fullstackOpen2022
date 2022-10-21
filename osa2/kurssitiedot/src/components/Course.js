import Content from "./Content"
import Header from "./Header"

const Course = ({course}) =>{

      
      const Total = (props) => {
        //console.log(props.parts[0].exercises)

        const Sum = (...parts) =>{
          //console.log(parts[0])
          let sum = 0
          parts[0].forEach(element => {
            sum += element.exercises  
            //console.log(element.exercises  )
          });
          //console.log(sum)
          return sum
        }
        return(
          <p>Number of exercises {Sum(props.parts)}</p>
      
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