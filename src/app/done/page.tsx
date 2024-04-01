
export default function Done() {
  return <main className=" bg-slate-800 text-slate-200 min-h-[100vh]">
    <section className="bg-gradient-to-b from-red-800 to-red-600 w-full flex flex-col justify-end shadow-xl min-h-fit h-[50vh]" >
      <h1 className="text-5xl font-black  p-2 text-transparent bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500 bg-clip-text">What now?</h1>
    </section>
    <section className="text-right text-md p-2">
      <div className="text-right text-yellow-200 text-xl pb-2">
        Nothing, pretty much.
      </div>
      <p className="py-2">
        Turns out, personal data about random folks in other countries isn&apos;t very geopolitically useful.
      </p>
      <p className="py-2">Statistically, you should be much more worried about that information in the hands of your local police department.</p>
      <p className="py-2 text-slate-500">Also, this site is not real :)</p>
    </section>
  </main>;


}