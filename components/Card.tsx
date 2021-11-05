export const Card = ({ card = {} }) => {
  const { title, subtitle, text, img, imgAlt, titleLink, link, linkText, ariaLabelForLink } = card;
  return (
    <div className="w-1/3 p-5">
      <img src={img} alt={imgAlt} className="mb-6 max-h-148px w-full object-cover" />
      {titleLink ? (
        <a href={titleLink} className="text-2xl mb-4 block text-blue-800 hover:text-blue-900"><h3>{title}</h3></a>
      ) : (
        <h3 className="text-2xl mb-4">{title}</h3>
      )}
      {subtitle && <p className="text-xl mb-2">{subtitle}</p>}
      <p className="mb-6">{text}</p>
      <a href={link} aria-label={ariaLabelForLink} className="border-b text-blue-800 hover:border-transparent">{linkText}</a>
    </div>
  )
}

// TODO:
// 1) фокус на всю карточку