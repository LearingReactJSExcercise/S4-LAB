import CourseGoal from "./components/CourseGoal";


function App() {
  return (
    <div id="app" data-testid="app">
      <h1>Time to Practice</h1>
      <p>One course, many goals! 🎯</p>

      <ul>{/* OUTPUT AT LEAST THREE CourseGoal components here */}
         <CourseGoal title="LEARN REACT" description="In-depth" />
         <CourseGoal title="PRACTICE" description="Practice working with React components" />
      </ul>
    </div>
  );
}

export default App;
