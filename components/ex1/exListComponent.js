'use client';

import { useEffect, useState } from "react";

export default function ExListComponent() {

  const [page, setPage] = useState(0); //현재 페이지 번호 
  const [data, setData] = useState([]);

  useEffect(() => {

    const start = (page * 10);

    fetch(`https://jsonplaceholder.typicode.com/todos?_start=${start}&_limit=10`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(() => data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [page]); //페이지가 변경되면 fetch를 다시 실행

  //버튼 클릭시 페이지 번호를 증가시키는 함수
  //이벤트 핸들러 함수
  const handlePageChange = () => {

    setPage( () => page + 1 );
  }

  return (
    <>
      <div>List Data Example 
        <button 
        className="text-x1 border-2"
        onClick={ handlePageChange } >
          CLICK
          </button> 
      </div>
      <ul>
        {data && data.map((item) => (
          <li key={item.id}>
            {item.id} - {item.title} - {item.completed ? 'Completed' : 'Not Completed'}
          </li>
        ))}
      </ul>
    </>
  );
}