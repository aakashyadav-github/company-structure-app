import Childrens from './Childrens';
import data from './staticData.json'

//Parent component to display iterate the structured data.
function App() {
  return (
    <div className="App">
      <h1>Company Structure App</h1>
      Click on the department to see the sub departments
     {data.map((d)=>{
       return (<Childrens key={d.name} data={d}/>)
     })}
    </div>
  );
}

export default App;
