const Header = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.course}</h1>
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
      <Part part1={props.part1} exercise1={props.exercise1} />
      <Part part2={props.part2} exercise2={props.exercise2} />
      <Part part3={props.part3} exercise3={props.exercise3} />
    </>
  )
}

const Total = (props) => {
  console.log(props);
  return (
    <>
      <p>
        Number of exercises {' '} 
        {props.exercises} 
      </p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'

  const part1 = {
    name: 'Fundamentals of React',
    exercises : 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises : 7
  }
  
  const part3 = {
    name: 'State of a component',
    exercises : 14
  } 

  return (
    <div>
      <Header course={course} />
      <Content 
        part1={part1.name} exercise1={part1.exercises} 
        part2={part2.name} exercise2={part2.exercises}
        part3={part3.name} exercise3={part3.exercises}  
      />
      <Total exercises={part1.exercises+part2.exercises+part3.exercises} />
    </div>
  )
}

export default App