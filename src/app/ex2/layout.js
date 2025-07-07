

export default function Ex2Layout( {children} ) {

  return (
    <div className="p-2 border-2 w-full rounded-2xl">
      <h1>Ex2 Layout</h1>
      <div className="flex flex-col gap-2">
        {children}
      </div>
    </div>
  );
}