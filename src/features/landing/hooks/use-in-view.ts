import { useEffect, useState, type RefObject } from "react";

interface UseInViewOptions {
  /** Vào khung một lần là thôi theo dõi, dùng cho hiệu ứng chỉ chạy một lần */
  isOnce?: boolean;
  rootMargin?: string;
}

/** Phần tử có đang nằm trong khung nhìn không, để animation chỉ chạy khi thấy được. */
export function useInView<TElement extends Element>(
  elementRef: RefObject<TElement | null>,
  { isOnce = false, rootMargin = "0px" }: UseInViewOptions = {},
) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);

        if (entry.isIntersecting && isOnce) observer.disconnect();
      },
      { rootMargin },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [elementRef, isOnce, rootMargin]);

  return isInView;
}
