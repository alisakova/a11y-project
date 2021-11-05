import { Button } from "@/components/Button";

export const SubscribeForm = () => {
  return (
    <form action="">
      <label htmlFor="email" className="block mb-2">
        Email
      </label>
      <input
        id="email"
        type="text"
        className="border-b py-3 mr-5 px-1 bg-transparent w-full sm:w-60"
        placeholder="Email"
      />
      <Button
        type="submit"
        text="Подписаться"
        className="w-full mt-4 sm:mt-0 sm:w-auto"
      />
      <div className="mt-4 flex items-center">
        <input
          id="agreement"
          type="checkbox"
          className="w-6 h-6 mr-2 cursor-pointer"
        />
        <label htmlFor="agreement" className="cursor-pointer">
          Согласен на обработку персональных данных
        </label>
      </div>
    </form>
  );
};
