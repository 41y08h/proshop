export default function Rating({ value, text, color = "orange" }) {
  return (
    <div className="rating">
      {Array(5)
        .fill()
        .map((_, index) => (
          <span>
            <i
              style={{ color }}
              className={
                value >= index + 1
                  ? "fas fa-star"
                  : value >= index + 0.5
                  ? "fas fa-star-half-alt"
                  : "far fa-star"
              }
            />
          </span>
        ))}
      {text && <span>{text}</span>}
    </div>
  );
}
