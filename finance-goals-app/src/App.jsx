import './App.css'
import GoalForm from './components/GoalForm'
import GoalCard from './components/GoalCard'
import { useState } from 'react'

function App() {
  const [goals, setGoals] = useState([])

  function addGoal(goal) {
    setGoals([...goals, goal])
  }

  return (
    <div className='app'>
      <h1>Personal Financial Goal Tracker</h1>

      <GoalForm addGoal={addGoal} />

      <div>
        <h2>Your Goals</h2>

        {goals.map(goal => (
          <GoalCard key={goal.id} goal={goal} />
        ))}
      </div>
    </div>
  )
}

export default App
