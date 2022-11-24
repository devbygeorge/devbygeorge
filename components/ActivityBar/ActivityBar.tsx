import s from "./ActivityBar.module.scss";

type Props = {};

export default function ActivityBar({}: Props) {
  return (
    <div className={s.container}>
      <ul className={s.list}>
        <li className={s.item}>
          <i className="ri-terminal-box-fill icon"></i>
        </li>
        <li className={s.item}>
          <i className={`ri-user-4-fill icon ${s.active_icon}`}></i>
        </li>
        <li className={s.item}>
          <i className="ri-gamepad-fill icon"></i>
        </li>
      </ul>
    </div>
  );
}
