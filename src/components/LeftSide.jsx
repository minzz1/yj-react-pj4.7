import { Link } from "react-router-dom"
import FacebookAsset from "./asset/FacebookAsset"
import InstagramAsset from "./asset/InstagramAsset"
import KakaoAsset from "./asset/KakaoAsset"
import NaverAsset from "./asset/NaverAsset"

 
export default function LeftSide() {
    const SNS_ITEMS = [
        {icon:<FacebookAsset/> , link: "https://facebook.com"},
        {icon:<NaverAsset/> , link: "https://naver.com"},
        {icon:<InstagramAsset/> , link: ""},
        {icon:<KakaoAsset/> , link: ""},
    ]

return ( <div className="flex flex-col w-full space-y-8 items-center">
    {SNS_ITEMS.map(({icon, link})=>(
        <Link to={link} key={link}>
            <div className="border border-neutral-300 rounded-full flex justify-center items-center group overflow-hidden">
                {icon}
            </div>
        </Link>
    ))}
</div>
)
}