

export default function CountOddEvenComponent({ count }) {
 
  return (
    <div className="p-2 border-2 w-full rounded-2xl">
      <div>Count Odd/Even Component</div>
      <p>Current Count: {count}</p>
      <p>{  count % 2 === 0 ? 'The count is even.' : 'The count is odd.'}</p>
    </div>
  );
}