import React from 'react'

const Home = () => {
  return (
    <>
      <div className="container max-w-2xl mx-auto">
        <h2 className=" font-bold text-4xl">Home</h2>
        <a href="/about" className=' bg-amber-600 p-4 inline-block'>About page</a>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro velit
          sequi non eligendi unde aliquid natus nobis quisquam cum. In fugiat
          voluptatibus ullam quas? Laborum vitae est esse molestias. Iusto
          commodi ex voluptates doloremque ipsa natus, eaque, veritatis vitae
         
        </p>
      </div>
      <section>
        <div className="container max-w-2xl mx-auto">
            <h2 className=' text-3xl font-bold'>Demo</h2>
        </div>
      </section>
    </>
  );
}

export default Home