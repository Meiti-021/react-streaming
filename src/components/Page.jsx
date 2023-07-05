const Page = ({ children, title }) => {
  return (
    <div className="">
      <div className="h-96 pt-20 flex-col gap-5 bg-[url(/assets/others/banner.webp)] bg-cover bg-center flex justify-center items-center contrast-125">
        <p className="text-6xl font-semibold text-white capitalize">{title}</p>
        <p className="text-xl">
          Home {">"} {title}
        </p>
      </div>
      <div className="px-5 py-10">
        <div className="max-w-7xl mx-auto">{children}</div>
      </div>
    </div>
  );
};

export default Page;
