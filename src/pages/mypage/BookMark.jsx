import { Button, LinkButton } from "@components/Button/Button";
import PageSide from "./PageSide";
import styles from "@pages/mypage/BookMark.module.css";
import useUserStore from "@zustand/userStore.mjs";
import { Link } from "react-router-dom";

function BookMark() {
  const { bookmarks } = useUserStore();
  return (
    <>
      <div className={styles.page}>
        <PageSide />
        <wrap className={styles.information}>
          <div className={styles.button}>
            <LinkButton
              to={"/mypage/information"}
              color="gray"
              size="large"
              filled="false"
            >
              회원 정보 수정
            </LinkButton>
            <LinkButton
              to={"/mypage/BookMark"}
              color="secondary"
              size="large"
              filled="false"
            >
              나도 해보기 목록
            </LinkButton>
          </div>
          <form className={styles.form}>
            <br />
            <div className={styles.list}>전체()</div>
            <hr />
            <ul>
              {bookmarks &&
                bookmarks.map((bookmark, index) => (
                  <li key={index}>
                    <span>북마크</span>
                    <Link to={`/bookmark/${bookmark.id}`}>{bookmark.name}</Link>
                  </li>
                ))}
            </ul>

            <fieldset className={styles.item}>
              <div className={styles.img}></div>
              <span>김치찌개</span>
              <wrap>
                <div className={styles.tag}>끓이기</div>
                <div className={styles.tag}>찌기</div>
              </wrap>
            </fieldset>

            <fieldset className={styles.item}>
              <div className={styles.img}></div>
              <span>김치찌개</span>
              <wrap>
                <div className={styles.tag}>끓이기</div>
                <div className={styles.tag}>찌기</div>
              </wrap>
            </fieldset>

            <fieldset className={styles.item}>
              <div className={styles.img}></div>
              <span>김치찌개</span>
              <wrap>
                <div className={styles.tag}>끓이기</div>
                <div className={styles.tag}>찌기</div>
              </wrap>
            </fieldset>

            <fieldset className={styles.item}>
              <div className={styles.img}></div>
              <span>김치찌개</span>
              <wrap>
                <div className={styles.tag}>끓이기</div>
                <div className={styles.tag}>찌기</div>
              </wrap>
            </fieldset>
            <fieldset className={styles.item}>
              <div className={styles.img}></div>
              <span>김치찌개</span>
              <wrap>
                <div className={styles.tag}>끓이기</div>
                <div className={styles.tag}>찌기</div>
              </wrap>
            </fieldset>
            <fieldset className={styles.item}>
              <div className={styles.img}></div>
              <span>김치찌개</span>
              <wrap>
                <div className={styles.tag}>끓이기</div>
                <div className={styles.tag}>찌기</div>
              </wrap>
            </fieldset>
          </form>
        </wrap>
      </div>
    </>
  );
}

export default BookMark;
