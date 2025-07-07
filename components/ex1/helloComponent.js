'use client';

import CountComponent from "./countComonent";
import DisplayProfile from "./displayProfile";
import ExListComponent from "./exListComponent";


export default function HelloComponent() {

  const students = [
    { name: 'AAA', age: 16 },
    { name: 'BBB', age: 17 },
    { name: 'CCC', age: 18 }
  ];

  const sayHello = () => {
    console.log('Hello, World!');
  }

  return (
    <div>
      <h1>Hello, World!</h1>

      <ExListComponent></ExListComponent>
      
      <CountComponent></CountComponent>
      

      <DisplayProfile name={'AAA'} age={16} sayHello={sayHello} students={students}></DisplayProfile>

    </div>
  );
}

