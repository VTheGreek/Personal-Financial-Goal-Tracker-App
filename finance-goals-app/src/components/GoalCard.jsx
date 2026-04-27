function GoalCard({ goal }) {
    const progress = (goal.currentAmount / goal.target) * 100
    
    return (
        <div className="goal-card">
            <h3>{goal.title}</h3>

            <p>{goal.description}</p>

            <p>
                {goal.currentAmount}€ / {goal.target}€
            </p>

            <p>
                {progress.toFixed(1)}% Complete
            </p>

            <div className="progress-bar">
                <div 
                className="progress-fill"
                style={{ width: `${progress}`}}>

                </div>
            </div>
        </div>
    )
} 

export default GoalCard