
const Header = (props) =>{
  //console.log(props)

return(
  <h1>{props.course}</h1>
)}

const Part = (props) =>{
  return(
    <p>
    {props.name} {props.exercises}
  </p>
  )
}


const Content = (props) => {
  console.log(props.parts[0].e)
  return(
  <>
  <Part name={props.parts[0].name} excersises={props.parts[0].excersises} />
  <Part name={props.parts[1].name} excersises={props.parts[1].excersises} />
  <Part name={props.parts[2].name} excersises={props.parts[2].excersises} />
  </>
  )
}

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

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
   {
      name: 'Using props to pass data of React',
      exercises: 7
    },
    {
      name:'State of a component', 
      exercises: 14
    } 
  ]


  return (
    <div>
      <Header course={course} />
      <Content parts={parts}/>
      <Total parts={parts}/> 
    </div>
  )
}

export default App