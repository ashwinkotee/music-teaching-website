import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BackArrow = () => {
  return (
    <div className="absolute top-4 left-4 z-50">
      <Link
        to="/"
        className="flex items-center text-indigo-600 hover:text-indigo-800 transition"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        <span className="font-medium">Back</span>
      </Link>
    </div>
  );
};

export default BackArrow;
