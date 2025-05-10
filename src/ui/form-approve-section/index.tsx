import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";

export const FormApproveSection = () => {
  const form = useForm({
    values: {
      firstName: "",
      lastName: "",
      middleName: "",
      additionalInfo: "",
    },
  });

  const onSubmit = form.handleSubmit((values) => {
    console.log(values);
  });

  return (
    <div className="max-w-[480px] flex flex-col gap-8 items-center px-4 pt-16 relative">
      <span className="great-vibes text-[48px] text-red-800">Присутствие</span>
      <span className="text-center text-black">
        Просим вас подтвердить свое присутствие до 1 июля 2025 года на нашем
        празднике любым удобным способом или заполните форму ниже:
      </span>

      <Form {...form}>
        <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
          <FormField
            name="firstName"
            render={(controller) => (
              <FormItem>
                <FormLabel>Имя</FormLabel>
                <FormControl>
                  <Input
                    {...controller.field}
                    required
                    className="py-3 h-auto"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="lastName"
            render={(controller) => (
              <FormItem>
                <FormLabel>Фамилия</FormLabel>
                <FormControl>
                  <Input
                    {...controller.field}
                    required
                    className="py-3 h-auto"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="middleName"
            render={(controller) => (
              <FormItem>
                <FormLabel>Отчество</FormLabel>
                <FormControl>
                  <Input
                    {...controller.field}
                    required
                    className="py-3 h-auto"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="additionalInfo"
            render={(controller) => (
              <FormItem>
                <FormLabel>Дополнительная информация</FormLabel>
                <FormControl>
                  <Textarea
                    {...controller.field}
                    rows={3}
                    className="py-3 h-auto"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <button
            type="submit"
            className="bg-red-800 rounded-[16px] text-white py-4 cursor-pointer hover:bg-red-700 transition-colors"
          >
            Отправить
          </button>
        </form>
      </Form>
    </div>
  );
};
