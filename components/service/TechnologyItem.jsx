import Image from 'next/image';

const TechnologyItem = ({ src, alt, name }) => {
  return (
    <li>
      <span>
        <Image
          width={10}
          height={10}
          className="svg"
          src={src}
          alt={alt}
        />
      </span>
      {name}
    </li>
  );
};

export default TechnologyItem;
