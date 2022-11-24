import s from "./Sidebar.module.scss";

type Props = {};

export default function Sidebar({}: Props) {
  return (
    <div className={s.container}>
      <div className={s.window}>
        <h2 className={s.headline}>
          <i className="ri-arrow-drop-down-fill"></i>
          <span>personal-info</span>
        </h2>
        <ul className={s.list}>
          <li className={s.item}>
            <i className="ri-arrow-right-s-line"></i>
            <i className={`ri-folder-3-fill ${s.icon_red}`}></i>
            <span className={`${s.label} ${s.label_active}`}>bio</span>
          </li>
          <li className={s.item}>
            <i className="ri-arrow-right-s-line"></i>
            <i className={`ri-folder-3-fill ${s.icon_green}`}></i>
            <span className={s.label}>interests</span>
          </li>
          <li className={s.item}>
            <i className="ri-arrow-down-s-line"></i>
            <i className={`ri-folder-3-fill ${s.icon_purple}`}></i>
            <span className={s.label}>education</span>
          </li>
          <li className={s.item}>
            <i className={`ri-arrow-down-s-line ${s.icon_hidden}`}></i>
            <i className="ri-markdown-fill"></i>
            <span className={s.label}>high-school</span>
          </li>
          <li className={s.item}>
            <i className={`ri-arrow-down-s-line ${s.icon_hidden}`}></i>
            <i className="ri-markdown-fill"></i>
            <span className={s.label}>college</span>
          </li>
        </ul>
      </div>
      <div className={s.window}>
        <h2 className={s.headline}>
          <i className="ri-arrow-drop-down-fill"></i>
          <span>contacts</span>
        </h2>
        <ul className={s.list}>
          <li className={s.item}>
            <i className="ri-mail-fill"></i>
            <span className={s.label}>giopasieshvili2@gmail.com</span>
          </li>
          <li className={s.item}>
            <i className="ri-phone-fill"></i>
            <span className={s.label}>+3598246359</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
