import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className="flex justify-center items-center h-screen" >
      {/* <h2>Hello {name}</h2> */}
      <div className='mr-5 border-2 border-gray-900 px-3 py-2'><Link to='/blog-list'><button>Recent Blog Posts</button></Link></div>
      <div className='mr-5 border-2 border-gray-900 px-3 py-2'><Link to='/album-list'><button>Visit Album</button></Link></div>
    </div>
  );
}

export default Home;
