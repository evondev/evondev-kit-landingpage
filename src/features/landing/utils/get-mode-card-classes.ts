import { cn } from "@/utils/cn";

export function getModeCardClasses(isWide: boolean) {
  return cn(
    "group grid min-w-0 gap-y-0 bg-background p-6 transition-colors hover:bg-surface sm:p-8",
    // Bốn hàng icon / tiêu đề / mô tả / prompt dùng chung dòng kẻ với card bên cạnh (subgrid):
    // tiêu đề dài xuống dòng thì cả hàng giãn theo, nên mô tả và hộp prompt vẫn thẳng nhau.
    // Khoảng cách giữa các hàng nằm ở padding của từng phần, vì subgrid chỉ có một gap chung.
    !isWide && "row-span-4 grid-rows-subgrid",
    // Card rộng: hộp prompt bên phải trải qua hàng tiêu đề và mô tả; hàng mô tả là 1fr để phần
    // cao dư của hộp prompt dồn vào đó, tiêu đề không bị đẩy xa mô tả.
    isWide && "md:grid-cols-[minmax(0,28rem)_minmax(0,1fr)] md:grid-rows-[auto_auto_1fr] md:gap-x-12",
  );
}
