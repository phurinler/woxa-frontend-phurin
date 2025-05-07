const EmptyPage = () => {
  return (
    <section className=" max-w-7xl w-full h-full mx-auto my-auto flex flex-col gap-y-12 py-12 px-8 md:px-16">
      <div className="flex flex-col justify-center items-center gap-y-6 text-center border-2 border-slate-400 rounded-4xl p-6 md:p-12 w-fit mx-auto">
        <p className="text-lg text-slate-400">WE'RE STILL</p>
        <p className="text-6xl font-bold text-blue-700">Cooking Our Website</p>
        <p className="text-lg text-slate-400">
          We're going to launch our website Very Soon.
          <br />
          Stay Tune.
        </p>
      </div>
    </section>
  );
};

export default EmptyPage;
