import type { FrameSide } from "@/features/landing/types/frame-side";
import { getFrameCrossClasses } from "@/features/landing/utils/get-frame-cross-classes";

interface FrameCrossProps {
  side: FrameSide;
}

export default function FrameCross({ side }: FrameCrossProps) {
  return <span aria-hidden className={getFrameCrossClasses(side)} />;
}
