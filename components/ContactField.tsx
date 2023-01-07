import React, { InputHTMLAttributes, useState } from "react";
import TextField from "./TextField";

type ContactProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
};

type contactTextFieldProps = {
  label: string;
  type: "number" | "text";
  placeholder: string;
};

const ContactField: React.FC<ContactProps> = ({ ...props }) => {
  const mobileProps: contactTextFieldProps = {
    label: "رقم هاتفي هو",
    type: "number",
    placeholder: "0912345678",
  };
  const [customProps, setCustomProps] =
    useState<contactTextFieldProps>(mobileProps);
  const [isMobile, setIsMobile] = useState<boolean>(true);

  const twitterProps: contactTextFieldProps = {
    label: "اسم المستخدم الخاص بي في تويتر هو",
    type: "text",
    placeholder: "مثال : awabrh , elonMusk,...",
  };

  return (
    <div className="flex flex-col w-full max-w-sm">
      <div className="grid grid-cols-2 pb-3">
        <div>
          <input
            type="radio"
            name="isMobile"
            value="mobile"
            checked={isMobile}
            onChange={() => {
              setIsMobile(true);
              setCustomProps(mobileProps);
            }}
          />
          <label className="font-light px-2">رقم الهاتف</label>
        </div>
        <div>
          <input
            type="radio"
            name="isMobile"
            value="twitter"
            checked={!isMobile}
            onChange={() => {
              setIsMobile(false);
              setCustomProps(twitterProps);
            }}
          />
          <label className="font-light px-2">حسابك في توتير</label>
        </div>
      </div>
      <TextField {...props} {...customProps} />
    </div>
  );
};

export default ContactField;
