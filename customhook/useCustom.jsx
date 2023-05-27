import { useState, useEffect } from "react";

const useCustom = (URL) => {
  const [value, setValue] = useState([]);
  const [loading, setLoading] = useState(false);

  const makeApicall = async (apiUrl) => {
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setValue(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    makeApicall(URL);
  }, []);
  return [value, loading];
};
export default useCustom;
