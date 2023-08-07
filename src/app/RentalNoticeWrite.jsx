import { Link, useNavigate } from "react-router-dom";
import ButtonSlide from "../components/ButtonSlide";
import Layout from "../components/Layout";
import LayoutContents from "../components/LayoutContents";
import SubTitle from "../components/SubTitle";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { rentalNoticeWrite } from "../api";
const table_class_td = "table_td border-1-0 py-6";
const table_class_input = "text-sm border border-neutral-300 focus:border-neutral-400 focus:ring-neutral-400 placeholder:text-neutral-300";

export default function RentalNoticeWrite() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { mutate, data } = useMutation(rentalNoticeWrite);
  const onSubmit = (data) => {
    mutate(data);
  };
  console.log(data);
  if (data?.ok === "true") {
    navigate("/rental");
  }

  return (
    <Layout>
      <SubTitle firstTitle="관리자모드" secondTitle="공지사항 글쓰기" />
      <LayoutContents title="공지사항 글쓰기">
        <form onSubmit={handleSubmit(onSubmit)}>
          <table className="w-full table_top">
            <tbody>
              <tr>
                <td className={`${table_class_td}`}>
                  <span className="text-red-500">*</span>작성자
                </td>
                <td className={`${table_class_td}`}>
                  <input {...register("writer")} type="text" className={`${table_class_input}`} />
                </td>
              </tr>
              <tr>
                <td className={`${table_class_td}`}>
                  <span className="text-red-500">*</span>글 제목
                </td>
                <td className={`${table_class_td}`}>
                  <input {...register("title")} type="text" className={`${table_class_input}`} />
                </td>
              </tr>
              <tr>
                <td className={`${table_class_td}`}>
                  <span className="text-red-500">*</span>글작성
                </td>
                <td className={`${table_class_td}`}>
                  <textarea {...register("description")} rows={24} className={`${table_class_input} w-full`}></textarea>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="w-full flex justify-center border-t border-neutral-300 py-8 space-x-2">
            <ButtonSlide text="작성하기" />
            <Link to="/rental">
              <ButtonSlide text="목록으로" />
            </Link>
          </div>
        </form>
      </LayoutContents>
    </Layout>
  );
}
