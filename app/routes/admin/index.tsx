import { Link } from 'remix';
export default function AdminIndex() {
  return (
    <div className='admin-index'>
      <h2>Welcome Back Dom</h2>
      <Link to='/admin/new'>
        <button>New Post</button>
      </Link>
    </div>
  );
}
