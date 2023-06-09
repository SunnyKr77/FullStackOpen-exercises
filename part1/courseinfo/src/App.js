const Header = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Part = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        {props.part1} {props.exercise1}
      </p>
      <p>
        {props.part2} {props.exercise2}
      </p>
      <p>
        {props.part3} {props.exercise3}
      </p>
    </div>
  )
}

const Content = (props) => {
  console.log(props);
  return (
    <>
      <Part part1={props.parts.parts[0].name} exercise1={props.parts.parts[0].exercises} />
      <Part part2={props.parts.parts[1].name} exercise2={props.parts.parts[1].exercises} />
      <Part part3={props.parts.parts[2].name} exercise3={props.parts.parts[2].exercises} />
    </>
  )
}

const Total = (props) => {
  console.log(props);
  return (
    <>
      <p>
        Number of exercises {' '} 
        {props.parts.parts[0].exercises+props.parts.parts[1].exercises+props.parts.parts[2].exercises}
      </p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ] 
}

  return (
    <div>
      <Header course={course} />
      <Content parts={course}  />
      <Total parts={course} />
    </div>
  )
}

export default App