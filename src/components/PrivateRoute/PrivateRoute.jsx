import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../Firebase/firebase.config";

const PrivateRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center">
          {/* Spinner */}
          <div className="w-16 h-16 border-4 border-gray-500 border-t-transparent border-solid rounded-full animate-spin"></div>
          {/* Loading Text */}
          <p className="text-lg text-gray-600 mt-4">Loading...</p>
        </div>
      </div>
    );
  }
  

  return user ? children : <Navigate to="/auth" />;
};

export default PrivateRoute;