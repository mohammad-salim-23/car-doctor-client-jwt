import { useEffect, useState } from "react";

const useService = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://car-doctor-server-alpha-bice.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return services;
};

export default useService;
