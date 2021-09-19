# 📐 use-measure-marks
## Simple react hook for performance measure analysis.


### Here's the example:

```jsx
const { startMark, endMark } = useMeasureMarks({
    startMark: "mounted component",
    endMark: "unmounted component",
    measureMark: "component life time",
  });

useEffect(() => {
  startMark()
  return () => endMark()
},[])

```

## And don't forget to switch on recording in performance tab.