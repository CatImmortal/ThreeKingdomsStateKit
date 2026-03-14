export type DragPosition = {
  left: number;
  top: number;
};

export function clampToViewport(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function computeCenteredPosition(panelWidth: number, panelHeight: number, viewportWidth: number, viewportHeight: number): DragPosition {
  return {
    left: clampToViewport((viewportWidth - panelWidth) / 2, 8, viewportWidth - panelWidth - 8),
    top: clampToViewport((viewportHeight - panelHeight) / 2, 8, viewportHeight - panelHeight - 8),
  };
}

export function computeInputAbovePosition(inputRect: DOMRect | null, panelWidth: number, panelHeight: number, viewportWidth: number, viewportHeight: number): DragPosition {
  if (!inputRect) {
    return {
      left: clampToViewport((viewportWidth - panelWidth) / 2, 8, viewportWidth - panelWidth - 8),
      top: clampToViewport(viewportHeight - panelHeight - 160, 8, viewportHeight - panelHeight - 8),
    };
  }
  return {
    left: clampToViewport(inputRect.left + (inputRect.width - panelWidth) / 2, 8, viewportWidth - panelWidth - 8),
    top: clampToViewport(inputRect.top - panelHeight - 24, 8, viewportHeight - panelHeight - 8),
  };
}

export function attachDragHandlers(options: {
  event: PointerEvent;
  panel: HTMLElement;
  win: Window;
  onMovePosition: (position: DragPosition) => void;
}): void {
  const { event, panel, win, onMovePosition } = options;
  const rect = panel.getBoundingClientRect();
  const offsetX = event.clientX - rect.left;
  const offsetY = event.clientY - rect.top;
  const onMove = (moveEvent: PointerEvent) => {
    const left = clampToViewport(moveEvent.clientX - offsetX, 8, win.innerWidth - rect.width - 8);
    const top = clampToViewport(moveEvent.clientY - offsetY, 8, win.innerHeight - rect.height - 8);
    onMovePosition({ left, top });
  };
  const onUp = () => {
    win.removeEventListener('pointermove', onMove);
    win.removeEventListener('pointerup', onUp);
  };
  win.addEventListener('pointermove', onMove);
  win.addEventListener('pointerup', onUp, { once: true });
}
