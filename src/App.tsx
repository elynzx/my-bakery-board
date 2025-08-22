import HeaderBar from './components/HeaderBar'
import RecipeContainer from './components/RecipeContainer'

const App = () => {
  return (
    <div className="bg-cream font-body min-h-screen px-60 py-12 text-black">
      <HeaderBar />
      <RecipeContainer />
    </div>
  )
}

export default App
