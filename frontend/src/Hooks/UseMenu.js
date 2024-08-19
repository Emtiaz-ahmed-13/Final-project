import { useEffect, useState } from "react";

const UseMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("../../public/menu.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMenu(data);
        setLoading(false);
      })
     
  }, []);
  return [menu, loading];
};

export default UseMenu;
