import type { VisualStyleGroup } from "@/features/landing/types/dictionary";
import { getStyleChipClasses } from "@/features/landing/utils/get-style-chip-classes";

interface StyleGroupRowProps {
  group: VisualStyleGroup;
}

/** Một nhóm phong cách: nhãn nhóm bên trái, các chip phong cách bên phải. */
export default function StyleGroupRow({ group }: StyleGroupRowProps) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
      <span className="text-sm text-muted sm:w-56 sm:shrink-0">{group.label}</span>
      <ul className="flex flex-wrap gap-2">
        {group.styles.map((styleName) => (
          <li key={styleName} className={getStyleChipClasses(group.isDefault)}>
            {styleName}
          </li>
        ))}
      </ul>
    </div>
  );
}
