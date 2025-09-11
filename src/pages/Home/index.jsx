import style from "./Home.module.scss";
import PrimaryButton from "../../components/Button/PrimaryButton";
import SecondaryButton from "../../components/Button/SeconaryButton";

function Home() {
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.home}>Home page</div>
        <PrimaryButton
          border
          href="https://www.youtube.com/watch?v=W-97uRO42A8&list=RDW-97uRO42A8&start_radio=1"
        >
          Primary Button
        </PrimaryButton>
        <SecondaryButton disabled size="medium">
          Secondary Button
        </SecondaryButton>
      </div>
    </>
  );
}

export default Home;
