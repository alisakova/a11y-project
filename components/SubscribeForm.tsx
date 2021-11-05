import { Button } from "@/components/Button";

export const SubscribeForm = () => {
  return (
    <form action="">
      <label htmlFor="email" className="block mb-2">Email</label>
      <input id="email" type="text" className="border-b py-3 mr-5 px-1 bg-transparent w-60" placeholder="Email" />
      <Button type="submit" text="Подписаться" />
      <div className="mt-4 flex items-center">
        <input id="agreement" type="checkbox" className="w-6 h-6 mr-2 cursor-pointer" />
        <label htmlFor="agreement" className="cursor-pointer">Согласен на обработку персональных данных</label>
      </div>
    </form>
  )
}