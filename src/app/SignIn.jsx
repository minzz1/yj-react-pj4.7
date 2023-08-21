import Layout from "../components/Layout";
import LayoutContents from "../components/LayoutContents";
import { BsPerson } from "react-icons/bs";
import { AiOutlineEnter } from "react-icons/ai";
import ButtonSlide from "../components/ButtonSlide";
import KakaoAsset from "../components/asset/KakaoAsset";
import FacebookAsset from "../components/asset/FacebookAsset";
import InstagramAsset from "../components/asset/InstagramAsset";
import NaverAsset from "../components/asset/NaverAsset";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
// 백엔드로 보내는 것
import { userSignIn } from "../api";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const navigate = useNavigate();
  const { data, mutate } = useMutation(userSignIn);

  if (data?.ok === "false") {
    console.log("로그인 에러");
  }
  if (data?.ok === "true") {
    navigate("/");
  }

  const onSubmit = (data) => {
    console.log(data);
    mutate(data);
  };
  return (
    <Layout>
      <LayoutContents>
        <div className="w-full flex justify-center">
          <div className="w-[400px]">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1 className="text-3xl py-4 border-b-2 border-neutral-700">회원정보입력</h1>
              {/* 아이디 */}
              <div className="relative w-full border-b border-neutral-300">
                <input
                  {...register("username", {
                    required: "아이디는 필수 입력항목입니다. ",
                    minLength: {
                      value: 6,
                      message: "아이디는 6자 이상 작성해 주셔야 합니다.",
                    },
                  })}
                  type="text"
                  placeholder="회원아이디"
                  className="w-full py-8 border-0 focus:outline-none"
                />
                <div className="absolute right-0 top-[50%]">
                  <BsPerson />
                </div>
                {/* 아이디 에러처리 */}
                <div className="text-red-500 text-sm">{errors?.username?.message}</div>
              </div>
              {/* 패스워드 */}
              <div className="relative w-full border-b border-neutral-300">
                <input
                  {...register("password", {
                    required: "패스워드는 필수 입력항목입니다. ",
                  })}
                  type="password"
                  placeholder="비밀번호"
                  className="w-full py-8 border-0 focus:outline-none"
                />
                <div className="absolute right-0 top-[50%] -translate-y-[50%]">
                  <AiOutlineEnter />
                </div>
              </div>
              {/* 패스워드 에러처리 */}
              <div className="text-red-500 text-sm">{errors?.password?.message}</div>
              {/* 버튼 */}
              <div className="w-full py-8">
                <ButtonSlide text="login" pHeight="py-4" />
              </div>
            </form>
            {/* 구분선 */}
            <div className="relative w-full justify-center flex h-[1px] bg-neutral-300">
              <div className="absolute bg-white -top-3 px-2">Or Login With</div>
            </div>
            {/* 회원가입, 아이디찾기, 비밀번호찾기 */}
            <div className="flex justify-center w-full space-x-4 my-8">
              <Link
                to={`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URL}`}
              >
                <div>
                  <KakaoAsset />
                </div>
              </Link>
              <div>
                <FacebookAsset />
              </div>
              <div>
                <InstagramAsset />
              </div>
              <div>
                <NaverAsset />
              </div>
            </div>
          </div>
        </div>
      </LayoutContents>
    </Layout>
  );
}
