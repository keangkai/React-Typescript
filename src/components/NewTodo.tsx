import React, { useRef } from "react"

import "./NewTodo.css"

type NewTodoProps = {
	onAddTodo: (todoText: string) => void
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
	const textInputRef = useRef<HTMLInputElement>(null)

	const todoSubmithandler = (event: React.FormEvent) => {
		event.preventDefault()
		const enteredText = textInputRef.current!.value
		props.onAddTodo(enteredText)
	}

	return (
		<form onSubmit={todoSubmithandler}>
			<div className="form-control">
				<label htmlFor="todo-text">Todo text</label>
				<input type="text" name="" id="todo-text" ref={textInputRef} />
			</div>
			<button type="submit">Add Todo</button>
		</form>
	)
}

export default NewTodo
