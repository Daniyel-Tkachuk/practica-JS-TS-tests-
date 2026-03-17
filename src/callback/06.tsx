import {MouseEvent, ChangeEvent} from "react";

type UserProps = {}

export const User = ({}: UserProps) => {
  const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
    console.log(event.currentTarget.name)
  }

  const saveUser = (event: MouseEvent<HTMLButtonElement>) => {
    console.log(event.currentTarget.name)
  }

  const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    console.log(event.currentTarget.value)
  }

  const onBlurHandler = () => {
    console.log('focus lost')
  }

  return (
    <div>
      <textarea onChange={onChangeHandler} onBlur={onBlurHandler}>
        Daniyel
      </textarea>
      <button name='delete' onClick={deleteUser}>delete</button>
      <button name='save' onClick={saveUser}>save</button>
    </div>
  )
}