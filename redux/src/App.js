import RecipeItem from './recipe-item/RecipeItem';

function App() {
  return (
    <div className="App">
      <RecipeItem recipe={{
        id:1,
        name: 'Lasagna',
      }}/>
      <RecipeItem recipe={{
        id:2,
        name: 'Meat bowl',
      }}/>
      <RecipeItem recipe={{
        id:3,
        name: 'Stake in sauce',
      }}/>
      
    </div>
  );
}

export default App;
