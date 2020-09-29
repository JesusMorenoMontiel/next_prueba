import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios'

const Home = ({ employees, error }) => {
  if (error) {
    return <div>An error occured: {error.message}</div>
  }
  return (
    <ul>
      {employees.map(employee => <li id={employee.id} > {employee.employee_name}</li>)}
    </ul>
  )
}

Home.getInitialProps = async (ctx) => {
  try {
    const res = await axios.get('http://dummy.restapiexample.com/api/v1/employees')
    const employees= res.data
    return { employees}
  } catch (error) {
    return { error }  
  }
}

export default Home;
