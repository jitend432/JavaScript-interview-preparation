// useEffect
let prevDeps = [];
function useEffect(callback, deps) {
    let hasChanged = true;
    if(prevDeps.length) {
        hasChanged = deps.some((dep,index)=> dep !==prevDeps[index])
    }
    if(hasChanged) {
        callback()
        prevDeps = deps;
    }
}
// Simulate render
function Component(count) {
  useEffect(() => {
    console.log("Effect run hua, count:", count);
  }, [count]);
}
Component(1);

//-----------------------------------------------------------------------------

// UseState
function useState(initialValue) {
  let state = initialValue;

  function setState(newValue) {
    state = newValue;
    console.log("Updated State:", state);
  }

  return [state, setState];
}
const [count, setCount] = useState(0);

console.log(count); // 0

setCount(5); // Updated State: 5