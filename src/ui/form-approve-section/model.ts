import { useForm } from "@formspree/react";
import { useRef, useState, type SyntheticEvent } from "react";

export const useFormApproveSectionModel = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [formData, setFormData] = useState({
    lastName: undefined,
    firstName: undefined,
    comment: undefined,
  });

  const [state, handleSubmit] = useForm("xovdrkdj");

  const onChangeFormData = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName) {
      if (!formData.firstName) {
        setFirstNameError(true);
      }

      if (!formData.lastName) {
        setLastNameError(true);
      }

      return;
    }

    setFirstNameError(false);
    setLastNameError(false);
    handleSubmit(formData);
  };

  const textAreaHandler = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // сброс
      textarea.style.height = `${textarea.scrollHeight}px`; // установка новой высоты
    }
  };

  return {
    formData,
    onSubmit,
    onChangeFormData,
    textAreaHandler,
    firstNameError,
    lastNameError,
    textareaRef,
    state,
  };
};
