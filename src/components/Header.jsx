const Header = ({ name, altSpellings }) => {
  return (
    <div className="space-y-1">
      <h1 className="text-black text-5xl font-bold font-['SF Pro Text']">
        {name}
      </h1>
      <div className="space-x-1">
        {altSpellings.map((item, i) => (
          <span
            key={i}
            className="bg-emerald-200 rounded-[50px] text-white px-2 py-0.5 text-xs font-bold font-['SF Pro Text']"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Header;
