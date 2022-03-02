import { useState} from "react";

const useTasks = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const loadingHandler= () => {
    setIsLoading(true);
  };
  const errorHandler= () => {
    setError(null);
  };
  
  
  return {
    value: isLoading,
    error,
    loadingHandler,
    errorHandler,
    isLoading
    
  };
};
export default useTasks;
