import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="page-not-found">
      <div className="wrap">
        <p className='text-02 text-dark-gray back-btn' onClick={() => navigate(-1)}>Go Back</p>
        <h1 className="title-01 text-dark-gray">Page Not Found!</h1>
      </div>
    </div>
  )
}
