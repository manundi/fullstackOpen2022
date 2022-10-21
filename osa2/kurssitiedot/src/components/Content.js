import Part from "./Part";

const Content = ({part}) => {

    return(
    <Part name={part.name} excersises={part.excersises} />
    )
  }

  export default Content