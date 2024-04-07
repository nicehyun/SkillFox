// ref의 타입은 RefObject<T>가 되며 T는 HTMLElement를 상속받은 타입입니다.

import { RefObject, useEffect } from "react";

// handler의 타입은 MouseEvent를 매개변수로 받고 반환 값이 없는 함수입니다.
function useOutsideClick<T extends HTMLElement>(
  ref: RefObject<T>,
  handler: (event: MouseEvent | TouchEvent) => void,
): void {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      // event.target이 Node 인스턴스인 경우만 처리합니다.
      // ref.current가 null이 아니고, event.target이 ref.current 안에 포함되지 않는 경우에 handler를 호출합니다.
      if (
        !(event.target instanceof Node) ||
        (ref.current && !ref.current.contains(event.target))
      ) {
        handler(event);
      }
    };

    // Mouse and touch events for detecting outside clicks
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]); // useEffect의 의존성 배열에 ref와 handler를 포함시킵니다.
}

export default useOutsideClick;
