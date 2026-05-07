import { useEffect, useState } from 'react'
import './App.css'

import GoalForm from './components/GoalForm'
import GoalCard from './components/GoalCard'

function App() {
  const [goals, setGoals] = useState(() => {
    const savedGoals = localStorage.getItem('goals')

    return savedGoals ? JSON.parse(savedGoals) : []
  })

  useEffect(() => {
    localStorage.setItem('goals', JSON.stringify(goals))
  }, [goals])

  function addGoal(goal) {
    setGoals([...goals, goal])
  }

  function updateGoal(updateGoal) {
    setGoals(
      goals.map(goal =>
        goal.id === updateGoal.id
        ? updateGoal
        : goal
      )
    )
  }

  function deleteGoal(id) {
    setGoals(goals.filter(goal => goal.id !== id))
  }

  return (
    <div className='app'>
      <div className='container'>
        <h1 className='main-title'>
          Financial Goal Tracker
        </h1>

        <GoalForm addGoal={addGoal} />

        <div className='goals-grid'>
          {goals.map(goal => (
            <GoalCard
            key={goal.id}
            goal={goal}
            updateGoal={updateGoal}
            deleteGoal={deleteGoal}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
