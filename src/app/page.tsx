import Link from 'next/link';
import React from 'react'

const getStaticProps = async () => {

  const res = await fetch('https://jsonplaceholder.typicode.com/photos');
  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
}

export default async function page() {
  const ninjas = await getStaticProps();

  return (
    <div className='bg'>
      <h1>All Data</h1>
      {ninjas.map((data:any) => (
        <Link href={`/${data.id}`} key={data.id}>
          <h1 className='single'>{data.title}</h1>
        </Link>
      ))}
    </div>
  )
}
