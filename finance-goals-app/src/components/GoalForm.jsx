import { useState } from "react"

function GoalForm({ addGoal }) {
    
    const [title, setTitle] = useState('');
    const [target, setTarget] = useState('');
    const [description, setDescription] = useState('');

    function handleSubmit(e) {
        e.preventDefault()

        const newGoal = {
            id: Date.now(),
            title,
            target: Number(target),
            description,
            currentAmount: 0,
            milestones: [],
            history: []
        }

        addGoal(newGoal)

        setTitle('')
        setTarget('')
        setDescription('')
    }

    return (
        <div className="goal-form">
            <h2>Create Goal</h2>

            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                placeholder="Goal Title" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />

                <input type="number"
                placeholder="Target Amount"
                value={target}
                onChange={(e) => setTarget(e.target.value)}
                />

                <textarea 
                placeholder="Goal Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                ></textarea>

                <button type="submit">
                    Add Goal
                </button>
            </form>
        </div>
    )
}

export default GoalForm