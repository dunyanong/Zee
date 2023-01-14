function Card({ card }) {
  return (
    <>
      <a
        href="#"
        className="block max-w-sm p-6 bg-[#E6F7FE] border border-gray-200 rounded-xl shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 "
      >
        <div className="flex flex-col text-center">
          <Emoji label={card.name} emoji={card.emoji} />

          <span className="my-2" />

          <p className="font-normal text-sm leading-3 text-[#036B9C]">
            {card.name}
          </p>
        </div>
      </a>
    </>
  );
}

const Emoji = ({ emoji, label }) => {
  return (
    <span role="img" aria-label={label} className="text-3xl">
      {emoji}
    </span>
  );
};

export default Card;
