import { useState } from 'react'

function GoalCard({
  goal,
  updateGoal,
  deleteGoal
}) {
  const [amount, setAmount] = useState('')
  const [milestone, setMilestone] = useState('')
  const [milestoneLabel, setMilestoneLabel] =
    useState('')

  const progress =
    (goal.currentAmount / goal.target) * 100

  function addMoney() {
    const value = Number(amount)

    const updatedGoal = {
      ...goal,

      currentAmount:
        goal.currentAmount + value,

      history: [
        {
          id: Date.now(),
          amount: value,
          type: 'deposit',
          date: new Date().toLocaleDateString()
        },

        ...goal.history
      ]
    }

    updateGoal(updatedGoal)

    setAmount('')
  }

  function removeMoney() {
    const value = Number(amount)

    const updatedGoal = {
      ...goal,

      currentAmount:
        goal.currentAmount - value,

      history: [
        {
          id: Date.now(),
          amount: value,
          type: 'withdraw',
          date: new Date().toLocaleDateString()
        },

        ...goal.history
      ]
    }

    updateGoal(updatedGoal)

    setAmount('')
  }

  function addMilestone() {
    if (!milestone || !milestoneLabel) return

    const updatedGoal = {
      ...goal,

      milestones: [
        ...goal.milestones,

        {
          id: Date.now(),
          amount: Number(milestone),
          label: milestoneLabel
        }
      ]
    }

    updateGoal(updatedGoal)

    setMilestone('')
    setMilestoneLabel('')
  }

  return (
    <div className="goal-card">
      <h3>{goal.title}</h3>

      <p>{goal.description}</p>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{
            width: `${progress}%`
          }}
        ></div>
      </div>

      <p className="percentage">
        {progress.toFixed(1)}% Complete
      </p>

      <p>
        €{goal.currentAmount} / €
        {goal.target}
      </p>

      <div className="money-input">
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) =>
            setAmount(e.target.value)
          }
        />

        <button onClick={addMoney}>
          Add
        </button>

        <button onClick={removeMoney}>
          Remove
        </button>
      </div>

      <div className="milestone-list">
        <h4>Milestones</h4>

        <div className="money-input">
          <input
            type="number"
            placeholder="Milestone Amount"
            value={milestone}
            onChange={(e) =>
              setMilestone(e.target.value)
            }
          />

          <input
            type="text"
            placeholder="Milestone Name"
            value={milestoneLabel}
            onChange={(e) =>
              setMilestoneLabel(
                e.target.value
              )
            }
          />

          <button onClick={addMilestone}>
            Add
          </button>
        </div>

        {goal.milestones.map(item => {
          const completed =
            goal.currentAmount >= item.amount

          return (
            <div
              key={item.id}
              className={`milestone-item ${
                completed
                  ? 'completed'
                  : ''
              }`}
            >
              <span>
                {completed ? '✓' : '○'}{' '}
                {item.label}
              </span>

              <span>
                €{item.amount}
              </span>
            </div>
          )
        })}
      </div>

      <div className="history-log">
        <h4>History</h4>

        {goal.history.map(item => (
          <div
            key={item.id}
            className="history-item"
          >
            <p>
              {item.type === 'deposit'
                ? '+'
                : '-'}
              €{item.amount}
            </p>

            <small>{item.date}</small>
          </div>
        ))}
      </div>

      <div className="goal-actions">
        <button
          className="delete-btn"
          onClick={() =>
            deleteGoal(goal.id)
          }
        >
          Delete Goal
        </button>
      </div>
    </div>
  )
}

export default GoalCard