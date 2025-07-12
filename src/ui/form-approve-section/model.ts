import { guestData } from "../../config/guests-data";
import { useForm } from "@formspree/react";
import { useRef, useState, type SyntheticEvent } from "react";
import { useSearchParams } from "react-router-dom";

export const useFormApproveSectionModel = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [guestNameError, setGuestNameError] = useState(false);
  const [searchParams] = useSearchParams();
  const inviteId = searchParams.get("id");

  const guestInviteData = guestData.find((item) => item.id === inviteId);

  const [formData, setFormData] = useState({
    guestName: guestInviteData?.guestName || "Неопознанный бобер",
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
    if (!formData.guestName) {
      return setGuestNameError(true);
    }

    setGuestNameError(false);
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
    textareaRef,
    guestNameError,
    state,
  };
};
