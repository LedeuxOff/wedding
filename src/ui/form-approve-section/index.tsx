import { useInView } from "react-intersection-observer";
import { ErrorIcon } from "./error-icon";
import { useFormApproveSectionModel } from "./model";
import { SuccessIcon } from "./success-icon";

export const FormApproveSection = () => {
  const {
    formData,
    onSubmit,
    onChangeFormData,
    textAreaHandler,
    firstNameError,
    lastNameError,
    textareaRef,
    state,
  } = useFormApproveSectionModel();

  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  console.log(state);

  return (
    <div className="max-w-[570px] flex flex-col gap-8 items-center px-4 pt-16 relative">
      <span
        ref={ref1}
        className={`great-vibes text-[48px] text-red-800 relative duration-1000 ease-out transform ${
          inView1 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
        }`}
      >
        Присутствие
      </span>
      <span
        ref={ref2}
        className={`text-center text-black relative duration-1000 ease-out transform ${
          inView2 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
        }`}
      >
        Просим вас подтвердить свое присутствие до 1 июля 2025 года на нашем
        празднике любым удобным способом или заполните форму ниже:
      </span>

      {state.errors && <ErrorIcon />}

      {state.succeeded && <SuccessIcon />}

      {!state.succeeded && !state.errors && (
        <form onSubmit={onSubmit} className="flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="lastName"
              className={`text-[14px] font-[500] ${
                lastNameError && "text-red-700"
              }`}
            >
              Фамилия
            </label>
            <input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={onChangeFormData}
              className={`border rounded-[8px] focus:outline-none focus:ring-0 text-[16px] py-2 px-3 ${
                lastNameError && "border-red-700"
              }`}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="lastName"
              className={`text-[14px] font-[500] ${
                firstNameError && "text-red-700"
              }`}
            >
              Имя
            </label>
            <input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={onChangeFormData}
              className={`border rounded-[8px] focus:outline-none focus:ring-0 text-[16px] py-2 px-3 ${
                firstNameError && "border-red-700"
              }`}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="comment" className="text-[14px] font-[500]">
              Комментарий
            </label>
            <textarea
              ref={textareaRef}
              id="comment"
              name="comment"
              value={formData.comment}
              onChange={onChangeFormData}
              onInput={textAreaHandler}
              className="resize-none overflow-hidden border rounded-[8px] focus:outline-none focus:ring-0 text-[16px] py-2 px-3"
            />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className={`text-white py-4 rounded-[8px] cursor-pointer ${
              state.submitting ? "bg-red-900" : "bg-red-800"
            }`}
          >
            {state.submitting ? "Загрузка..." : "Отправить"}
          </button>
        </form>
      )}
    </div>
  );
};
