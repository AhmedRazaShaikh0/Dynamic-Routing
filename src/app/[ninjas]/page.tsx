import Image from 'next/image';
import React from 'react'


export const getStaticProps = async (ninjas: string) => {

  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${ninjas}`);
  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
}

export default async function page({ params }: { params: { ninjas: string } }) {
  const data = await getStaticProps(params.ninjas);
  return (
    <>
      <div>{data.id}</div>
      <div>{data.title}</div>
      {/* <div>{data.username}</div> */}
      <div><img src={data.url} alt='' width={300} height={200} /></div>
      {/* <div>{data.address.street}</div>
      <div>{data.id}</div> */}
    </>
  )
}
