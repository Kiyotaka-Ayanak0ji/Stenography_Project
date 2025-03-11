import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className='flex flex-col gap-2 h-full w-full items-center justify-center'>
        <div className='w-full justify-center'>
            <Navbar/>
        </div>
        <div className='w-full text-center justify-center items-center'>
            <p className='text-slate-200 text-5xl pt-5'>
                Stenography Online
            </p>
        </div>
    </div>
  )
}

export default Home