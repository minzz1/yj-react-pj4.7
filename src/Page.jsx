import CarouselMain from "./components/CarouselMain";
import Layout from "./components/Layout";
import MultiCarousel from "./components/MultiCarousel";
import TitleTwoRow from "./components/TitleTwoRow";
import AcademyAsset from "./components/asset/AcademyAsset";
import ApplyAsset from "./components/asset/ApplyAsset";
import ExperAsset from "./components/asset/ExperAsset";
import InstagramAsset from "./components/asset/InstagramAsset";
import KakaoAsset from "./components/asset/KakaoAsset";
import SiminAsset from "./components/asset/SiminAsset";

export default function Page() {
  return (
    <Layout>
      {/* 메인 캐러셀 이미지 */}
      <div className="w-full h-screen-minus-header overflow-hidden ">
        <CarouselMain />
      </div>
      {/* 1번째 그리드 3/5 그리드 2/5 구분 */}
      <div className="py-16 w-full">
        <div className="w-full px-4">
          <div className="grid grid-cols-5 gap-16">
            {/* 공지사항 */}
            <div className="col-span-3 space-y-8">
              {/* 타이틀 */}
              <TitleTwoRow main="공지사항" sub="notice" />
              {/* 게시판 */}
              <div className="w-full flex flex-col">
                <div className="border-2 border-neutral-900 w-full flex items-center">
                  <div className="text-center w-20 aspect-square flex justify-center items-center bg-neutral-900 text-white ">
                    2023
                    <br />
                    05-15
                  </div>
                  <div className="px-4">대구 오페라하우스 개관 20주년 이벤트</div>
                </div>
              </div>
              <ul>
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <li key={i} className="w-full flex justify-between px-1 py-3 cursor-pointer">
                      <span>대구오페라하우스는 문화비 소득공제</span>
                      <span>2023-06-08</span>
                    </li>
                  ))}
              </ul>
            </div>
            {/* 아카데미 */}
            <div className="col-span-2 flex flex-col space-y-8">
              <TitleTwoRow main="아카데미" sub="doh acadmy" />
              <p className="w-1/2">전문적이고 차별화 된 대구오페라하우스의 아카데미 교육프로그램을 만나보세요</p>
              {/* 아이콘 4개 아이콘 */}
              <div className="grid grid-cols-2 gap-6">
                {/* 1번째 아이콘 */}
                <div className="flex items-center space-x-4">
                  {/* 아이콘 */}
                  <div>
                    <AcademyAsset />
                  </div>
                  {/* 글 내용 */}
                  <div>
                    <p>아카데미 안내</p>
                    <p>Academy</p>
                  </div>
                </div>
                {/* 2번째 아이콘 */}
                <div className="flex items-center space-x-4">
                  {/* 아이콘 */}
                  <div>
                    <ExperAsset />
                  </div>
                  {/* 글 내용 */}
                  <div>
                    <p>아카데미 안내</p>
                    <p>Academy</p>
                  </div>
                </div>
                {/* 3번째 아이콘 */}
                <div className="flex items-center space-x-4">
                  {/* 아이콘 */}
                  <div>
                    <SiminAsset />
                  </div>
                  {/* 글 내용 */}
                  <div>
                    <p>아카데미 안내</p>
                    <p>Academy</p>
                  </div>
                </div>
                {/* 4번째 아이콘 */}
                <div className="flex items-center space-x-4">
                  {/* 아이콘 */}
                  <div>
                    <ApplyAsset />
                  </div>
                  {/* 글 내용 */}
                  <div>
                    <p>아카데미 안내</p>
                    <p>Academy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2번재 그리드 3/5 그리드 2/5 구분 */}
      <div className="py-16 w-full">
        <div className="w-full px-4">
          <div className="grid grid-cols-5 gap-16">
            {/* 소셜네트워크 */}
            <div className=" col-span-3 flex flex-col space-y-8">
              <TitleTwoRow main="소셜네트워크" sub="doh sns" />
              <div className="w-full grid grid-cols-2 gap-4">
                {/* 1번째 자식 */}
                <div className="w-full cursor-pointer aspect-video relative">
                  <img
                    src="https://post-phinf.pstatic.net/MjAyMzAyMDlfMjcw/MDAxNjc1OTIxNjM5MzQx.o36mzVXTHQXWnHSNbitK66EOyNL4SeiLFO5h59zhuOsg.DSEm4XirAgL1zwybNsn-d8cfX7KveTI1rz135XFSVfAg.JPEG/JK06.jpg?type=w1200"
                    alt="social img1"
                  />
                  <p className="font-semibold py-3 px-1">귀염둥이 JK</p>
                  {/*  호버했을 때 음영처리 빈박스 */}
                  <div className="absolute top-0 w-full h-full bg-[hsl(0,0%, 98%, 0.2)] opacity-0 transition-all duration-300 ease-in-out hover:opacity-100 "></div>
                  {/* 오른쪽 위 아이콘 */}
                  <div className="absolute top-0 right-0 w-12 h-12 bg-white/70 flex justify-center items-center">
                    <KakaoAsset />
                  </div>
                </div>
                {/* 2번째 자식 */}
                <div className="w-full cursor-pointer aspect-video relative">
                  <img
                    src="https://post-phinf.pstatic.net/MjAyMjExMTRfMTQx/MDAxNjY4NDAzOTYwOTk4.Zeap8vi7K18v4k9U9dbI4_cwHeTSlYqaSazrrtfczecg.YxhiAbOVQ3eA4qJkbKQAJs4hZu3mXZaAKJCnxoy4e3sg.JPEG/%ED%95%A0%EB%AA%85%EC%88%98%EC%B0%902.jpg?type=w1200"
                    alt="social img2"
                  />
                  <p className="font-semibold py-3 px-1">얼굴천재 Jin</p>
                  {/*  호버했을 때 음영처리 빈박스 */}
                  <div className="absolute top-0 w-full h-full bg-[hsl(0,0%, 98%, 0.2)] opacity-0 transition-all duration-300 ease-in-out hover:opacity-100 "></div>
                  {/* 오른쪽 위 아이콘 */}
                  <div className="absolute top-0 right-0 w-12 h-12 bg-white/70 flex justify-center items-center">
                    <InstagramAsset />
                  </div>
                </div>
              </div>
            </div>
            {/* 알림존 */}
            <div className="col-span-2 flex flex-col">
              <TitleTwoRow main="알림존" sub="doh banner" />
              <MultiCarousel>
                {/* 첫번째 이미지 */}
                <div className="w-52 h-60 bg-gray-400">
                  <img
                    className="w-full h-full object-cover object-center"
                    src="https://post-phinf.pstatic.net/MjAyMjExMDdfMjE0/MDAxNjY3ODIxODAyNDE5.eXjqvzlhKEXmkNv0udThP1w3Ec3UPINqUR4de8s6y2wg.GZFG2q3Z9U5LngiNPSsRw56lc80zhqZM1xB5_F5THNQg.JPEG/k-sports_jk.jpg?type=w1200"
                    alt="alimzone1"
                  />
                </div>
                {/* 두번째 이미지 */}
                <div className="w-52 h-60 bg-gray-400">
                  <img
                    className="w-full h-full object-cover object-center"
                    src="https://post-phinf.pstatic.net/MjAyMjExMDdfMjY1/MDAxNjY3ODIxODAyNDI4.di5HCGZlJMOUNhXrelKh9Jc0PF62RIoPNhSc2nvCSWkg.O5uCsqGwJQJXmF3fujkRRQ6LWNGhaUWFwid47RkjziQg.JPEG/k-sports_RM.jpg?type=w1200"
                    alt="alimzone1"
                  />
                </div>
                {/* 세번째 이미지 */}
                <div className="w-52 h-60 bg-gray-400">
                  <img
                    className="w-full h-full object-cover object-center"
                    src="https://post-phinf.pstatic.net/MjAyMjExMDdfMzkg/MDAxNjY3ODIxODAyNDMz.6eKzrk0AWEwMYiP2rrlpAdhuFb22xoy8x2nlg3lNqmUg.5b6uxRO6XKGuJ9zf1GOvGZwoQnRrRn8ia4Fmtt_xa58g.JPEG/k-sports_V.jpg?type=w1200"
                    alt="alimzone1"
                  />
                </div>
                {/* 네번째 이미지 */}
                <div className="w-52 h-60 bg-gray-400">
                  <img
                    className="w-full h-full object-cover object-center"
                    src="https://post-phinf.pstatic.net/MjAyMjExMDhfMjk4/MDAxNjY3OTAzNzE3Mjk2._Cqf0dsSi7fjjQPruoWkyWaN6vMmhqFKDusKAbjGBukg.YYZPqkcGWB-mRdomqzwwbSOEUCvwDygZcGgKl0JV_Jwg.JPEG/k-sports_hobi.jpg?type=w1200"
                    alt="alimzone1"
                  />
                </div>
              </MultiCarousel>
            </div>
          </div>
        </div>
      </div>

      {/* 유관기관 */}
      <div className="w-full px-4">
        <div className="grid grid-cols-5 gap-16 items-end">
          {/* 타이틀 */}
          <div>
            <TitleTwoRow main="유관기관" sub="family sites" />
          </div>
          {/* 캐러셀 이미지 */}
          <div className="col-span-4">
            <MultiCarousel itemNum={5}>
              {Array(9)
                .fill("")
                .map((_, i) => (
                  <div key={i}>
                    <img src={`https://www.daeguoperahouse.org/images/main/img_ban0${i + 1}_on.png`} alt="image familt sites" />
                  </div>
                ))}
            </MultiCarousel>
          </div>
        </div>
      </div>
    </Layout>
  );
}
