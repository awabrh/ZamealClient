import Navbar from "../components/Navbar";

function custom404() {
  return (
    <div dir="rtl">
      <Navbar />
      <div className="flex flex-col w-full h-96 mt-32 items-center">
        <h2 className="text-4xl font-bold">ياللاحراج !</h2>
        <h2 className="text-4xl font-bold mb-10"> 👈👉 </h2>
        <p>يبدو ان هنالك خطأ</p>
        <p>هذه الصفحة غير موجودة</p>
      </div>
    </div>
  );
}

export default custom404;
