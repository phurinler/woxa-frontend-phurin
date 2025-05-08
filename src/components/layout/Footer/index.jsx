const Footer = () => {
  return (
    <section className="mt-auto">
      <div className="flex justify-center items-center py-2 px-12 bg-slate-800">
        <p className="text-xs md: text-md text-white text-center">
          <b>
            © 2025{" "}
            <a
              href="https://phurin.vercel.app/"
              target="_blank"
              className="text-blue-500 underline"
            >
              Phurin
            </a>
            . Woxa Assignment for front-end developer application
          </b>
        </p>
      </div>
    </section>
  );
};

export default Footer;
