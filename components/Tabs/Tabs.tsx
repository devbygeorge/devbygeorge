import s from "./Tabs.module.scss";

type Props = {};

export default function Tabs({}: Props) {
  return (
    <div className={s.container}>
      <div className={s.item}>
        <span>personal-info</span>
        <i className="ri-close-line"></i>
      </div>
    </div>
  );
}
