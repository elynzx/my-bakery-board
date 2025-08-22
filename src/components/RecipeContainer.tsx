import FilterBar from './FilterBar'
import RecipeCard from './RecipeCard'
import RecipeDetails from './RecipeDetails'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

export default function RecipeContainer() {
  return (
    <>
      <section>
        <div>
          <FilterBar />
        </div>
      </section>
      <LoginForm/>
      <RegisterForm/>
      <RecipeDetails />
      <section>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </div>
      </section>
    </>
  )
}
