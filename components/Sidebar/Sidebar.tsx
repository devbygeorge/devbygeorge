import s from "./Sidebar.module.scss";

type Props = {
  data: Window[];
  setCheckedTech?: any;
};

type Window = {
  title: string;
  type: string;
  items: Item[];
};

type Item = {
  icon: string;
  label: string;
  isDir?: boolean;
  color?: string;
  arrowIcon?: string;
  isActive?: boolean;
};

export default function Sidebar({ data, setCheckedTech }: Props) {
  const renderItems = (type: string, items: any[]) => {
    if (type === "checkbox") {
      return items.map((item, i) => (
        <li key={i} className={s.item}>
          <label className="checkbox-wrapper">
            <input
              type="checkbox"
              value={item.slug}
              onChange={(e) => {
                if (e.target.checked) {
                  setCheckedTech((state: any) => {
                    return [...state, e.target.value];
                  });
                } else {
                  setCheckedTech((state: any) => {
                    return state.filter(
                      (item: string) => item !== e.target.value
                    );
                  });
                }
              }}
            />
            <span className="checkmark"></span>
          </label>
          <span>{item.name}</span>
        </li>
      ));
    }

    if (type === "fileSystem") {
      return items.map((item, i) => {
        if (item.isDir) {
          return (
            <li key={i} className={s.item}>
              <i className={item.arrowIcon}></i>
              <i style={{ color: item.color }} className={item.icon}></i>
              <span
                className={`${s.label} ${item.isActive ? s.label_active : ""}`}
              >
                {item.label}
              </span>
            </li>
          );
        } else {
          return (
            <li key={i} className={s.item}>
              <i className={`ri-arrow-down-s-line ${s.icon_hidden}`}></i>
              <i className="ri-markdown-fill"></i>
              <span className={s.label}>{item.label}</span>
            </li>
          );
        }
      });
    }

    return items.map((item, i) => (
      <li key={i} className={s.item}>
        <i className={item.icon}></i>
        <span className={s.label}>{item.label}</span>
      </li>
    ));
  };

  return (
    <div className={s.container}>
      {data.map(({ title, type, items }, i) => (
        <div key={i} className={s.window}>
          <h2 className={s.headline}>
            <i className="ri-arrow-drop-down-fill"></i>
            <span>{title}</span>
          </h2>
          <ul className={s.list}>{renderItems(type, items)}</ul>
        </div>
      ))}
    </div>
  );
}
