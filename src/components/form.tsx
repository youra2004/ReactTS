import React, {  useState } from "react"

interface TodoFormProps{
    onAdd(title:string) :void
}
const Form: React.FC<TodoFormProps> = (props) =>{
    const [title, setTitle] = useState<string>("")

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setTitle(event.target.value)
    }

    const keyPressHandler = (event: React.KeyboardEvent) =>{
        if(event.key === "Enter"){
            event.preventDefault()
            props.onAdd(title)
            setTitle("")
        }
    }
    return <div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s6">
        <input placeholder="Todo" id="first_name" type="text" className="validate" value={title} onChange={changeHandler} onKeyDown={keyPressHandler}/>

        </div>
      </div>
    </form>
  </div>
}

export default Form