import style from "./Home.module.scss";
import PrimaryButton from "../../components/Button/PrimaryButton";
import SecondaryButton from "../../components/Button/SecondaryButton";
import CommonButton from "../../components/Button/CommonButton";
import Debounce from "../Debounce";

console.log(import.meta.env.VITE_APP_API_BASE_URL);
console.log(import.meta.env);

function Home() {
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.home}>
          Home page
          <Debounce />
        </div>
        <PrimaryButton
          border
          href="https://www.youtube.com/watch?v=W-97uRO42A8&list=RDW-97uRO42A8&start_radio=1"
        >
          Primary Button
        </PrimaryButton>
        <SecondaryButton disabled size="medium">
          Secondary Button
        </SecondaryButton>
        <CommonButton border bgColor="#8fecb3ff" textColor="#fff" size="large">
          Common Button
        </CommonButton>
      </div>
    </>
  );
}

export default Home;
