'use client'
import Image from "next/image";

const Card = ({
  children,
  height,
  width,
  image
}: {
  children: React.ReactNode;
  height: number;
  width: number;
  image: string;
}) => {
  return (
    <div className="card">
      <Image src={image} alt="Card Image" height={height} width={width} />
      <div className="card__content">{children}</div>
    </div>
  );
};

export default Card;
