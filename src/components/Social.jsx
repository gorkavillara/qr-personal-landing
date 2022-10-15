export default function Social({ network }) {
  const { url, img, name } = network;
  return (
    <a href={url} className="social-network">
      <img src={img} alt={name} />
      <span className="name">{name}</span>
    </a>
  );
}
