import s from "./Tabs.module.scss";

type Props = {
  label: String;
};

export default function Tabs({ label }: Props) {
  return (
    <div className={s.container}>
      <div className={s.item}>
        <span>{label || "example"}</span>
        <i className="ri-close-line"></i>
      </div>
    </div>
  );
}
