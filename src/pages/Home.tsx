import React from 'react'
import { useEffect } from 'react'
import Api from '../services/api'

function Home() {

  useEffect(() => {
    Api.get("/test")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);

  return <h1>Home Page</h1>;
}

export default Home