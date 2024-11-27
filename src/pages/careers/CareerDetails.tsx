import { LoaderFunctionArgs, useLoaderData, useParams } from 'react-router-dom'

interface Career {
  id: number;
  title: string;
  salary: number;
  location: string;
}

export default function CareerDetails() {
  const career = useLoaderData() as Career;

  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sed sunt ipsam quam assumenda quasi ipsa facilis laborum rerum voluptatem!</p>
      </div>
    </div>
  )
}

// data loader
export const careerDetailsLoader = async ({ params }: LoaderFunctionArgs): Promise<Career> => {
  // const { id } = params;

  // const res = await fetch('http://localhost:4000/careers/' + id);
  const res =  await fetch('https://polling-application-backend-8e27cfd2d48e.herokuapp.com/api/polls/all')
  if (!res.ok) {
    throw Error('Could not find that career.')
  }

  return res.json()
}