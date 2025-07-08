import { cookies } from "next/headers";
import { createClient } from "../../../../utils/supabase/server";


export const metadata = {
  // layout.js의 template 속성 때문에 '홈 | Next.js 튜토리얼'이 됩니다.
  title: 'ex2 리스트 페이지 ',
  description: '메타 태그 테스트 입니다. ',
};



export default async function Ex2ListPage({searchParams}) {

  const query = await searchParams

  console.log('Ex2ListPage: ', query);

  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  const result = await supabase.from('tbl_todo')
    .select()
    .order('todo_id', { ascending: false })
    .range(0, 9);

  console.log('result: ', result);

  if(result.error){
    throw new Error(result.error.message);
  }

  return (
    <div className="p-2 border-2 w-full rounded-2xl">
      <h1>Ex2 List Page</h1>
    </div>
  );

}