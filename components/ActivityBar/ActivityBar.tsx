import s from "./ActivityBar.module.scss";

export default function ActivityBar() {
  return (
    <div className={s.container}>
      <i className="ri-terminal-box-fill icon"></i>
      <i className="ri-user-4-fill icon" data-active="true"></i>
      <i className="ri-gamepad-fill icon"></i>
    </div>
  );
}
