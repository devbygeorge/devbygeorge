import s from "./Tabs.module.scss";

type Props = {
  label: string;
};

export default function Tabs({ label }: Props) {
  return (
    <div className={s.tabs}>
      <div className={s.item}>
        <span>{label || "example"}</span>
        <i className={`ri-close-line ${s.icon}`}></i>
      </div>
    </div>
  );
}
