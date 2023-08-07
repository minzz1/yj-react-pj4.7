export default function SubTitleImage() {
  return (
    <div className="w-full h-60 overflow-hidden bg-[url('https://post-phinf.pstatic.net/MjAyMjEyMDFfOTcg/MDAxNjY5ODgyOTAyNTk0.J8Wu6gaGXVdRfhoqoe9L__aNV1ZRglRIlUNhfPTENtUg.1ts6kaX0NzJgUpFptCspJBQsA69A5FUwE0-zgOc7080g.JPEG/%ED%95%B4%EC%A0%81_%EC%B0%906.jpg?type=w1200')]">
      <div className="flex p-24 space-x-24 w-full h-full items-center bg-gray-900/30">
        {/* 이미지 */}
        <div>
          <img src="http://www.daeguoperahouse.org/images/contents/img_logo_white.png" alt="image title" />
        </div>
        {/* 내용 */}
        <div className="flex flex-col text-white space-y-4">
          <h1 className="text-2xl">(재) 대구오페라하우스는 언제나 관객 여러분의 편안하고 쾌적한 공연관람 환경을 위해 최선을 노력을 다하고 있습니다.</h1>
        </div>
      </div>
    </div>
  );
}
