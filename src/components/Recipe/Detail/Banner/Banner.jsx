import { Tag } from "@components/Button/Button";
import PropTypes from "prop-types";
import styles from "./Banner.module.css";

Banner.propTypes = {
  name: PropTypes.string.isRequired,
  pat: PropTypes.string.isRequired,
  way: PropTypes.string.isRequired,
};

function Banner({ name, pat, way, type = "myRcpList" }) {
  const { bannerWr, banner } = styles;
  return (
    <>
      {type === "haeRcp" && (
        <div className={`${bannerWr} ${styles[type]}`}>
          <div className={banner}>
            <h2>{name}</h2>
            <ul>
              <li>
                <Tag color="primary">{pat}</Tag>
              </li>
              <li>
                <Tag color="primary">{way}</Tag>
              </li>
            </ul>
          </div>
        </div>
      )}
      {type === "myRcpList" && <div>나만의 레시피 리스트용</div>}
      {type === "myRcpRegister" && <div>나만의 레시피 등록용</div>}
    </>
  );
}

export default Banner;