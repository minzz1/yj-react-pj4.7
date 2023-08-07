import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export default function CarouselMain() {
    return ( 
        <Carousel 
        autoPlay={true} 
        showThumbs={false}
        showIndicators={false}
        infiniteLoop={true}
        showStatus={false}
        interval={5000}
        transitionTime={1500}
        stopOnHover={false}
        animationHandler="fade"
        >
            {/* 1번째 캐러셀 */}
            <div className="w-full">
                <img src="https://phinf.wevpstatic.net/MjAyMjA3MjZfMTI5/MDAxNjU4ODA5NDQ3MjY2.FcfFqzQSkqrp9hHqK7gDY6lV4iyyJ4Nn5G2eCn8bl3sg.NbiJz2ZlkIJM6o9PbldIsvbkQbp5xiqzzoKLTl73CFAg.JPEG/3cb4b2e9-d978-4161-9b55-7c90c633b93f.jpeg?type=e1920" alt="main carousel1" />
            </div>
            {/* 2번째 캐러셀 */}
            <div className="w-full">
                <img src="https://phinf.wevpstatic.net/MjAyMjA3MjZfMjc2/MDAxNjU4ODE5OTc5Nzg3.N0S6AlhkBFd4ykRSi2q25TZSZIQAB4uW3NOMFdTJvG0g.OK4qhQrnAFwd5JQMJH_4EKHeQsqdBUBBYdw5vMfSOFcg.JPEG/3a27e006-d96c-44ed-b86c-c9cbb279ebb7.jpeg?type=e1920" alt="main carousel2" />
            </div>
        </Carousel>
    )
}