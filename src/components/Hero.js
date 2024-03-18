import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <main className="mt-10 justify-center flex">
      <div className="max-w-80 text-center">
        <h1 className="text-3xl">Welcome to Visit Us</h1>
        <p className="text-sm py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veniam facere sed, aliquid similique excepturi.</p>
        <Link to='contact' className="rounded-lg hover:rounded-lg bg-blue-400 hover:bg-blue-600 text-slate-100 p-2">Know More</Link>
      </div>
    </main>
  )
}
