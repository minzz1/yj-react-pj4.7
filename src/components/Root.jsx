import { Outlet } from "react-router-dom";

 
export default function Root() {
return ( 
<>
    <Outlet/>
    {/* 중첩폴더 만들꺼에오 .. 메뉴바 밑에 자식들을 달아 줄꺼에요 ..  */}
</>
)
}