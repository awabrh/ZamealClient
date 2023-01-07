import React from "react";

interface InfoCardProps {
  type?: "driver" | "car" | "tarheel";
  values: string[];
  className?: string;
}

function InfoCard({ type, values, className }: InfoCardProps) {
  var labels: String[];
  var title: string;
  if (type === "driver") {
    title = "معلومات السائق :";
    labels = ["اسم السائق", "السكن", "رقم الهاتف"];
  } else if (type === "car") {
    title = "معلومات المركبة :";
    labels = ["الموديل", "عدد المقاعد", "التكييف"];
  } else {
    title = "معلومات الترحيل :";
    labels = ["المواعيد", "الأيام", "المناطق"];
  }

  return (
    <div className={className}>
      <div className="relative flex border-primary gap-3 py-6 px-4 rounded-lg border-2 font-light w-full md:w-96">
        <h3 className="absolute -top-4 right-8 bg-black px-3 font-bold text-lg">
          {title}
        </h3>
        <div className="grid grid-cols-12 gap-2">
          <p className="font-bold col-span-4">{labels[0]}</p>
          <p className="">:</p>
          <p className=" col-span-7">{values[0]}</p>
          <p className="font-bold col-span-4">{labels[1]}</p>
          <p className="">:</p>
          <p className=" col-span-7">{values[1]}</p>
          <p className="font-bold col-span-4">{labels[2]}</p>
          <p className="">:</p>
          <p className="col-span-7">{values[2]}</p>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
