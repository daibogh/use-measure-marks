import {useMemo} from 'react'
export type MarkFunction = () => void;
export type CollectPerformanceFunction = () => PerformanceEntryList;
export function useMeasureMarks ({
  startMark,
  endMark,
  measureMark,
}: {
  startMark: string;
  endMark: string;
  measureMark: string;
}): {
  startMark: MarkFunction;
  endMark: MarkFunction;
  collectPerformanceList: CollectPerformanceFunction;
} {
  return useMemo(
    () => ({
      startMark: () => {
        performance.mark(startMark);
      },
      endMark: () => {
        performance.mark(endMark);
        try {
          performance.measure(measureMark, startMark, endMark);
        } catch (e) {
          console.error(e);
        }
      },
      collectPerformanceList: () => performance.getEntriesByName(measureMark),
    }),
    [startMark, endMark, measureMark]
  );
};
