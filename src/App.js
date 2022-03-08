import React from 'react';
import './style.css';

export default function App() {
  return (
    <>
      <GetProps />
    </>
  );
}

function GetProps(props) {
  console.log(props);
  return { props };
}
