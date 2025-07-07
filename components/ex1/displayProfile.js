'use client';

export default function DisplayProfile({name, age, sayHello, students}) {


  return (
    <div className="p-2 border-2 w-full rounded-2xl" onClick={sayHello}>
      <h1>Profile Information</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>

      <ul>
        {students && students.map((student, index) => (
          <li key={index}>
            {student.name} - {student.age} years old
          </li>
        ))}
      </ul>

    </div>
  );
}