type PostProps = {
  title?: string;
  text?: string;
  image: string;
  caption?: string;
};

export default function Post({ title, text, image, caption }: PostProps) {
  return (
    <div className="w-[1000px] pt-5 pb-10 font-serif">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-lg mb-6">{text}</p>
      <img src={image} alt={title} className="w-full" />
      {caption && <p className="text-lg mt-2">{caption}</p>}
    </div>
  );
}