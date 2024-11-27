import { Link, useLoaderData } from "react-router-dom"

interface Career {
  id: number;
  title: string;
  salary: number;
  location: string;
}
export default function Careers() {
  const careers = useLoaderData() as Career[];

  return (
    <div className="careers">
      {careers.map(career => (
        <Link to={career.id.toString()} key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  )
}

// data loader
export const careersLoader = async () => {
  const res = await fetch('https://polling-application-backend-8e27cfd2d48e.herokuapp.com/api/polls/all')
    // const res = await fetch('http://localhost:4000/careers')
    if (!res.ok) {
      throw Error('Could not fetch the list of careers')
    }
    return res.json()
  }