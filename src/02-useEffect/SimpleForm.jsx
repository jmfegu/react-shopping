import { useEffect, useState } from "react"

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: '',
    email: '',
  });

  const {username, email} = formState;

  const onInputChange = ({target}) => {
    const { name , value } = target;
    setFormState({
      ...formState,
      [ name ]: value,
    })
  }

  useEffect(() => {
    console.log('Use Effect llamado')

    // return () => {
    //   second
    // }
  }, [])


  return (
    <>
      <h1>Simple Form</h1>
      <form>
        <input
          type="text"
          name="username"
          value={username}
          placeholder="Nombre"
          className="form-control"
          onChange={onInputChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          className="form-control mt-2"
          onChange={onInputChange}
        />
      </form>
    </>
  )
}
