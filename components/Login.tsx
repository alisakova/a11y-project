import { Button } from "@/components/Button";

const Input = ({ type, id, label }) => {
  return (
    <>
      <label htmlFor={id} className="block mb-2 text-lg">{label}</label>
      <input type={type} id={id} className="bg-inputBg border-lightPurple border h-16 w-full rounded-8px px-4 text-lg" />
    </>
  )
}

export const Login = () => {
  const handleSubmitClick = (e) => {
    e.preventDefault();
  }

  return (
    <form action="">
      <div className="mb-10">
        <Input type="text" id="login" label="Логин" />
      </div>
      <div className="mb-10">
        <Input type="password" id="password" label="Пароль" />
      </div>
      <Button onClick={handleSubmitClick} type="submit" text="Вход" className="w-full text-xl bg-lightPurple text-black" />
    </form>
  )
}