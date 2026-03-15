const 品质颜色映射: Record<string, string> = {
  N: '#9ca3af',
  R: '#4ade80',
  SR: '#60a5fa',
  SSR: '#c084fc',
  UR: '#fb923c',
};

const 物品品质颜色映射: Record<string, string> = {
  凡品: '#9ca3af',
  良品: '#4ade80',
  上品: '#60a5fa',
  极品: '#c084fc',
  传说: '#fb923c',
  神话: '#facc15',
};

const 属性等级颜色映射: Record<string, string> = {
  低下: '#94a3b8',
  普通: '#67e8f9',
  优秀: '#34d399',
  一流: '#4ade80',
  超一流: '#60a5fa',
  当世巅峰: '#c084fc',
  传说: '#fb923c',
  神话: '#facc15',
};

const 武技等级颜色映射: Record<string, string> = {
  入门: '#9ca3af',
  精通: '#4ade80',
  大成: '#60a5fa',
  绝学: '#c084fc',
  神技: '#fb923c',
};

const 伤势颜色映射: Record<string, string> = {
  完好: '#d6c4a4',
  轻伤: '#f59e0b',
  中伤: '#ef4444',
  重伤: '#b91c1c',
  濒死: '#7f1d1d',
};

function toStyle(color?: string): string {
  return color ? `color:${color};font-weight:700;` : '';
}

function toSvgTextStyle(color?: string): string {
  return color ? `fill:${color};font-weight:700;` : '';
}

export function 品质文本样式(品质?: string | null): string {
  return toStyle(品质 ? 品质颜色映射[品质] : undefined);
}

export function 物品品质文本样式(品质?: string | null): string {
  return toStyle(品质 ? 物品品质颜色映射[品质] : undefined);
}

export function 属性等级文本样式(等级?: string | null): string {
  return toStyle(等级 ? 属性等级颜色映射[等级] : undefined);
}

export function 属性等级SVG文本样式(等级?: string | null): string {
  return toSvgTextStyle(等级 ? 属性等级颜色映射[等级] : undefined);
}

export function 武技等级文本样式(等级?: string | null): string {
  return toStyle(等级 ? 武技等级颜色映射[等级] : undefined);
}

export function 伤势文本样式(伤势?: string | null): string {
  return toStyle(伤势 ? 伤势颜色映射[伤势] : undefined);
}
